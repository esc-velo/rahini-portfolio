
"use client"
import Image from "next/image"
import type { Transition } from "framer-motion";
import React, {
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
  type JSX,
} from "react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type PanInfo,
} from "framer-motion"
import { Check, Loader2, SendHorizontal, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/Button"


const DRAG_CONSTRAINTS = { left: 0, right: 289 }
const DRAG_THRESHOLD = 0.9

const BUTTON_STATES = {
  initial: { width: "100%" },
  completed: { width: "100%" },
}

const ANIMATION_CONFIG: { spring: Transition } = {
  spring: {
    type: "spring",
    stiffness: 400,
    damping: 40,
    mass: 0.8,
  },
};

type StatusIconProps = {
  status: string
}

const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
  const iconMap: Record<StatusIconProps["status"], JSX.Element> = useMemo(
    () => ({
      loading: <Loader2 className="animate-spin" size={20} />,
      success: <Check size={20} />,
      error: <X size={20} />,
    }),
    []
  )

  if (!iconMap[status]) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      {iconMap[status]}
    </motion.div>
  )
}

const useButtonStatus = (resolveTo: "success" | "error") => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const handleSubmit = useCallback(() => {
    setStatus("loading")
    setTimeout(() => {
      setStatus(resolveTo)
    }, 2000)
  }, [resolveTo])

  return { status, handleSubmit }
}

interface SlideButtonProps extends ButtonProps {
  onComplete: () => void;
}

const SlideButton = forwardRef<HTMLButtonElement, SlideButtonProps>(

  (
    {
      className,
      onComplete,
      ...buttonProps
    },
    ref
  ) => {
    const [isDragging, setIsDragging] = useState(false)
    const [completed, setCompleted] = useState(false)
    const dragHandleRef = useRef<HTMLDivElement | null>(null)
    const { status, handleSubmit } = useButtonStatus("success")

    const dragX = useMotionValue(0)
    const springX = useSpring(dragX, ANIMATION_CONFIG.spring)
    const dragProgress = useTransform(
      springX,
      [0, DRAG_CONSTRAINTS.right],
      [0, 1]
    )

    const handleDragStart = useCallback(() => {
      if (completed) return
      setIsDragging(true)
    }, [completed])

    const handleDragEnd = () => {
      if (completed) return
      setIsDragging(false)

      const progress = dragProgress.get()
      if (progress >= DRAG_THRESHOLD) {
        setCompleted(true)
        handleSubmit()
        onComplete()
      } else {
        dragX.set(0)
      }
    }

    const handleDrag = (
      _event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo
    ) => {
      if (completed) return
      const newX = Math.max(0, Math.min(info.offset.x, DRAG_CONSTRAINTS.right))
      dragX.set(newX)
    }

    const adjustedWidth = useTransform(springX, (x) => x + 10)

    return (
      <motion.div
        animate={completed ? BUTTON_STATES.completed : BUTTON_STATES.initial}
        transition={ANIMATION_CONFIG.spring}
        /* Fixed track layout: h-12 w-full max-w-xs or custom width */
        className="relative flex h-12 w-full items-center justify-center rounded-full bg-white/5 border border-white/10 overflow-hidden"
      >
        {!completed && (
          <motion.div
            style={{
              width: adjustedWidth,
            }}
            className="absolute inset-y-0 left-0 z-0 rounded-full bg-accent"
          />
        )}
        
        <AnimatePresence>
          {!completed && (
            <motion.div
              ref={dragHandleRef}
              drag="x"
              dragConstraints={DRAG_CONSTRAINTS}
              dragElastic={0.05}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDrag={handleDrag}
              style={{ x: springX }}
              /* Changed: Use left-1 instead of inset-y-0 p-1. This gives a perfect 4px offset from the left edge */
              className="absolute top-1/2 left-1 -translate-y-1/2 z-10 flex cursor-grab items-center active:cursor-grabbing"
            >
              <Button
                ref={ref}
                disabled={status === "loading"}
                {...buttonProps}
                size="icon"
                /* Locked to exactly h-10 w-10 so it sits perfectly centered vertically in a h-12 track */
                className={cn(
                  "h-10 w-10 shadow-button rounded-full overflow-hidden p-0 drop-shadow-xl aspect-square",
                  isDragging && "scale-105 transition-transform",
                  className
                )}
              >
                <Image
                  src="/avatar-photo.png"
                  alt="Rahini"
                  width={40}
                  height={40}
                  draggable={false}
                  className="h-full w-full rounded-full object-cover"
                  priority
                />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Text background indicator hint */}
        {!completed && (
          <span className="text-xs font-medium text-white/30 tracking-wide select-none pointer-events-none z-0">
            Slide to enter
          </span>
        )}

        <AnimatePresence>
          {completed && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button
                ref={ref}
                disabled={status === "loading"}
                {...buttonProps}
                className={cn(
                  "size-full rounded-full transition-all duration-300",
                  className
                )}
              >
                <AnimatePresence mode="wait">
                  <StatusIcon status={status} />
                </AnimatePresence>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
)

SlideButton.displayName = "SlideButton"

export default SlideButton;
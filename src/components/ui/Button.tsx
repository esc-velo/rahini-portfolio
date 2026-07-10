import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] group",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/95 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/95 shadow-lg shadow-secondary/20 hover:shadow-secondary/30 hover:scale-[1.02]",

        outline:
          "border border-border bg-transparent hover:bg-white/5 hover:border-white/20",

        ghost:
          "hover:bg-white/5 hover:text-white",

        link:
          "text-primary underline-offset-4 hover:underline",

        glass:
          "glass text-foreground hover:bg-primary/10 hover:border-primary/40 hover:text-glow hover:scale-[1.02]",
      },

      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-13 rounded-xl px-7 text-base",
        icon: "h-11 w-11",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  shine?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      shine = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        <span className="relative z-10">{children}</span>

        {shine && !props.disabled && (
          <span
            className="
              pointer-events-none
              absolute
              top-1/2
              left-[-30%]
              h-[180%]
              w-6
              -translate-y-1/2
              -rotate-[25deg]
              bg-white/30
              blur-[2px]
              transition-all
              duration-700
              ease-out
              group-hover:left-[130%]
            "
          />
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { portfolioData } from '@/data/portfolio';

interface SocialLink {
    id: string;
    name: string;
    icon: React.ElementType | string;
    url: string;
}

const socialLinks: SocialLink[] = [
    { id: 'github', name: 'GitHub', icon: '/icons/github.svg', url: portfolioData.github },
    { id: 'linkedin', name: 'LinkedIn', icon: '/icons/linkedin.svg', url: portfolioData.linkedin },
    { id: 'instagram', name: 'Instagram', icon: '/icons/instagram.svg', url: portfolioData.instagram },
    { id: 'twitter', name: 'X', icon: '/icons/twitter.svg', url: portfolioData.twitter },
    { id: 'mail', name: 'Email', icon: '/icons/gmail.svg', url: `mailto:${portfolioData.email}` },
];

const SocialDock: React.FC<{ className?: string }> = ({ className = '' }) => {
    const [visible, setVisible] = useState(true);
    const [mouseX, setMouseX] = useState<number | null>(null);
    const [currentScales, setCurrentScales] = useState<number[]>(socialLinks.map(() => 1));
    const [currentPositions, setCurrentPositions] = useState<number[]>([]);
    const dockRef = useRef<HTMLDivElement>(null);
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    const animationFrameRef = useRef<number | undefined>(undefined);
    const lastMouseMoveTime = useRef<number>(0);

    const getResponsiveConfig = useCallback(() => {
        if (typeof window === 'undefined') return { baseIconSize: 56, maxScale: 1.6, effectWidth: 220 };
        const smaller = Math.min(window.innerWidth, window.innerHeight);
        if (smaller < 480) return { baseIconSize: Math.max(40, smaller * 0.08), maxScale: 1.4, effectWidth: smaller * 0.4 };
        if (smaller < 768) return { baseIconSize: Math.max(48, smaller * 0.07), maxScale: 1.5, effectWidth: smaller * 0.35 };
        return { baseIconSize: 56, maxScale: 1.7, effectWidth: 220 };
    }, []);

    const [config, setConfig] = useState(getResponsiveConfig);
    const { baseIconSize, maxScale, effectWidth } = config;
    const minScale = 1.0;
    const baseSpacing = Math.max(4, baseIconSize * 0.3);

    useEffect(() => {
        const handleResize = () => setConfig(getResponsiveConfig());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [getResponsiveConfig]);

    useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;
    const observer = new IntersectionObserver(
        ([entry]) => {
            setVisible(!entry.isIntersecting);
        },
        {
            rootMargin: "0px 0px -250px 0px",
            threshold: 0,
        }
    );
    observer.observe(contactSection);
    return () => observer.disconnect();
}, []);

    const calculateTargetMagnification = useCallback((mousePosition: number | null) => {
        if (mousePosition === null) return socialLinks.map(() => minScale);
        return socialLinks.map((_, index) => {
            const normalIconCenter = index * (baseIconSize + baseSpacing) + baseIconSize / 2;
            const minX = mousePosition - effectWidth / 2;
            const maxX = mousePosition + effectWidth / 2;
            if (normalIconCenter < minX || normalIconCenter > maxX) return minScale;
            const theta = ((normalIconCenter - minX) / effectWidth) * 2 * Math.PI;
            const capped = Math.min(Math.max(theta, 0), 2 * Math.PI);
            const scaleFactor = (1 - Math.cos(capped)) / 2;
            return minScale + scaleFactor * (maxScale - minScale);
        });
    }, [baseIconSize, baseSpacing, effectWidth, maxScale]);

    const calculatePositions = useCallback((scales: number[]) => {
        let x = 0;
        return scales.map((scale) => {
            const w = baseIconSize * scale;
            const center = x + w / 2;
            x += w + baseSpacing;
            return center;
        });
    }, [baseIconSize, baseSpacing]);

    useEffect(() => {
        const initial = socialLinks.map(() => minScale);
        setCurrentScales(initial);
        setCurrentPositions(calculatePositions(initial));
    }, [calculatePositions, config]);

    const animateToTarget = useCallback(() => {
        const targetScales = calculateTargetMagnification(mouseX);
        const targetPositions = calculatePositions(targetScales);
        const lerp = mouseX !== null ? 0.2 : 0.12;

        setCurrentScales((prev) => prev.map((s, i) => s + (targetScales[i] - s) * lerp));
        setCurrentPositions((prev) => prev.map((p, i) => p + (targetPositions[i] - p) * lerp));

        const needsUpdate =
            currentScales.some((s, i) => Math.abs(s - targetScales[i]) > 0.002) ||
            currentPositions.some((p, i) => Math.abs(p - targetPositions[i]) > 0.1) ||
            mouseX !== null;

        if (needsUpdate) animationFrameRef.current = requestAnimationFrame(animateToTarget);
    }, [mouseX, calculateTargetMagnification, calculatePositions, currentScales, currentPositions]);

    useEffect(() => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = requestAnimationFrame(animateToTarget);
        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [animateToTarget]);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const now = performance.now();
        if (now - lastMouseMoveTime.current < 16) return;
        lastMouseMoveTime.current = now;
        if (dockRef.current) {
            const rect = dockRef.current.getBoundingClientRect();
            const padding = Math.max(8, baseIconSize * 0.12);
            setMouseX(e.clientX - rect.left - padding);
        }
    }, [baseIconSize]);

    const handleMouseLeave = useCallback(() => setMouseX(null), []);

    const handleClick = (link: SocialLink, index: number) => {
        const el = iconRefs.current[index];
        if (el) {
            el.style.transition = 'transform 0.2s ease-out';
            el.style.transform = `translateY(${Math.max(-8, -baseIconSize * 0.15)}px)`;
            setTimeout(() => { el.style.transform = 'translateY(0px)'; }, 200);
        }
        window.open(link.url, '_blank', 'noopener,noreferrer');
    };

    const contentWidth = currentPositions.length > 0
        ? Math.max(...currentPositions.map((p, i) => p + (baseIconSize * currentScales[i]) / 2))
        : socialLinks.length * (baseIconSize + baseSpacing) - baseSpacing;
    const padding = Math.max(8, baseIconSize * 0.12);

    return (
        <div
            ref={dockRef}
            className={`fixed bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)] sm:bottom-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-[7px] transition-[opacity,transform] duration-500
${visible
    ? "opacity-100 translate-y-0 pointer-events-auto"
    : "opacity-0 translate-y-6 pointer-events-none"
}
${className}
`}
            style={{
                width: `${contentWidth + padding * 2}px`,
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: `${Math.max(12, baseIconSize * 0.4)}px`,
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.3)',
                padding: `${padding}px`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative" style={{ height: `${baseIconSize}px`, width: '100%' }}>
                {socialLinks.map((link, index) => {
                    const scale = currentScales[index];
                    const position = currentPositions[index] || 0;
                    const scaledSize = baseIconSize * scale;
                    const Icon = link.icon;
                    const iconSize = scaledSize * 0.55;

                    return (
                        <div
                            key={link.id}
                            ref={(el) => { iconRefs.current[index] = el; }}
                            className="absolute cursor-pointer flex items-center justify-center"
                            title={link.name}
                            onClick={() => handleClick(link, index)}
                            style={{
                                left: `${position - scaledSize / 2}px`,
                                bottom: '0px',
                                width: `${scaledSize}px`,
                                height: `${scaledSize}px`,
                                transformOrigin: 'bottom center',
                                zIndex: Math.round(scale * 10),
                            }}
                        >
                            {typeof Icon === 'string' ? (
                                <img
                                    src={Icon}
                                    alt={link.name}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <Icon
                                    size={iconSize}
                                    color="rgba(255,255,255,0.92)"
                                    strokeWidth={1.75}  
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SocialDock;
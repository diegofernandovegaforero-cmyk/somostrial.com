'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const springConfig = { damping: 25, stiffness: 300 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Only show on non-touch devices
        if (window.matchMedia('(hover: none)').matches) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', moveCursor);

        const interactiveEls = document.querySelectorAll('a, button, [role="button"]');
        interactiveEls.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveEls.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-blue-500 mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isHovering ? 48 : 32,
                    height: isHovering ? 48 : 32,
                    opacity: isHovering ? 0.8 : 0.5,
                }}
                transition={{ duration: 0.2 }}
            />
            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-blue-600"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 6,
                    height: 6,
                }}
            />
        </>
    );
}

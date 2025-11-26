'use client';

import { useRef, useEffect, useState, ReactNode } from "react";
import styles from "./fade-in.module.css";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                obs.disconnect();
            }
        });

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${styles.fadeUp} ${visible ? styles.visible : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

'use client';
import { useEffect } from 'react';

/**
 * ScrollThemeProvider
 * Añade/quita la clase `page-dark` al <body> según el scroll.
 * - Por encima de 80px → fondo claro (blanco)
 * - Por debajo de 80px → fondo oscuro (azul noche)
 * La Navbar tiene z-50 y fondo propio, no se ve afectada.
 */
export default function ScrollThemeProvider() {
    useEffect(() => {
        const THRESHOLD = 80; // px de scroll para activar el modo oscuro

        function handleScroll() {
            if (window.scrollY > THRESHOLD) {
                document.body.classList.add('page-dark');
            } else {
                document.body.classList.remove('page-dark');
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // estado inicial

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null; // no renderiza nada visible
}

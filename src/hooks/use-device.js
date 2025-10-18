"use client";
import { useEffect, useState } from "react";

export function useDevice() {
    const [device, setDevice] = useState("desktop");

    useEffect(() => {
        // Función para detectar el tipo de dispositivo según el ancho de pantalla
        const detectDevice = () => {
            const width = window.innerWidth;

            if (width <= 767) {
                setDevice("mobile");
            } else if (width > 767 && width <= 1024) {
                setDevice("tablet");
            } else {
                setDevice("desktop");
            }
        };

        // Detectar al cargar
        detectDevice();

        // Escuchar cambios de tamaño
        window.addEventListener("resize", detectDevice);

        // Limpiar el listener
        return () => window.removeEventListener("resize", detectDevice);
    }, []);

    return {
        device,
        isMobile: device === "mobile",
        isTablet: device === "tablet",
        isDesktop: device === "desktop",
    };
}

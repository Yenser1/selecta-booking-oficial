"use client";

import Link from "next/link";
import { Roboto_Mono } from "next/font/google";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const roboto = Roboto_Mono({
    subsets: ["latin"],
    weight: "400",
});

function Navbar() {
    const pathname = usePathname();
    return (
        <nav
            className={`${roboto.className} flex gap-7 justify-center items-center`}
            style={{
                fontSize: "clamp(1rem, 1.15vw, 3rem)",
            }}
        >
            <Link href={"/"}>
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut" }}
                    className={pathname === "/" ? `text-amber-400 duration-300 border-b-1` : ` hover:text-amber-200 hover:scale-105 duration-300`}
                >
                    Inicio
                </motion.h1>
            </Link>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "linear", duration: "1" }}>
                |
            </motion.p>
            <Link href={"/Restaurantes"}>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut" }}
                    className={pathname === "/Restaurantes" ? `text-amber-400 duration-300 border-b-1` : ` hover:text-amber-200 hover:scale-105 duration-300`}
                >
                    Restaurantes
                </motion.h1>
            </Link>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "linear", duration: "1" }}>
                |
            </motion.p>
            <Link href={"/Reservas"}>
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut" }}
                    className={pathname === "/Reservas" ? `text-amber-400 duration-300 border-b-1` : ` hover:text-amber-200 hover:scale-105 duration-300`}
                >
                    Reservas
                </motion.h1>
            </Link>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "linear", duration: "1" }}>
                |
            </motion.p>
            <Link href={"/AcercaDeNosotros"}>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut" }}
                    className={pathname === "/AcercaDeNosotros" ? `text-amber-400 duration-300 border-b-1` : ` hover:text-amber-200 hover:scale-105 duration-300`}
                >
                    Acerca de Nosotros
                </motion.h1>
            </Link>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "linear", duration: "1" }}>
                |
            </motion.p>
            <Link href={"/Contacto"}>
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut" }}
                    className={pathname === "/Contacto" ? `text-amber-400 duration-300 border-b-1` : ` hover:text-amber-200 hover:scale-105 duration-300`}
                >
                    Contacto
                </motion.h1>
            </Link>
        </nav>
    );
}

export default Navbar;

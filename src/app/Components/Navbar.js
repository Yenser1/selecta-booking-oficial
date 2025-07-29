"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
    subsets: ["latin"],
});

function Navbar() {
    return (
        <nav
            className={`flex gap-5 justify-center items-center font-semibold font-sans`}
            style={{
                fontSize: "clamp(1rem, 1.6vw, 3rem)",
            }}
        >
            <Link href={"/"}>
                <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 1 }}>
                    Inicio
                </motion.h1>
            </Link>
            <Link href={"/Restaurantes"}>
                <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 1 }}>
                    Restaurantes
                </motion.h1>
            </Link>
            <Link href={"/Reservas"}>
                <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 1 }}>
                    Reservas
                </motion.h1>
            </Link>
            <Link href={"/AcercaDeNosotros"}>
                <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 1 }}>
                    Acerca de Nosotros
                </motion.h1>
            </Link>
            <Link href={"/Contacto"}>
                <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 1 }}>
                    Contacto
                </motion.h1>
            </Link>
        </nav>
    );
}

export default Navbar;

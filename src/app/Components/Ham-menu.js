"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SVGs = [
    <svg
        key={"a"}
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffdd00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-house-icon lucide-house  flex"
    >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>,
    <svg
        key={"b"}
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffdd00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-cooking-pot-icon lucide-cooking-pot"
    >
        <path d="M2 12h20" />
        <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
        <path d="m4 8 16-4" />
        <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
    </svg>,
    <svg
        key={"c"}
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffdd00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-receipt-text-icon lucide-receipt-text"
    >
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
        <path d="M14 8H8" />
        <path d="M16 12H8" />
        <path d="M13 16H8" />
    </svg>,
    <svg
        key={"d"}
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffdd00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-users-round-icon lucide-users-round"
    >
        <path d="M18 21a8 8 0 0 0-16 0" />
        <circle cx="10" cy="8" r="5" />
        <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </svg>,
    <svg
        key={"e"}
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffdd00"
        strokewidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-phone-icon lucide-phone"
    >
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>,
];

const HamMenu = () => {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <button
                className="cursor-pointer"
                onClick={() => {
                    setShowMenu(true);
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffdd00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-align-justify-icon lucide-align-justify"
                >
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                    <path d="M3 6h18" />
                </svg>
            </button>
            {showMenu && (
                <motion.section
                    initial={{ x: "100%" }}
                    whileInView={{ x: 0 }}
                    transition={{ ease: "easeIn", duration: 0.6 }}
                    className="flex flex-col absolute w-full items-center justify-center h-screen top-0 left-0 p-0 m-0 bg-black"
                >
                    <div className="flex w-full justify-end absolute top-0 items-center px-[10vw] border-b-2 pb-3 m-0">
                        <svg
                            onClick={() => {
                                setShowMenu(false);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffdd00"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-x-icon lucide-x"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </div>
                    <div className="flex flex-col self-center text-center heading gap-[3vw]">
                        <Link href={"/"}>
                            <motion.h1
                                onClick={() => {
                                    setShowMenu(false);
                                }}
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut" }}
                                className={
                                    pathname === "/"
                                        ? `text-amber-400 duration-300 w-1/2 border-b-1 flex self-center justify-self-center text-center`
                                        : ` hover:text-amber-200 hover:scale-105 duration-300 flex self-center justify-self-center`
                                }
                            >
                                {SVGs[0]} -Inicio
                            </motion.h1>
                        </Link>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "linear", duration: "1" }}></motion.p>
                        <Link href={"/Restaurantes"}>
                            <motion.h1
                                onClick={() => {
                                    setShowMenu(false);
                                }}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut" }}
                                className={
                                    pathname === "/Restaurantes"
                                        ? `text-amber-400 duration-300 border-b-1 flex self-center justify-self-center`
                                        : ` hover:text-amber-200 hover:scale-105 duration-300 flex self-center justify-self-center`
                                }
                            >
                                {SVGs[1]}- Restaurantes
                            </motion.h1>
                        </Link>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "linear", duration: "1" }}></motion.p>
                        <Link href={"/Reservas"}>
                            <motion.h1
                                onClick={() => {
                                    setShowMenu(false);
                                }}
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut" }}
                                className={
                                    pathname === "/Reservas"
                                        ? `text-amber-400 duration-300 border-b-1 flex self-center justify-self-center`
                                        : ` hover:text-amber-200 hover:scale-105 duration-300 flex self-center justify-self-center`
                                }
                            >
                                {SVGs[2]} -Reservas
                            </motion.h1>
                        </Link>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "linear", duration: "1" }}></motion.p>
                        <Link href={"/AcercaDeNosotros"}>
                            <motion.h1
                                onClick={() => {
                                    setShowMenu(false);
                                }}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut" }}
                                className={
                                    pathname === "/AcercaDeNosotros"
                                        ? `text-amber-400 duration-300 border-b-1 flex self-center justify-self-center`
                                        : ` hover:text-amber-200 hover:scale-105 duration-300 flex self-center justify-self-center`
                                }
                            >
                                {SVGs[3]} -Acerca de Nosotros
                            </motion.h1>
                        </Link>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "linear", duration: "1" }}></motion.p>
                        <Link href={"/Contacto"}>
                            <motion.h1
                                onClick={() => {
                                    setShowMenu(false);
                                }}
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut" }}
                                className={
                                    pathname === "/Contacto"
                                        ? `text-amber-400 duration-300 border-b-1 flex self-center justify-self-center`
                                        : ` hover:text-amber-200 hover:scale-105 duration-300 flex self-center justify-self-center`
                                }
                            >
                                {SVGs[3]} -Contacto
                            </motion.h1>
                        </Link>
                    </div>
                </motion.section>
            )}
        </div>
    );
};

function HameMenu() {
    return <HamMenu />;
}
export default HameMenu;

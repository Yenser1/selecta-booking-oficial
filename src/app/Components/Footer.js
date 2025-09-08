"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function Footer() {
    const pathname = usePathname();
    return (
        <footer className="bg-black flex flex-col py-7 items-center gap-7 mt-12">
            <section className="flex justify-between">
                <div className="text-center">
                    <Link href={"/"}>
                        <motion.h1
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut" }}
                            className={
                                pathname === "/"
                                    ? `text-amber-400 duration-300 border-b-1 flex justify-center items-center`
                                    : ` hover:text-amber-200 hover:scale-105 duration-300 flex justify-center items-center`
                            }
                        >
                            Inicio
                        </motion.h1>
                    </Link>
                    <Link href={"/Restaurantes"}>
                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut" }}
                            className={pathname.startsWith("/Restaurantes") ? `text-amber-400 duration-300 border-b-1 ` : ` hover:text-amber-200 hover:scale-105 duration-300 `}
                        >
                            Restaurantes
                        </motion.h1>
                    </Link>
                    <Link href={"/Reservas"}>
                        <motion.h1
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut" }}
                            className={pathname === "/Reservas" ? `text-amber-400 duration-300 border-b-1 ` : ` hover:text-amber-200 hover:scale-105 duration-300 `}
                        >
                            Reservas
                        </motion.h1>
                    </Link>
                    <Link href={"/AcercaDeNosotros"}>
                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut" }}
                            className={pathname === "/AcercaDeNosotros" ? `text-amber-400 duration-300 border-b-1 ` : ` hover:text-amber-200 hover:scale-105 duration-300 `}
                        >
                            Acerca de Nosotros
                        </motion.h1>
                    </Link>
                    <Link href={"/Contacto"}>
                        <motion.h1
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut" }}
                            className={pathname === "/Contacto" ? `text-amber-400 duration-300 border-b-1 ` : ` hover:text-amber-200 hover:scale-105 duration-300 `}
                        >
                            Contacto
                        </motion.h1>
                    </Link>
                </div>
            </section>
            <section className="flex w-full justify-center gap-5 items-center">
                <Link href={"/"} className="hover:scale-110 hover:rotate-5 transition-transform duration-250">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fcbb00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook-icon lucide-facebook"
                    >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                </Link>
                <Link href={"/"} className="hover:scale-110 hover:rotate-5 transition-transform duration-250">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fcbb00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram-icon lucide-instagram"
                    >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                </Link>
                <Link href={"/"} className="hover:scale-110 hover:rotate-5 transition-transform duration-250">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fcbb00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-youtube-icon lucide-youtube"
                    >
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15 5-3-5-3z" />
                    </svg>
                </Link>
                <Link href={"/"}>
                    <svg className="hover:scale-110 hover:rotate-5 transition-transform duration-250" width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564"
                                stroke="#fcbb00"
                                strokeLinejoin="round"
                            ></path>{" "}
                        </g>
                    </svg>
                </Link>
            </section>
            <h1 className="border-t-2 border-amber-400 w-full text-center pt-3 text-amber-300">&copy; 2025 Selecta Booking Todos los derechos reservados</h1>
        </footer>
    );
}

export default Footer;

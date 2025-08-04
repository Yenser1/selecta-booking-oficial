"use client";
import { ScrollTrigger, gsap } from "gsap/all";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HameMenu from "./Ham-menu";

const BREAKPOINT = 1200;

function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checksize = () => setIsMobile(window.innerWidth < BREAKPOINT);
        checksize();
        window.addEventListener("resize", checksize);
        return () => window.removeEventListener("resize", checksize);
    }, []);

    return (
        <header className="header w-full sticky inset-0 z-30 flex flex-col justify-center items-center pb-3 mb-5 backdrop-blur-md" style={{ borderBottom: "1px solid white" }}>
            <Link href={"/"} className="Imagen">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "linear", duration: "1" }}>
                    <Image src={"/Selecta.webp"} width={350} height={200} alt="Selecta Booking Logo" className="hover:scale-110 hover:rotate-2 transition-all duration-300" />
                </motion.div>
            </Link>
            {isMobile ? <HameMenu /> : <Navbar />}
        </header>
    );
}
export default Header;

"use client";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HameMenu from "./Ham-menu";
import { useDevice } from "@/hooks/use-device";

function Header() {
    const { device, isDesktop, isMobile, isTablet } = useDevice();
    const HEADERHAM = (
        <header className="header w-full sticky inset-0 z-30 flex justify-between pb-1 px-[10vw] items-center backdrop-blur-md">
            <Link href={"/Charts"} className="Imagen">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "linear", duration: "1" }}>
                    <Image src={"/Selecta.webp"} width={200} height={200} alt="Selecta Booking Logo" className="Imagen hover:scale-110 hover:rotate-2 transition-all duration-300" />
                </motion.div>
            </Link>
            <HameMenu />
        </header>
    );
    const HEADERNAV = (
        <header className="header w-full sticky inset-0 z-30 flex flex-col justify-center items-center pb-5 backdrop-blur-md">
            <Link href={"/"} className="Imagen">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "linear", duration: "1" }}>
                    <Image src={"/Selecta.webp"} width={280} height={200} alt="Selecta Booking Logo" className="Imagen hover:scale-110 hover:rotate-2 transition-all duration-300" />
                </motion.div>
            </Link>
            <Navbar />
        </header>
    );

    return (
        <div>
            {isDesktop && HEADERNAV}
            {isTablet && HEADERHAM}
            {isMobile && HEADERHAM}
        </div>
    );
}
export default Header;

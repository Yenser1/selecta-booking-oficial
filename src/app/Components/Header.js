"ues client";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex flex-col justify-center items-center">
            <Link href={"/"}>
                <Image src={"/Selecta.webp"} width={400} height={200} alt="Selecta Booking Logo" />
            </Link>
            <Navbar />
        </header>
    );
}

export default Header;

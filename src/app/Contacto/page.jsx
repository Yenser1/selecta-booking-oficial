"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import ContactUsGrid from "../Components/ContactanosGrid";

function Contacto() {
    return (
        <main>
            <div className="relative">
                <Image src={"/contactoImagen.webp"} width={1300} height={1000} alt="Imagen de Contacto" className="w-full object-cover h-96 opacity-60" />
                <h1
                    className="heading absolute top-1/2 -translate-y-1/2 w-full text-center"
                    style={{
                        textShadow: "0 0 10px black",
                    }}
                >
                    Contactanos!
                </h1>
            </div>
            <ContactUsGrid />
        </main>
    );
}
export default Contacto;

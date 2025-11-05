"use client";

import Image from "next/image";
import ContactUsGrid from "../../Components/ContactanosGrid";
import { createClient } from "@supabase/supabase-js";
import { Roboto_Mono } from "next/font/google";
import { motion } from "framer-motion";

const roboto = Roboto_Mono({
    subsets: ["latin"],
    weight: "400",
});
const robotoBold = Roboto_Mono({
    subsets: ["latin"],
    weight: "700",
});

const supabaseUrl = "https://zejtimfkhwnardvbvoyq.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplanRpbWZraHduYXJkdmJ2b3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MzgxNTYsImV4cCI6MjA2ODIxNDE1Nn0.WnmqZnYXfaSgb7u3Px5uov_0rOB1GIjQgIOT_Aad3Co";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Contacto() {
    return (
        <main>
            <motion.div className="relative">
                <Image src={"/contactoImagen.webp"} width={1300} height={1000} alt="Imagen de Contacto" className="w-full object-cover h-96 opacity-60" />
                <h1
                    className={`${robotoBold.className} heading absolute top-1/2 -translate-y-1/2 w-full text-center h2`}
                    style={{
                        textShadow: "0 0 10px black",
                    }}
                >
                    Contactanos!
                </h1>
            </motion.div>
            <ContactUsGrid />
            
        </main>
    );
}

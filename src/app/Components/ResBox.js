"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function Box({ nombre, estilo, especialidad, imgURL, descripcion }) {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: "0.5" }}
            className="min-w-52 max-w-96 relative flex flex-col p-2.5 rounded-3xl"
        >
            <h1 className="heading2 text-center absolute top-5 self-center">{nombre}</h1>
            <Image alt={`${nombre} Imagen`} width={608} height={208} src={`${imgURL}`} className="rounded-t-2xl" />
            <div className="w-full h-1/2 flex flex-col justify-center items-center ">
                <div className="w-full bg-[#333] p-4 rounded-b-3xl">
                    <h2>Estilo: {estilo}</h2>
                    <h3>Especialidad: {especialidad}</h3>
                    <p>{descripcion}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default Box;

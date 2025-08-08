"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tangerine } from "next/font/google";
import Link from "next/link";

const tangerine = Tangerine({
    subsets: ["latin"],
    weight: "700",
});
const ESTILOS = [
    <div key={0} className="bg-cyan-600 w-max p-1 px-1.5 rounded-md font-bold">
        <p>Marina</p>
    </div>,
    <div key={1} className="bg-amber-300 w-max p-1 px-1.5 rounded-md font-bold">
        <p>Mediterranea</p>
    </div>,
    <div key={2} className="bg-amber-400 w-max p-1 px-1.5 rounded-md font-bold">
        <p>Espanola</p>
    </div>,
    <div key={3} className="bg-green-700 w-max p-1 px-1.5 rounded-md font-bold">
        <p>Dominicana</p>
    </div>,
    <div key={4} className="bg-blue-500 w-max p-1 px-1.5 rounded-md font-bold">
        <p>Americana</p>
    </div>,
];

function Box({ nombre, estilo, imgURL, descripcion, delay = 0, link }) {
    return (
        <motion.div
            initial={{ y: 70 }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeIn", duration: "0.5", delay: `${delay}` }}
            className="min-w-52 max-w-96 relative flex flex-col rounded-3xl mx-2.5 my-2.5 hover:-translate-y-3 transition-all duration-200"
        >
            <h1 className={`${tangerine.className} heading text-center absolute top-5 self-center align-middle text-shadow-sm`}>{nombre}</h1>
            <Image alt={`${nombre} Imagen`} width={608} height={208} src={`${imgURL}`} className="rounded-t-2xl" />
            <div className="w-full h-1/2 flex flex-col justify-center items-center ">
                <div className="w-full bg-[#333] p-4 rounded-b-3xl">
                    {ESTILOS[estilo]}
                    <p className="my-2">{descripcion}</p>
                    <div className="flex justify-between">
                        <Link href={`/Restaurantes/${link}`}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                transition={{ ease: "linear", duration: 0.1 }}
                                className="p-1 px-1.5 bg-amber-400 text-center border-2 rounded-sm border-none cursor-pointer"
                            >
                                Leer mas
                            </motion.button>
                        </Link>
                        <Link href={`${link}`}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                transition={{ ease: "linear", duration: 0.1 }}
                                className="p-1 px-1.5 bg-amber-400 text-center border-2 rounded-sm border-none cursor-pointer"
                            >
                                Reservar Ahora
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Box;

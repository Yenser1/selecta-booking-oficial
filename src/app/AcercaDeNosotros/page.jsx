import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const roboto = Roboto_Mono({
    subsets: ["latin"],
    weight: "400",
});
const robotoBold = Roboto_Mono({
    subsets: ["latin"],
    weight: "700",
});

function AcercaDeNosotros() {
    return (
        <section className="body-lg">
            <h1 className={`${robotoBold.className} heading text-center`}>Acerca de Nosotros</h1>
            <div
                className="w-full flex items-center justify-center flex-wrap mt-12"
                style={{
                    gap: "clamp(10px, 5vw + 1rem, 10rem)",
                }}
            >
                <div className="w-96 h-96 rounded-lg relative">
                    <Image src={"/Empleados/grupalSinProfe.jpg"} alt="Imagen" fill className="object-cover rounded-2xl" />
                </div>
                <div className="w-96 h-96 flex justify-center items-center">
                    <p className={`${roboto.className} text-justify body-base px-4`}>
                        Nosotros somos <span className="text-amber-400 font-bold">Selecta Booking</span>, un grupo de jovenes emprendedores con vision a futuro que pensaron en crear una pagina
                        central, en donde la facilidad al elegir que comer hace que sea casi magico el estar con la familia.
                    </p>
                </div>
            </div>
            <div
                className="w-full flex items-center justify-center mt-16 flex-wrap-reverse"
                style={{
                    gap: "clamp(10px, 5vw + 1rem, 10rem)",
                }}
            >
                <div className="w-96 h-96 flex justify-center items-center">
                    <p className={`${roboto.className} text-justify body-base px-4`}>
                        Con el impulso de los facilitadores de <span className="text-blue-600 font-bold">INFOTEP</span> a sido realmente facil y llevadero el crear a{" "}
                        <span className="text-amber-400 font-bold">Selecta Booking</span> donde se siente el fervor de los maestros y la dedicacion de los estudiantes al hacer las labores.
                    </p>
                </div>
                <div className="w-96 h-96 rounded-lg relative">
                    <Image src={"/Empleados/grupalConProfe.jpg"} alt="Imagen" fill className="object-cover rounded-2xl" />
                </div>
            </div>
            <div className="w-full flex flex-wrap gap-4 items-center justify-center mt-20">
                <div className="w-1/4 h-[25vw] min-w-56 min-h-56 max-w-86 max-h-86 rounded-lg relative">
                    <Image src={"/Empleados/Hansel.jpg"} alt="Imagen" fill className="object-cover rounded-2xl object-top-right" />
                </div>
                <div className="w-1/4 h-[25vw] min-w-56 min-h-56 max-w-86 max-h-86 rounded-lg relative">
                    <Image src={"/Empleados/Yordani.jpg"} alt="Imagen" fill className="object-cover rounded-2xl object-top-right" />
                </div>
                <div className="w-1/4 h-[25vw] min-w-56 min-h-56 max-w-86 max-h-86 rounded-lg relative">
                    <Image src={"/Empleados/Melissa.jpg"} alt="Imagen" fill className="object-cover rounded-2xl object-top-right" />
                </div>
                <div className="w-1/4 h-[25vw] min-w-56 min-h-56 max-w-86 max-h-86 rounded-lg relative">
                    <Image src={"/Empleados/Yenser.jpg"} alt="Imagen" fill className="object-cover rounded-2xl object-top-right" />
                </div>
            </div>
            <p className={`${roboto.className} mt-20 text-center px-[10vw] body-base`}>
                Cada uno de nosotros a amado ser parte de <span className="text-amber-400 font-bold">Selecta Booking</span> porque mas que un simple proyecto de programacion web a sido la idea y las
                aportaciones, el punto de vista y la dedicacion de cada uno de nosotros.
            </p>
        </section>
    );
}
export default AcercaDeNosotros;

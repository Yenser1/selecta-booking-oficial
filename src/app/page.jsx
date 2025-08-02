import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import EmblaCarousel from "./Components/EmblaCarousel";
import Restaurante from "./Components/LandingSlides";
import Box from "./Components/ResBox";
import "./styles/embla.css";

const roboto = Roboto_Mono({
    subsets: ["latin"],
    weight: "400",
});

const OPTIONS = { dragFree: true, loop: true };
const SLIDES = [];
for (let i = 1; i <= 7; i++) {
    SLIDES.push(<Restaurante restaurante={`Ejemplo ${i} Restaurante`} imgUrl={`/Restaurantes/${i}.webp`} ariaLabel={""} loading={""} />);
}

function LandingPage() {
    return (
        <main className={`w-full  flex justify-center items-center flex-col`}>
            <section className="w-full">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>
            <h1 className={`${roboto.className} heading mt-10`}>-Donde comere hoy? 🤷</h1>
            <section className="flex flex-wrap w-90% mb-96">
                <Box
                    nombre={"Restaurante 1"}
                    estilo={"Maritimo"}
                    especialidad={"El mero"}
                    imgURL={"/Restaurantes/1.webp"}
                    descripcion={"Esta es una pequena descripcion del restaurante porque realmente para leer mas clickea aqui abajo"}
                />
            </section>
        </main>
    );
}

export default LandingPage;

import { Roboto_Mono } from "next/font/google";
import EmblaCarousel from "./Components/EmblaCarousel";
import Restaurante from "./Components/LandingSlides";
import Box from "./Components/ResBox";
import Link from "next/link";
import "./styles/embla.css";

const roboto = Roboto_Mono({
    subsets: ["latin"],
    weight: "400",
});
const robotoBold = Roboto_Mono({
    subsets: ["latin"],
    weight: "700",
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

            <section className="w-full flex flex-col justify-center items-center py-10 bg-amber-400 ">
                <h1 className={`${robotoBold.className} heading`}>Reserva Totalmente gratis</h1>
                <Link
                    href={"/Reservas"}
                    className="p-2 px-2.5 bg-black text-center border-2 rounded-sm border-none cursor-pointer mt-4 text-amber-300 hover:scale-105 hover:-skew-2 transition-all duration-150"
                >
                    Reservar Ahora
                </Link>
            </section>

            <h1 className={`${roboto.className} heading my-10`}>-Donde comere hoy?</h1>
            <section className="flex flex-wrap w-90% mb-10 justify-center">
                <Box
                    nombre={"Restaurante 1"}
                    estilo={0}
                    imgURL={"/Restaurantes/1.webp"}
                    descripcion={"Esta es una pequena descripcion del restaurante porque realmente para leer mas clickea aqui abajo"}
                    link={"/Restaurante1"}
                />
                <Box
                    nombre={"Restaurante 2"}
                    estilo={1}
                    imgURL={"/Restaurantes/2.webp"}
                    descripcion={"Esta es una pequena descripcion del restaurante porque realmente para leer mas clickea aqui abajo"}
                    delay={"0.05"}
                    link={"/Restaurante2"}
                />
                <Box
                    nombre={"Restaurante 3"}
                    estilo={2}
                    imgURL={"/Restaurantes/3.webp"}
                    descripcion={"Esta es una pequena descripcion del restaurante porque realmente para leer mas clickea aqui abajo"}
                    delay={"0.1"}
                    link={"/Restaurante3"}
                />
                <Box
                    nombre={"Restaurante 4"}
                    estilo={3}
                    imgURL={"/Restaurantes/4.webp"}
                    descripcion={"Esta es una pequena descripcion del restaurante porque realmente para leer mas clickea aqui abajo"}
                    delay={"0.15"}
                    link={"/Restaurante4"}
                />
                <Box
                    nombre={"Restaurante 5"}
                    estilo={4}
                    imgURL={"/Restaurantes/5.webp"}
                    descripcion={"Esta es una pequena descripcion del restaurante porque realmente para leer mas clickea aqui abajo"}
                    delay={"0.05"}
                    link={"/Restaurante4"}
                />
                <Box
                    nombre={"Restaurante 6"}
                    estilo={3}
                    imgURL={"/Restaurantes/6.webp"}
                    descripcion={"Esta es una pequena descripcion del restaurante porque realmente para leer mas clickea aqui abajo"}
                    delay={"0.1"}
                    link={"/Restaurante4"}
                />
                <Box
                    nombre={"Restaurante 7"}
                    estilo={3}
                    imgURL={"/Restaurantes/7.webp"}
                    descripcion={"Esta es una pequena descripcion del restaurante porque realmente para leer mas clickea aqui abajo"}
                    delay={"0.15"}
                    link={"/Restaurante4"}
                />
            </section>
            <section className="w-full bg-amber-400 flex flex-col items-center py-10 mb-96">
                <h1 className={`${robotoBold.className} heading mb-3`}>Acerca de Nosotros</h1>
                <p className="w-3/5 text-center">
                    Estoy hablando acerca de selecta booking porque en vrd es de las mejores paginas que han existido visualmente y vamos a meter y bregar mano feamente para poder resolver la
                    situacino de la situacion entonces el turno yo se lo di a el si asi es lo qe hay punto y final.
                </p>
                <Link
                    href={"/AcercaDeNosotros"}
                    className="p-2 px-2.5 bg-black text-center border-2 rounded-sm border-none cursor-pointer mt-4 text-amber-300 hover:scale-105 hover:-skew-2 transition-all duration-150"
                >
                    Acerca de Nosotros
                </Link>
            </section>
        </main>
    );
}

export default LandingPage;

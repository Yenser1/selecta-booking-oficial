import { Roboto_Mono } from "next/font/google";
import EmblaCarousel from "./Components/EmblaCarousel";
import Restaurante from "./Components/LandingSlides";
import Box from "./Components/ResBox";
import Link from "next/link";
import RESTAURANT from "./CONST/restuarants";
import ContactUsGrid from "./Components/ContactanosGrid";
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
for (let i = 1; i <= RESTAURANT.length; i++) {
    SLIDES.push(<Restaurante restaurante={RESTAURANT[i - 1].name} imgUrl={RESTAURANT[i - 1].imgURL} ariaLabel={""} loading={""} />);
}

function LandingPage() {
    return (
        <main className={`w-full  flex justify-center items-center flex-col`}>
            <section className="w-full">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>

            <section className="w-full flex flex-col justify-center items-center py-10 bg-amber-500 ">
                <h1 className={`${robotoBold.className} heading text-center`}>Reserva Totalmente gratis</h1>
                <Link
                    href={"https://wa.link/3b0fmf"}
                    target="blank"
                    className="p-2 px-2.5 bg-black text-center border-2 rounded-sm border-none cursor-pointer mt-4 text-amber-300 hover:scale-105 hover:-skew-2 transition-all duration-150"
                >
                    Reservar Ahora
                </Link>
            </section>

            <h1 className={`${robotoBold.className} heading my-10 text-center`}>-Donde comere hoy?</h1>
            <section className="flex flex-wrap w-90% mb-10 justify-center">
                <Box nombre={RESTAURANT[0].name} estilo={RESTAURANT[0].estilo} imgURL={RESTAURANT[0].imgURL} descripcion={RESTAURANT[0].descripcion} link={RESTAURANT[0].link} />
                <Box nombre={RESTAURANT[1].name} estilo={RESTAURANT[1].estilo} imgURL={RESTAURANT[1].imgURL} descripcion={RESTAURANT[1].descripcion} delay={"0.05"} link={RESTAURANT[1].link} />
                <Box nombre={RESTAURANT[2].name} estilo={RESTAURANT[2].estilo} imgURL={RESTAURANT[2].imgURL} descripcion={RESTAURANT[2].descripcion} delay={"0.1"} link={RESTAURANT[2].link} />
                <Box nombre={RESTAURANT[3].name} estilo={RESTAURANT[3].estilo} imgURL={RESTAURANT[3].imgURL} descripcion={RESTAURANT[3].descripcion} delay={"0.15"} link={RESTAURANT[3].link} />
            </section>
            <section className="w-full bg-amber-500 flex flex-col items-center py-10 mb-10">
                <h1
                    className={`${robotoBold.className} heading mb-3 text-center`}
                    style={{
                        textShadow: "0 0 15px black",
                    }}
                >
                    Acerca de Nosotros
                </h1>
                <p
                    className="w-3/5 text-center"
                    style={{
                        textShadow: "0 0 15px black",
                    }}
                >
                    Estoy hablando acerca de selecta booking porque en vrd es de las mejores paginas que han existido visualmente y vamos a meter y bregar mano feamente para poder resolver la
                    situacino de la situacion entonces el turno yo se lo di a el si asi es lo qe hay punto y final.
                </p>
                <Link
                    href={"/AcercaDeNosotros"}
                    className="p-2 px-2.5 bg-black border-2 rounded-sm border-none cursor-pointer mt-4 text-amber-300 hover:scale-105 hover:-skew-2 transition-all duration-150 text-center"
                >
                    Acerca de Nosotros
                </Link>
            </section>
            <ContactUsGrid />
        </main>
    );
}

export default LandingPage;

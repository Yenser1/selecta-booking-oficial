import { Monoton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import EmblaCarousel from "./Components/EmblaCarousel";
import Restaurante from "./Components/LandingSlides";
import "./styles/embla.css";

const monoton = Monoton({
    subsets: ["latin"],
    weight: "400",
});
const OPTIONS = { dragFree: true, loop: true, delay: 4000, jump: true, playOnInit: true };
const SLIDES = [];
for (let i = 1; i <= 7; i++) {
    SLIDES.push(<Restaurante restaurante={`Ejemplo ${i} Restaurante`} imgUrl={`/Restaurantes/${i}.webp`} />);
}

function LandingPage() {
    return (
        <main className={`w-full  flex justify-center items-center flex-col`}>
            <section className="w-full">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>
        </main>
    );
}

export default LandingPage;

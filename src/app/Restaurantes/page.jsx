"use client";

import Image from "next/image";
import EmblaCarouselFade from "../../Components/EmblaFadeCarousel";
import RESTAURANT from "../../consts/restuarants";
import Box from "../../Components/ResBox";
import ESTILOS from "../../consts/estilos";
import ESTILOSinfo from "../../consts/estilosinfo";
import { useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
    subsets: ["latin"],
    weight: "400",
});
const robotoBold = Roboto_Mono({
    subsets: ["latin"],
    weight: "700",
});
const Restaurantes = [];
const RestCard = [];
const foodStyles = [];

for (let i = 0; i < RESTAURANT.length; i++) {
    Restaurantes.push(
        <div
            className="w-screen min-w-0 bg-[#333] flex justify-center items-center relative"
            style={{
                height: "clamp(384px, 25vw + 5rem, 50rem)",
            }}
            key={RESTAURANT[i].name}
        >
            <Image src={RESTAURANT[i].imgURL} fill alt="Restaurant Image" className="object-cover opacity-50" priority={i === 0} />
            <h1 className="absolute h1 text-center w-full">{RESTAURANT[i].name}</h1>
        </div>
    );
    RestCard.push(
        <Box nombre={RESTAURANT[i].name} estilo={RESTAURANT[i].estilo} imgURL={RESTAURANT[i].imgURL} descripcion={RESTAURANT[i].descripcion} link={RESTAURANT[i].link} key={RESTAURANT[i].name} />
    );
}

for (let i = 0; i < ESTILOS.length; i++) {
    foodStyles.push(
        <option value={ESTILOSinfo[i].name} className="bg-amber-400 w-max px-1.5 rounded-md foodStyle">
            {ESTILOS[i]}
        </option>
    );
}

function RestaurantesPage() {
    const [style, setStyle] = useState("todas")//criollaDominicana,comidaRapida,parrillada,marisquerias,italiana,china,mexicana,arabe,japonesa,vegana

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <main className="overflow-x-hidden overflow-y-hidden">
            <div className="w-screen">{isClient && <EmblaCarouselFade slides={Restaurantes} options={{ align: "start", loop: true, draggable: false, dragFree: false }} />}</div>
            <section className="mt-20 w-full flex flex-wrap "></section>
            <section>
                <h1 className={`${robotoBold.className} h3 text-center text-amber-400 mb-5 underline`}>Filtra los estilos</h1>
                <div className="flex flex-wrap gap-5 justify-center items-center">
                    <div key={0} className="bg-yellow-600 w-max px-1.5 rounded-md foodStyle">
                        <p>Criolla Dominicana</p>
                    </div>
                    <div key={1} className="bg-red-600 w-max px-1.5 rounded-md foodStyle">
                        <p>Comida Rapida</p>
                    </div>
                    <div key={2} className="bg-red-800 w-max px-1.5 rounded-md foodStyle">
                        <p>Parrillada</p>
                    </div>
                    <div key={3} className="bg-sky-500 w-max px-1.5 rounded-md foodStyle">
                        <p>Marisquerias</p>
                    </div>
                    <div key={4} className="bg-green-700 w-max px-1.5 rounded-md foodStyle">
                        <p>Italiana</p>
                    </div>
                    <div key={5} className="bg-red-700 w-max px-1.5 rounded-md foodStyle">
                        <p>China</p>
                    </div>
                    <div key={6} className="bg-green-600 w-max px-1.5 rounded-md foodStyle">
                        <p>Mexicana</p>
                    </div>
                    <div key={7} className="bg-lime-700 w-max px-1.5 rounded-md foodStyle">
                        <p>Arabe</p>
                    </div>
                    <div key={8} className="bg-red-500 w-max px-1.5 rounded-md foodStyle">
                        <p>Japonesa</p>
                    </div>
                    <div key={9} className="bg-lime-500 w-max px-1.5 rounded-md foodStyle">
                        <p>Vegana</p>
                    </div>
                    <div className="bg-[#333] w-max px-1.5 rounded-md foodStyle">
                        <p>Todas</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-wrap w-90% mt-20 justify-center">{RestCard}</section>
        </main>
    );
}
export default RestaurantesPage;

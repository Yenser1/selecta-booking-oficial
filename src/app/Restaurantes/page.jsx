"use client";

import Image from "next/image";
import EmblaCarouselFade from "../Components/EmblaFadeCarousel";
import RESTAURANT from "../CONST/restuarants";
import Box from "../Components/ResBox";
import ESTILOS from "../CONST/estilos";
import ESTILOSinfo from "../CONST/estilosinfo";
import { useEffect, useState } from "react";

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
        <option value={ESTILOSinfo[i].name} className="bg-amber-400 w-max p-1 px-1.5 rounded-md font-bold">
            {ESTILOS[i]}
        </option>
    );
}

function RestaurantesPage() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <main className="overflow-x-hidden">
            <div className="w-screen">{isClient && <EmblaCarouselFade slides={Restaurantes} options={{ align: "start", loop: true, draggable: false, dragFree: false }} />}</div>
            <section className="mt-20 w-full flex flex-wrap ">
                <select name="tipodecomida" id="tipodecomida" className="bg-amber-400">
                    <option value="" className="bg-black">
                        Tipo de Comida
                    </option>
                    {foodStyles}
                </select>
            </section>
            <section className="flex flex-wrap w-90% mt-20 justify-center">{RestCard}</section>
        </main>
    );
}
export default RestaurantesPage;

"use client";
import Image from "next/image";
import EmblaCarouselFade from "../Components/EmblaFadeCarousel";
import RESTAURANT from "../CONST/restuarants";

const Restaurantes = [];
for (let i = 0; i < RESTAURANT.length; i++) {
    Restaurantes.push(
        <div
            className="w-full h-96 bg-[#333] flex justify-center items-center"
            style={{
                height: "clamp(384px, 25vw + 5rem, 50rem)",
            }}
        >
            <Image
                src={RESTAURANT[i].imgURL}
                width={10000}
                height={10000}
                alt="Restaurnt Image"
                className="w-full h-full object-cover opacity-50"
                style={{
                    position: "top",
                }}
            />
            <h1 className="absolute h1 text-center">{RESTAURANT[i].name}</h1>
        </div>
    );
}

function RestaurantesPage() {
    return <EmblaCarouselFade slides={Restaurantes} options={{ align: "start", loop: true, draggable: false, dragFree: false }} />;
}
export default RestaurantesPage;

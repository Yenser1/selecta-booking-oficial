"use client";

import Image from "next/image";
import EmblaCarouselFade from "../../Components/EmblaFadeCarousel";
import RESTAURANT from "../../consts/restuarants";
import Box from "../../Components/ResBox";
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

function RestaurantesPage() {
    const [style, setStyle] = useState("todas"); //criollaDominicana,comidaRapida,parrillada,marisquerias,italiana,china,mexicana,arabe,japonesa,vegana
    const Restaurantes = [];
    const RestCard = [];
    let foodStyles;

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
        console.log(RestCard);
        if (style === "criollaDominicana") {
            foodStyles = RestCard.filter((element) => element.props.estilo === 0);
        } else if (style === "comidaRapida") {
            foodStyles = RestCard.filter((element) => element.props.estilo === 1);
        } else if (style === "parrillada") {
            foodStyles = RestCard.filter((element) => element.props.estilo === 2);
        } else if (style === "marisquerias") {
            foodStyles = RestCard.filter((element) => element.props.estilo === 3);
        } else if (style === "italiana") {
            foodStyles = RestCard.filter((element) => element.props.estilo === 4);
        } else if (style === "china") {
            foodStyles = RestCard.filter((element) => element.props.estilo === 5);
        } else if (style === "mexicana") {
            foodStyles = RestCard.filter((element) => element.props.estilo === 6);
        } else if (style === "arabe") {
            foodStyles = RestCard.filter((element) => element.props.estilo === 7);
        } else if (style === "japonesa") {
            foodStyles = RestCard.filter((element) => element.props.estilo === 8);
        } else if (style === "vegana") {
            foodStyles = RestCard.filter((element) => element.props.estilo === 9);
        }
    }
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
                    <button
                        key={0}
                        className={`${style === "criollaDominicana" ? "selectedStyle" : ""} bg-yellow-600 w-max px-1.5 hover:scale-110 transition-all duration-150 rounded-md foodStyle`}
                        onClick={() => {
                            setStyle("criollaDominicana");
                        }}
                        style={{
                            boxShadow: `${style === "criollaDominicana" ? "0 0 10px #CA8A04" : ""}`,
                        }}
                    >
                        <p>Criolla Dominicana</p>
                    </button>
                    <button
                        key={1}
                        className={`${style === "comidaRapida" ? "selectedStyle" : ""} bg-red-600 w-max px-1.5 hover:scale-110 transition-all duration-150 rounded-md foodStyle`}
                        onClick={() => {
                            setStyle("comidaRapida");
                        }}
                        style={{
                            boxShadow: `${style === "comidaRapida" ? "0 0 10px #DC2626" : ""}`,
                        }}
                    >
                        <p>Comida Rapida</p>
                    </button>
                    <button
                        key={2}
                        className={`${style === "parrillada" ? "selectedStyle" : ""} bg-red-800 w-max px-1.5 hover:scale-110 transition-all duration-150 rounded-md foodStyle`}
                        onClick={() => {
                            setStyle("parrillada");
                        }}
                        style={{
                            boxShadow: `${style === "parrillada" ? "0 0 10px #991B1B" : ""}`,
                        }}
                    >
                        <p>Parrillada</p>
                    </button>
                    <button
                        key={3}
                        className={`${style === "marisquerias" ? "selectedStyle" : ""} bg-sky-500 w-max px-1.5 hover:scale-110 transition-all duration-150 rounded-md foodStyle`}
                        onClick={() => {
                            setStyle("marisquerias");
                        }}
                        style={{
                            boxShadow: `${style === "marisquerias" ? "0 0 10px #0EA5E9" : ""}`,
                        }}
                    >
                        <p>Marisquerias</p>
                    </button>
                    <button
                        key={4}
                        className={`${style === "italiana" ? "selectedStyle" : ""} bg-green-700 w-max px-1.5 hover:scale-110 transition-all duration-150 rounded-md foodStyle`}
                        onClick={() => {
                            setStyle("italiana");
                        }}
                        style={{
                            boxShadow: `${style === "italiana" ? "0 0 10px #047857" : ""}`,
                        }}
                    >
                        <p>Italiana</p>
                    </button>
                    <button
                        key={5}
                        className={`${style === "china" ? "selectedStyle" : ""} bg-red-700 w-max px-1.5 hover:scale-110 transition-all duration-150 rounded-md foodStyle`}
                        onClick={() => {
                            setStyle("china");
                        }}
                        style={{
                            boxShadow: `${style === "china" ? "0 0 10px #B91C1C" : ""}`,
                        }}
                    >
                        <p>China</p>
                    </button>
                    <button
                        key={6}
                        className={`${style === "mexicana" ? "selectedStyle" : ""} bg-green-600 w-max px-1.5 hover:scale-110 transition-all duration-150 rounded-md foodStyle`}
                        onClick={() => {
                            setStyle("mexicana");
                        }}
                        style={{
                            boxShadow: `${style === "mexicana" ? "0 0 10px #059669" : ""}`,
                        }}
                    >
                        <p>Mexicana</p>
                    </button>
                    <button
                        key={7}
                        className={`${style === "arabe" ? "selectedStyle" : ""} bg-lime-700 w-max px-1.5 hover:scale-110 transition-all duration-150 rounded-md foodStyle`}
                        onClick={() => {
                            setStyle("arabe");
                        }}
                        style={{
                            boxShadow: `${style === "arabe" ? "0 0 10px #65A30D" : ""}`,
                        }}
                    >
                        <p>Arabe</p>
                    </button>
                    <button
                        key={8}
                        className={`${style === "japonesa" ? "selectedStyle" : ""} bg-red-500 w-max px-1.5 hover:scale-110 transition-all duration-150 rounded-md foodStyle`}
                        onClick={() => {
                            setStyle("japonesa");
                        }}
                        style={{
                            boxShadow: `${style === "japonesa" ? "0 0 10px #EF4444" : ""}`,
                        }}
                    >
                        <p>Japonesa</p>
                    </button>
                    <button
                        key={9}
                        className={`${style === "vegana" ? "selectedStyle" : ""} bg-lime-500 w-max px-1.5 hover:scale-110 transition-all duration-150 rounded-md foodStyle`}
                        onClick={() => {
                            setStyle("vegana");
                        }}
                        style={{
                            boxShadow: `${style === "vegana" ? "0 0 10px #84CC16" : ""}`,
                        }}
                    >
                        <p>Vegana</p>
                    </button>
                    <button
                        key={10}
                        className={`${style === "todas" ? "selectedStyle" : ""} bg-[#333] w-max px-1.5 hover:scale-110 transition-all duration-150 rounded-md foodStyle`}
                        onClick={() => {
                            setStyle("todas");
                        }}
                        style={{
                            boxShadow: `${style === "todas" ? "0 0 10px #333" : ""}`,
                        }}
                    >
                        <p>Todas</p>
                    </button>
                </div>
            </section>
            <section className="flex flex-wrap w-90% mt-20 justify-center">{style === "todas" ? RestCard : foodStyles}</section>
        </main>
    );
}
export default RestaurantesPage;

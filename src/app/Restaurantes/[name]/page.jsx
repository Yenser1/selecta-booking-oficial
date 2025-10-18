import RESTAURANT from "@/consts/restuarants";
import Image from "next/image";
import ESTILOS from "@/consts/estilos";
import Link from "next/link";
import { Tangerine } from "next/font/google";

const tangerine = Tangerine({
    subsets: ["latin"],
    weight: "700",
});

function infoRestaurante({ params }) {
    const { name } = params;
    let pagina;
    RESTAURANT.map((REST) => {
        REST.handleLink == name ? (pagina = [REST.name, REST.descripcion, REST.estilo, REST.imgURL, REST.handleLink, REST.ultraLargeDesc]) : console.log("No son iguales");
    });
    return (
        <main className="flex flex-col">
            <div className="relative">
                <Image src={`${pagina[3]}`} width={2000} height={2000} alt={`Imagen de ${pagina[0]}`} className="opacity-65 w-full h-96 object-cover" />
                <h1
                    className={`${tangerine.className} text-8xl text-center absolute w-full top-1/2 -translate-y-1/2`}
                    style={{
                        textShadow: "0 0 10px black",
                    }}
                >
                    {pagina[0]}{" "}
                </h1>

                <div className="absolute bottom-3 left-3">{ESTILOS[pagina[2]]}</div>
            </div>

            <div class="w-full flex justify-center mt-10">
                <p class="w-3/4 md:w-3/4 text-justify body-lg">{pagina[5]}</p>
            </div>

            <div className="flex w-full justify-center">
                <Link
                    href={"https://wa.link/3b0fmf"}
                    target="blank"
                    className="w-fit p-2 px-2.5 bg-amber-300 border-2 rounded-sm border-none cursor-pointer mt-4 text-black hover:scale-105 hover:-skew-2 transition-all duration-150 text-center"
                >
                    Reservar
                </Link>
            </div>
        </main>
    );
}
export default infoRestaurante;

import RESTAURANT from "@/app/CONST/restuarants";
import Image from "next/image";
import ESTILOS from "@/app/CONST/estilos";
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
        REST.handleLink == name ? (pagina = [REST.name, REST.descripcion, REST.estilo, REST.imgURL, REST.handleLink, REST.descripcionLarga]) : console.log("No son iguales");
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

            <div className="w-full flex justify-center mt-10">
                <p className="w-1/3 text-justify text-xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, magni incidunt dicta magnam quam ex vero et accusantium vel cumque, quas optio est. A, nobis accusamus rem dolores
                    quas nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente blanditiis ipsum, voluptatem hic omnis impedit id inventore quibusdam sequi, culpa voluptas eos
                    recusandae soluta optio facere iure voluptate quae libero.
                </p>
            </div>

            <div className="flex w-full justify-center">
                <Link
                    href={"/"}
                    className="w-fit p-2 px-2.5 bg-amber-300 border-2 rounded-sm border-none cursor-pointer mt-4 text-black hover:scale-105 hover:-skew-2 transition-all duration-150 text-center"
                >
                    Reservar
                </Link>
            </div>
        </main>
    );
}
export default infoRestaurante;

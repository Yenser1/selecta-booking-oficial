import RESTAURANT from "@/app/CONST/restuarants";
import Image from "next/image";
import ESTILOS from "@/app/CONST/estilos";

function infoRestaurante({ params }) {
    const { name } = params;
    let pagina;
    RESTAURANT.map((REST) => {
        REST.handleLink == name ? (pagina = [REST.name, REST.descripcion, REST.estilo, REST.imgURL, REST.handleLink, REST.descripcionLarga]) : console.log("No son iguales");
    });
    return (
        <main className="flex flex-col">
            <h1 className="heading text-center">{pagina[0]} </h1>
            <div className="self-center">{ESTILOS[pagina[2]]}</div>
            <div className="flex justify-center gap-10 items-center">
                <Image src={`${pagina[3]}`} width={600} height={300} alt={`Imagen de ${pagina[0]}`} className="rounded-2xl" />
                <p className="w-1/2">{pagina[5]}</p>
            </div>
        </main>
    );
}
export default infoRestaurante;

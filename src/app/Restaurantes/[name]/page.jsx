import RESTAURANT from "@/app/CONST/restuarants";
import Image from "next/image";
import ESTILOS from "@/app/CONST/estilos";

function infoRestaurante({ params }) {
    const { name } = params;
    let pagina;
    RESTAURANT.map((REST) => {
        REST.handleLink == name ? (pagina = [REST.name, REST.descripcion, REST.estilo, REST.imgURL, REST.handleLink]) : console.log("No son iguales");
    });
    return (
        <main className="flex flex-col">
            <h1 className="Heading">Estas en {pagina[0]} </h1>
            <Image src={`${pagina[3]}`} width={300} height={300} alt={`Imagen de ${pagina[0]}`} />
            <p>{pagina[1]}</p>
            {ESTILOS[pagina[2]]}
        </main>
    );
}
export default infoRestaurante;

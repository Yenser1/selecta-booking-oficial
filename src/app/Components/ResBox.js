import Image from "next/image";

function Box({ nombre, estilo, especialidad, imgURL, descripcion }) {
    return (
        <div className="min-w-52 max-w-96 relative flex flex-col p-2.5 rounded-3xl">
            <h1 className="heading2 text-center absolute top-5 self-center">{nombre}</h1>
            <Image alt={`${nombre} Imagen`} width={608} height={208} src={`${imgURL}`} className="rounded-t-2xl" />
            <div className="w-full h-1/2 flex flex-col justify-center items-center ">
                <div className="w-full bg-[#333] p-2.5">
                    <p>Estilo: {estilo}</p>
                    <p>Especialidad: {especialidad}</p>
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default Box;

import Image from "next/image";

function AcercaDeNosotros() {
    return (
        <section className="body-lg">
            <h1 className="heading text-center">Acerca de Nosotros</h1>
            <div
                className="w-full flex items-center justify-center flex-wrap mt-12"
                style={{
                    gap: "clamp(10px, 5vw + 1rem, 10rem)",
                }}
            >
                <div className="w-96 h-96 rounded-lg relative">
                    <Image src={"/Empleados/grupalSinProfe.jpg"} fill className="object-cover rounded-2xl" />
                </div>
                <div className="w-96 h-96 flex justify-center items-center">
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis blanditiis labore molestiae adipisci dolores quos, impedit nostrum, odio deserunt doloribus quod velit
                        recusandae placeat ab cum eos quas error.
                    </p>
                </div>
            </div>
            <div
                className="w-full flex items-center justify-center mt-16"
                style={{
                    gap: "clamp(10px, 5vw + 1rem, 10rem)",
                }}
            >
                <div className="w-96 h-96 flex justify-center items-center">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis blanditiis labore molestiae adipisci dolores quos, impedit nostrum, odio deserunt doloribus quod velit
                        recusandae placeat ab cum eos quas error.
                    </p>
                </div>
                <div className="w-96 h-96 rounded-lg relative">
                    <Image src={"/Empleados/grupalConProfe.jpg"} fill className="object-cover rounded-2xl" />
                </div>
            </div>
            <div className="w-full flex flex-wrap gap-4 items-center justify-center mt-20">
                <div className="w-1/4 h-[25vw] min-w-56 min-h-56 max-w-86 max-h-86 rounded-lg relative">
                    <Image src={"/Empleados/Hansel.jpg"} fill className="object-cover rounded-2xl object-top-right" />
                </div>
                <div className="w-1/4 h-[25vw] min-w-56 min-h-56 max-w-86 max-h-86 rounded-lg relative">
                    <Image src={"/Empleados/Yordani.jpg"} fill className="object-cover rounded-2xl object-top-right" />
                </div>
                <div className="w-1/4 h-[25vw] min-w-56 min-h-56 max-w-86 max-h-86 rounded-lg relative">
                    <Image src={"/Empleados/Melissa.jpg"} fill className="object-cover rounded-2xl object-top-right" />
                </div>
                <div className="w-1/4 h-[25vw] min-w-56 min-h-56 max-w-86 max-h-86 rounded-lg relative">
                    <Image src={"/Empleados/Yenser.jpg"} fill className="object-cover rounded-2xl object-top-right" />
                </div>
            </div>
            <p className="mt-20 text-center px-[10vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis natus magnam sint ducimus voluptatum voluptates perferendis, deleniti dicta pariatur alias, harum doloremque voluptatem.
                Eos iste, repellat est voluptatum corrupti mollitia.
            </p>
        </section>
    );
}
export default AcercaDeNosotros;

import Image from "next/image";

function AcercaDeNosotros() {
    return (
        <section>
            <h1 className="heading text-center">Acerca de Nosotros</h1>
            <div
                className="w-full flex items-center justify-center flex-wrap mt-12"
                style={{
                    gap: "clamp(10px, 5vw + 1rem, 10rem)",
                }}
            >
                <div className="w-96 h-96 bg-amber-200 rounded-4xl"></div>
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
                <div className="w-96 h-96 bg-amber-200 rounded-4xl"></div>
            </div>
            <p className="mt-20 text-center px-[10vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis natus magnam sint ducimus voluptatum voluptates perferendis, deleniti dicta pariatur alias, harum doloremque voluptatem.
                Eos iste, repellat est voluptatum corrupti mollitia.
            </p>
        </section>
    );
}
export default AcercaDeNosotros;

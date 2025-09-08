import Image from "next/image";

function AcercaDeNosotros() {
    return (
        <section>
            <h1 className="heading text-center">Acerca de Nosotros</h1>
            <div
                className="w-full flex items-center justify-center flex-wrap"
                style={{
                    gap: "clamp(10px, 5vw + 1rem, 10rem)",
                }}
            >
                <div className="w-96 h-96 bg-amber-200 rounded-4xl">Imagen</div>
                <div className="w-96 h-96 bg-blue-200">
                    <p>
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
                <div className="w-96 h-96 bg-blue-200">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis blanditiis labore molestiae adipisci dolores quos, impedit nostrum, odio deserunt doloribus quod velit
                        recusandae placeat ab cum eos quas error.
                    </p>
                </div>
                <div className="w-96 h-96 bg-amber-200 rounded-4xl">Imagen</div>
            </div>
            <p className="mt-20 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis natus magnam sint ducimus voluptatum voluptates perferendis, deleniti dicta pariatur alias, harum doloremque voluptatem.
                Eos iste, repellat est voluptatum corrupti mollitia.
            </p>
        </section>
    );
}
export default AcercaDeNosotros;

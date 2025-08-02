"use client";
import { Imperial_Script } from "next/font/google";

const imperial = Imperial_Script({
    weight: "400",
});

function Restaurante({ restaurante, imgUrl }) {
    return (
        <section
            className="w-[100vw] h-[clamp(300px,30vw,1000px)] flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url('${imgUrl}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1
                className={`${imperial.className} text-[5vw] text-shadow-2xs`}
                style={{
                    textShadow: "0 0 10px black",
                }}
            >
                {restaurante}
            </h1>
        </section>
    );
}
export default Restaurante;

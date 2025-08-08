"use client";
import { Imperial_Script } from "next/font/google";

const imperial = Imperial_Script({
    preload: false,
    weight: "400",
});

function Restaurante({ restaurante, imgUrl, ariaLabel }) {
    return (
        <div
            className="w-[100vw] h-[clamp(300px,30vw,1000px)] flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url('${imgUrl}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#333",
            }}
            aria-label={`${ariaLabel}`}
            loading="lazy"
        >
            <h1
                className={`${imperial.className} text-shadow-2xs`}
                style={{
                    textShadow: "0 0 5px black",
                    fontSize: "clamp(2.5rem, calc(1rem + 4vw), 8rem)",
                }}
            >
                {restaurante}
            </h1>
        </div>
    );
}
export default Restaurante;

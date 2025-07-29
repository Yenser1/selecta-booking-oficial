import { Monoton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const monoton = Monoton({
    subsets: ["latin"],
    weight: "400",
});

function LandingPage() {
    return (
        <section className={`w-full h-screen flex justify-center items-center flex-col`}>
            <div className={`flex gap-7`}>
                <Link href={"./"}>Inicio</Link>
                <Link href={"./Restaurantes"}>Restaurantes</Link>
                <Link href={"./Reservas"}>Reservas</Link>
                <Link href={"./AcercaDeNosotros"}>Acerca de Nosotros</Link>
                <Link href={"./Contacto"}>Contacto</Link>
            </div>
        </section>
    );
}

export default LandingPage;

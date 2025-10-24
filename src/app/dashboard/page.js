import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "../../Components/logoutButton.js";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
    subsets: ["latin"],
    weight: "400",
});
const robotoBold = Roboto_Mono({
    subsets: ["latin"],
    weight: "700",
});

export default async function DashboardPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    return (
        <main className={`${roboto.className} min-h-screen bg-black text-white flex flex-col items-center py-10`}>
            {/* Header Section */}
            <section className="w-full bg-amber-500 py-8 mb-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h1
                        className={`${robotoBold.className} text-5xl md:text-6xl text-center`}
                        style={{
                            textShadow: "0 0 15px black",
                        }}
                    >
                        Dashboard
                    </h1>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="w-full max-w-6xl px-4 mb-10">
                <div className="bg-neutral-900 border-2 border-amber-300 rounded-lg p-8 shadow-2xl">
                    <h2 className={`${robotoBold.className} text-3xl text-amber-300 mb-4`}>¡Bienvenido de vuelta!</h2>
                    <p className="text-gray-300 text-lg mb-2">
                        Conectado como: <span className="text-amber-300 font-semibold">{user.email}</span>
                    </p>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="w-full max-w-6xl px-4 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-neutral-900 border-2 border-amber-300 rounded-lg p-6 hover:scale-105 transition-transform duration-200">
                        <div className="text-amber-300 text-4xl mb-3">📅</div>
                        <h3 className={`${robotoBold.className} text-xl text-amber-300 mb-2`}>Reservas Activas</h3>
                        <p className="text-gray-300 text-3xl font-bold">0</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-neutral-900 border-2 border-amber-300 rounded-lg p-6 hover:scale-105 transition-transform duration-200">
                        <div className="text-amber-300 text-4xl mb-3">⭐</div>
                        <h3 className={`${robotoBold.className} text-xl text-amber-300 mb-2`}>Restaurantes Favoritos</h3>
                        <p className="text-gray-300 text-3xl font-bold">0</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-neutral-900 border-2 border-amber-300 rounded-lg p-6 hover:scale-105 transition-transform duration-200">
                        <div className="text-amber-300 text-4xl mb-3">🎉</div>
                        <h3 className={`${robotoBold.className} text-xl text-amber-300 mb-2`}>Historial Total</h3>
                        <p className="text-gray-300 text-3xl font-bold">0</p>
                    </div>
                </div>
            </section>

            {/* User Info Section */}
            <section className="w-full max-w-6xl px-4 mb-10">
                <div className="bg-neutral-900 border-2 border-amber-300 rounded-lg p-8">
                    <h2 className={`${robotoBold.className} text-2xl text-amber-300 mb-6`}>Información de la Cuenta</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-amber-300/30 pb-3">
                            <span className="text-gray-400 font-semibold">ID de Usuario:</span>
                            <span className="text-amber-300 font-mono text-sm">{user.id}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-amber-300/30 pb-3">
                            <span className="text-gray-400 font-semibold">Email:</span>
                            <span className="text-white">{user.email}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-amber-300/30 pb-3">
                            <span className="text-gray-400 font-semibold">Estado:</span>
                            <span className="text-green-400 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                Activo
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 font-semibold">Miembro desde:</span>
                            <span className="text-white">
                                {new Date(user.created_at).toLocaleDateString("es-ES", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="w-full max-w-6xl px-4 mb-10">
                <h2 className={`${robotoBold.className} text-2xl text-amber-300 mb-6 text-center`}>Acciones Rápidas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href={"/"} className="bg-amber-500 text-black p-6 rounded-lg text-center font-bold text-lg hover:scale-105 hover:-skew-x-2 transition-all duration-150">
                        Ir al Inicio
                    </Link>

                    <Link
                        href="https://wa.link/3b0fmf"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-amber-500 text-black p-6 rounded-lg text-center font-bold text-lg hover:scale-105 hover:skew-x-2 transition-all duration-150"
                    >
                        Hacer una Reserva
                    </Link>

                    <Link href="/tryingCRUD" className="bg-amber-500 text-black p-6 rounded-lg text-center font-bold text-lg  hover:scale-105 hover:skew-x-2 transition-all duration-150">
                        Manage Restaurants
                    </Link>
                </div>
            </section>

            {/* Logout Button */}
            <section className="w-full max-w-6xl px-4 flex justify-center">
                <LogoutButton />
            </section>
        </main>
    );
}

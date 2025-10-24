import { createClient } from "@/lib/supabase/server";
import { Roboto_Mono } from "next/font/google";
import { redirect } from "next/navigation";

const robotoBold = Roboto_Mono({
    subsets: ["latin"],
    weight: "700",
});

export default async function Page() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }
    let { data: restaurants, error } = await supabase.from("restaurants").select("*");

    return (
        <main className="min-h-screen bg-black text-white p-8">
            <section className="w-full bg-amber-500 py-8 mb-10">
                <h1 className={`${robotoBold.className} text-5xl text-center`} style={{ textShadow: "0 0 15px black" }}>
                    Restaurantes
                </h1>
            </section>

            <div className="max-w-6xl mx-auto">
                {error && (
                    <div className="bg-red-500 border-2 border-red-700 text-white p-4 rounded-lg mb-6">
                        <strong>Error:</strong> {error.message}
                    </div>
                )}

                {restaurants && restaurants.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {restaurants.map((restaurant) => (
                            <div key={restaurant.id} className="bg-neutral-900 border-2 border-amber-300 rounded-lg p-6 hover:scale-105 transition-transform duration-200">
                                <h3 className="text-amber-300 text-xl font-bold mb-2">{restaurant.name || `Restaurante #${restaurant.id}`}</h3>
                                <p className="text-gray-400 text-sm">ID: {restaurant.id}</p>
                                <p className="mt-5">{restaurant.description}</p>
                                {/* Añade más campos según tu tabla */}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-neutral-900 border-2 border-amber-300 rounded-lg p-8 text-center">
                        <p className="text-amber-300 text-xl">No hay restaurantes disponibles</p>
                    </div>
                )}
            </div>
        </main>
    );
}

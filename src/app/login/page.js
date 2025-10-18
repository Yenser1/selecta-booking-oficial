"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();
    const supabase = createClient();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            router.push("/dashboard");
            router.refresh();
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="mt-20 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-amber-300 text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>

                {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-amber-300 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="ejemplo@email.com"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-amber-300 text-sm font-bold mb-2">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="********"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-amber-500 text-white font-bold py-2 px-4 rounded-md hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Cargando..." : "Iniciar Sesión"}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-amber-300">¿Primera vez?</p>
                <Link href={"/signup"}>
                    <button className="mt-5 w-full bg-amber-500 text-white font-bold py-2 px-4 rounded-md hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed">Registrarse</button>
                </Link>
            </div>
        </div>
    );
}

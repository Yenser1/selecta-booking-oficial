"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    const supabase = createClient();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${window.location.origin}/auth/callback`,
            },
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            setSuccess(true);
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className=" p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-4 text-center text-green-600">¡Registro Exitoso!</h1>
                    <p className="text-center text-gray-600">Revisa tu email para confirmar tu cuenta.</p>
                </div>
            </div>
        );
    }

    return (
        <div className=" flex items-center justify-center">
            <div className=" p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-amber-300 text-2xl font-bold mb-6 text-center">Registrarse</h1>

                {error && <div className=" border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

                <form onSubmit={handleSignUp}>
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
                        <label className="block text-amber-300 text-sm font-bold mb-2">Contraseña (mínimo 8 caracteres)</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            placeholder="********"
                            minLength={6}
                        />
                    </div>

                    <button type="submit" disabled={loading} className="w-full bg-amber-500 text-white font-bold py-2 px-4 rounded-md hover:bg-amber-600 disabled:opacity-50">
                        {loading ? "Cargando..." : "Registrarse"}
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-amber-300">¿Ya tienes cuenta?</p>

                <Link href={"/login"}>
                    <button className="mt-5 w-full bg-amber-500 text-white font-bold py-2 px-4 rounded-md hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed">Iniciar Sesion</button>
                </Link>
            </div>
        </div>
    );
}

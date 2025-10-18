import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "../../Components/logoutButton.js";

export default async function DashboardPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                <p className="text-gray-600 mb-4">Bienvenido, {user.email}!</p>
                <div className="bg-blue-50 p-4 rounded-md mb-6">
                    <p className="text-sm text-gray-700">
                        <strong>ID de Usuario:</strong> {user.id}
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong>Email:</strong> {user.email}
                    </p>
                </div>
                <LogoutButton />
            </div>
        </div>
    );
}

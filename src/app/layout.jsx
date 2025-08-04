import Header from "./Components/Header";
import "./globals.css";

export const metadata = {
    title: "Selecta Boooking",
    description: "La pagina de Selecta Booking ya esta aqui!, elije y reserva TOTALMENTE GRATIS!!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}

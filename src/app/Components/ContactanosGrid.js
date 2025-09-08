import Link from "next/link";
import { Mail, Phone, LocationEdit } from "lucide-react";

function ContactUsGrid() {
    return (
        <section>
            <div className="flex">
                <div className="flex justify-center w-full mt-6">
                    <Link
                        href={"https://wa.link/3b0fmf"}
                        target="blank"
                        className="bg-green-500 py-3 px-12 rounded-4xl flex justify-center items-center gap-6 text-xl hover:scale-105 duration-200 delay-75"
                        style={{
                            textShadow: "0 0 10px black",
                        }}
                    >
                        <svg fill="#ffffff" width="42px" height="42px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
                                <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
                            </g>
                        </svg>
                        Contactanos por Whatsapp!
                    </Link>
                </div>
            </div>
            <div className="flex flex-wrap w-full justify-center mt-12 gap-12">
                <div className="flex flex-col gap-2 justify-center items-center bg-[#333] min-w-96 w-[30vw] max-w-lg h-60 rounded-3xl hover:-translate-y-1 transition-all duration-150 px-10 text-center">
                    <Mail className="w-12 h-12" />
                    <p className="text-2xl">contacto@selectabooking.com</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center bg-[#333] min-w-96 w-[30vw] max-w-lg h-60 rounded-3xl hover:-translate-y-1 transition-all duration-150 px-10 text-center">
                    <LocationEdit className="w-12 h-12" />
                    <p className="text-2xl">Calle 19, #89, Culo e` Maco, La Romana, Republica Dominicana</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center bg-[#333] min-w-96 w-[30vw] max-w-lg h-60 rounded-3xl hover:-translate-y-1 transition-all duration-150 px-10 text-center">
                    <Phone className="w-12 h-12" />
                    <p className="text-2xl">(829) 646-0191</p>
                </div>
            </div>
        </section>
    );
}

export default ContactUsGrid;

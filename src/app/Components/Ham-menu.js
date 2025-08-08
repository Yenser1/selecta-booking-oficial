import { motion } from "framer-motion";
import { useState } from "react";

const HamMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <button
                className="cursor-pointer"
                onClick={() => {
                    setShowMenu(true);
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffdd00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-align-justify-icon lucide-align-justify"
                >
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                    <path d="M3 6h18" />
                </svg>
            </button>
            {showMenu && (
                <div className="absolute w-full h-screen top-0 left-0 p-0 m-0 bg-amber-500">
                    <svg
                        onClick={() => {
                            setShowMenu(false);
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="52"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffdd00"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-align-justify-icon lucide-align-justify"
                    >
                        <path d="M3 12h18" />
                        <path d="M3 18h18" />
                        <path d="M3 6h18" />
                    </svg>
                </div>
            )}
        </div>
    );
};

function HameMenu() {
    return <HamMenu />;
}
export default HameMenu;

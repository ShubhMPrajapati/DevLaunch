import { useEffect, useState } from "react";

function Navbar() {
    const links = ["Home", "Features", "About", "Contact"];

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className=" back fixed top-0 left-0 w-full z-50">
            <nav className="flex items-center justify-between px-6 py-6 shadow-xl md:px-16 gap-5 ">
                <a href="#home">
                    <h1 className="text-3xl font-bold cursor-pointer">
                        Dev<span className="text-blue-500">Launch</span>
                    </h1>
                </a>

                <div className="hidden gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="cursor-pointer border-b-2 border-transparent pb-2 tracking-widest transition-all duration-300 hover:border-blue-600 hover:text-blue-500"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <button className="hidden rounded-lg bg-blue-500 px-5 py-3 text-white transition hover:bg-blue-600 md:block tracking-wide">
                    Get Started
                </button>

                <button
                    className="text-2xl cursor-pointer md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </nav>

            {isOpen && (
                <div className="flex flex-col items-center gap-5 border-t bg-white py-6 md:hidden">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="cursor-pointer transition hover:text-blue-500"
                        >
                            {link}
                        </a>
                    ))}

                    <button className="rounded-lg bg-blue-500 px-5 py-3 text-white hover:bg-blue-600">
                        Get Started
                    </button>
                </div>
            )}
        </div>
    );
}

export default Navbar;
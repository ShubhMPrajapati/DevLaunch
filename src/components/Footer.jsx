function Footer() {
    // const links = ["Home", "Features", "About", "Contact"];

    return (
        <footer className="bg-slate-900 text-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center">
                <a href="#home">
                    <h2 className="text-2xl font-bold">
                        Dev<span className="text-blue-400">Launch</span>
                    </h2>
                </a>
                <div className="flex gap-10">
                    <p className="text-gray-400">
                        Learn.
                    </p>
                    <p className="text-gray-400">
                        Build.
                    </p>
                    <p className="text-gray-400">
                        Grow.
                    </p>
                </div>

                {/* <div className="flex flex-wrap justify-center gap-6">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="transition duration-300 hover:text-blue-400"
                        >
                            {link}
                        </a>
                    ))}
                </div> */}

                <div className="w-full border-t border-gray-700 pt-6">
                    <p className="text-sm text-gray-400">
                        © 2026 DevLaunch. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
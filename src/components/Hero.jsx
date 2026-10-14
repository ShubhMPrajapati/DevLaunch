import Developer from "../assets/Develope.png"
function Hero() {
    return (
        <section className="" id="home">
            <div className="flex flex-col items-center gap-2 px-20 py-30 md:py-20  md:flex-row md:justify-between md:px-12 lg:px-30 min-h-screen">

                {/* Left side */}
                <div className="flex flex-col gap-5 md:w-1/2">

                    <div className="flex max-w-lg flex-wrap justify-evenly gap-4 py-4 text-center">

                        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
                            <span className="text-lg">📖</span>
                            <h2 className="text-xs font-semibold tracking-widest text-gray-700">
                                LEARN
                            </h2>
                        </div>

                        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
                            <span className="text-lg">🛠️</span>
                            <h2 className="text-xs font-semibold tracking-widest text-gray-700">
                                BUILD
                            </h2>
                        </div>

                        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
                            <span className="text-xl">↗</span>
                            <h2 className="text-xs font-semibold tracking-widest text-gray-700">
                                GROW
                            </h2>
                        </div>

                    </div>

                    <div>
                        <h2 className="text-4xl font-bold md:text-5xl">
                            Launch Your
                        </h2>

                        <h2 className="text-4xl font-bold md:text-5xl">
                            Developer{" "}
                            <span className="text-blue-500">
                                Journey
                            </span>{" "}
                            🚀
                        </h2>
                    </div>

                    <p className="max-w-lg text-gray-600">
                        DevLaunch helps you learn programming, build real-world
                        projects, and track your progress - all in one place.
                    </p>

                    <div className="flex gap-3">
                        <button className="cursor-pointer rounded-lg bg-blue-500 px-5 py-3 text-white hover:bg-blue-600">
                            Get Started
                        </button>

                        <button className="cursor-pointer rounded-lg border-2 border-blue-500 bg-white px-5 py-3 text-blue-500">
                            Learn More
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-5 text-sm">
                        <h3 className="tracking-widest ">✓ Beginner Friendly</h3>
                        <h3 className="tracking-widest ">✓ Hands-on Projects</h3>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex w-full justify-center md:w-1/2">
                    <img
                        src={Developer}
                        alt="Developer workspace"
                        className="w-full  object-contain"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;
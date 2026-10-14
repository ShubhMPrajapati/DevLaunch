import AboutPicture from "../assets/AboutImage.png";

function About() {
    return (
        <section id="about">
            <div className="flex min-h-screen flex-col items-center sm:pt-40 justify-between gap-12 p-6 md:flex-row md:p-12 lg:p-20">

                {/* Image */}
                <div className="flex w-full justify-center md:w-1/2">
                    <img
                        src={AboutPicture}
                        alt="Developer learning illustration"
                        className="w-full max-w-lg object-contain"
                    />
                </div>

                {/* Content */}
                <div className="flex w-full flex-col gap-5 text-center md:w-1/2 md:text-left textUp p-20  rounded-3xl shadow-xl hover:shadow-2xl">

                    <h1 className="text-4xl font-bold tracking-wide">
                        Why Dev<span className="text-blue-500">Launch</span>?
                    </h1>

                    <div className="flex flex-col gap-1">
                        <h3 className="tracking-wider">
                            Learn by Doing.
                        </h3>

                        <h3 className="tracking-wider">
                            Grow by Building.
                        </h3>
                    </div>

                    <p className="max-w-xl tracking-wider text-gray-700">
                        DevLaunch is designed to help beginner developers learn through
                        hands-on practice instead of only watching tutorials.
                    </p>

                    <div className="mt-5 flex flex-col gap-6 md:flex-row md:justify-between">

                        <div>
                            <h2 className="text-2xl font-bold text-blue-500">
                                10+
                            </h2>
                            <p>Projects</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-blue-500">
                                30 Days
                            </h2>
                            <p>Learning</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-blue-500">
                                100%
                            </h2>
                            <p>Beginner Friendly</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;
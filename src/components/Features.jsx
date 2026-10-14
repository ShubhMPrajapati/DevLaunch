import FeatureCard from './FeatureCard'
const features = [
    {
        id: 1,
        icon: "⚡",
        title: "Learn Faster",
        description:
            "Structured lessons and resources to help you learn programming effectively.",
    },
    {
        id: 2,
        icon: "💻",
        title: "Build Projects",
        description:
            "Practice with real-world projects and improve your development skills.",
    },
    {
        id: 3,
        icon: "📈",
        title: "Track Progress",
        description:
            "Monitor your learning journey and see how much progress you have made.",
    },
];

function Features() {
    return (
        <section id="features">
            <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">

                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                    <p className="text-sm font-semibold tracking-widest text-blue-500">
                        FEATURES
                    </p>

                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                        Everything You Need to Succeed
                    </h2>

                    <p className="mt-4 max-w-xl text-gray-600">
                        Learn, build, and grow with tools designed for modern developers.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                    {features.map((feature) => (
                        <FeatureCard
                            feature={feature}
                            key={feature.id}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
export default Features
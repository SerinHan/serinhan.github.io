import FadeIn from "@/components/fade-in";

export default function Hero() {
    return (
        <FadeIn className="w-full">
            <section
                id="about"
                className="w-full min-h-screen flex flex-col items-center px-5 md:px-16 pt-[175px] xl:pt-[400px]"
            >
                <div className="z-2 text-left text-[#4e5d61]">
                    <div className="text-5xl md:text-6xl font-bold mb-4 text-left">
                        <h1>Serin Han</h1>
                    </div>
                    <p className="text-xl md:text-2xl mb-6">
                        Full-Stack Web & Game Developer
                    </p>
                    <p className="mb-8">
                        I enjoy taking a project from an idea to a polished result, handling each step with care and making sure everything works the way it should.
                    </p>
                    <a
                        href="#web"
                        className="px-6 py-3 bg-[#4e5d61] text-white font-semibold rounded-lg shadow-md hover:bg-[#748b92] transition-colors text-center w-full md:w-auto "
                    >
                        Explore My Work
                    </a>
                </div>
            </section>
        </FadeIn>
    );
}

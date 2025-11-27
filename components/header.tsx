export default function PageHeader() {
    return (
        <header className="fixed top-0 left-0 w-full z-5 bg-transparent backdrop-blur-sm">
            <div className="flex justify-center md:justify-between p-6 shadow-md items-center">
                <a href="#about" className="font-bold text-xl hidden md:block">Serin Han</a>
                <div className="flex space-x-5 items-center">
                    <a href="#web">Web</a>
                    <a href="#game">Game</a>
                    <a href="#contact" className="px-4 py-2 bg-[#4e5d61] text-white font-semibold rounded-xl shadow-md transition-colors text-center">Contact Me</a>
                </div>
            </div>
        </header>
    );
}

export function PageHeaderBackground() {
    return <div className="fixed top-0 left-0 w-full z-1 bg-zinc-50 backdrop-blur-sm h-22"></div>
}
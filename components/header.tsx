export default function PageHeader() {
    return (
        <header className="fixed top-0 left-0 w-full z-20 outline-shadow bg-transparent backdrop-blur-xl">
            <div className="flex justify-center gap-6 p-6 shadow-md relative">
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            </div>
        </header>
    );
}
import { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
    return (
        <p className="w-full max-w-[200px] p-3 text-center font-medium bg-white backdrop-blur-sm rounded-xl shadow-lg">
            {children}
        </p>
    );
}
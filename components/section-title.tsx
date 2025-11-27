import { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
    return (
        <p className="w-full max-w-[200px] p-3 text-center font-bold border-b">
            {children}
        </p>
    );
}
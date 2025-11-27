import React from "react";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    link?: string;
    title?: string;
    subtitle?: string;
    image?: string;
    alt: string;
    features?: string[];
    stack?: string[];
    imageRight?: boolean;
}

const ImageBlock = ({
    image,
    link,
    title,
    subtitle,
}: {
    image?: string;
    link?: string;
    title?: string;
    subtitle?: string;
}) => (
    <div className="flex flex-col items-center mb-6 md:mb-0">
        {image && (
            <div className="w-72 h-60 relative overflow-hidden rounded-xl shadow-md md:w-96 md:h-64">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img
                        src={image}
                        alt={title || "Project Image"}
                        className="object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                    />
                </a>
            </div>
        )}
        {title && (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 mb-2 border-b font-semibold text-center"
            >
                {title}
            </a>
        )}
        {subtitle && <p className="text-center italic">{subtitle}</p>}
    </div>
);

const BadgeList = ({
    items,
    colorGradient,
    imageRight,
}: {
    items: string[];
    colorGradient?: string;
    imageRight?: boolean;
}) => (
    <div className={`flex flex-wrap justify-center gap-2 ${imageRight ? "md:justify-end" : "md:justify-start"}`}>
        {items.map((item, index) => (
            <span
                key={index}
                className={`flex items-center justify-center gap-1 text-sm font-medium px-3 py-1 rounded-full transition-transform duration-200 hover:scale-105 max-w-[300px] md:max-w-[700px] break-words text-center ${colorGradient || "bg-gray-200 text-gray-800"
                    }`}
            >
                {item}
            </span>
        ))}
    </div>
);

export default function ProjectCard({
    className = "",
    link,
    title,
    subtitle,
    image,
    alt,
    features = [],
    stack = [],
    imageRight = false,
    ...props
}: ProjectCardProps) {
    return (
        <div
            className={`flex flex-col items-center w-full my-10 md:my-20 md:flex-row md:items-start ${imageRight ? "md:flex-row-reverse" : ""
                } ${className}`}
            {...props}
        >
            <ImageBlock {...{ image, link, title, subtitle }} />

            <div
                className={`flex flex-col justify-start w-full md:w-1/2 md:mx-6 mt-4 md:mt-0 ${imageRight ? "md:items-end md:text-right" : "md:items-start md:text-left"
                    } items-center text-center`}
            >
                {features.length > 0 && (
                    <div className="mb-4 w-full">
                        <p className="font-semibold mb-2">Features:</p>
                        <BadgeList
                            items={features}
                            colorGradient="bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900"
                            imageRight={imageRight}
                        />
                    </div>
                )}

                {stack.length > 0 && (
                    <div className="w-full">
                        <p className="font-semibold mb-2">Tech Stack:</p>
                        <BadgeList
                            items={stack}
                            colorGradient="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900"
                            imageRight={imageRight}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

import { FaLock } from "react-icons/fa";

export default function Card({ image, title, desc, techs, github, isPrivate }) {
    return (
        <div
            className="bg-gray-800/80 rounded-xl overflow-hidden transition duration-300 cursor-pointer
                    flex flex-col h-full"
        >
            <img src={image} alt={title} className="w-full aspect-[16/9] object-cover" />

            <div className="p-4 flex flex-col h-full">

                <h3 className="text-xl font-semibold mb-2 text-blue-300 tracking-wide">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {desc}
                </p>

                <div className="mb-4">
                    {techs &&
                        techs.map((tech) => (
                            <span
                                key={tech}
                                className="inline-block text-xs px-3 py-1 mb-1 mr-2 border border-gray-600 text-gray-300 rounded bg-gray-700/40 backdrop-blur-sm"
                            >
                                {tech}
                            </span>
                        ))}
                </div>

                {isPrivate ? (
                    <span className="inline-block w-full text-gray-500 cursor-not-allowed mt-auto text-end">
                        <FaLock className="inline mr-1 mb-0.5" />
                    </span>
                ) : (
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full text-teal-400 hover:text-teal-300 hover:underline hover:underline-offset-4 mt-auto tracking-wide"
                    >
                        View on GitHub →
                    </a>
                )}
            </div>
        </div>
    );
}

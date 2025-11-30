import { FaLock } from "react-icons/fa";

export default function Card({ image, title, desc, techs, github, isPrivate }) {
    return (
        <div className="bg-gray-800/80 rounded-xl transition overflow-hidden duration-200 ease-out cursor-pointer
            transition duration-300"
        >
            <img src={image} alt={title} className="w-full object-cover h-50" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-300 tracking-wide">{title}</h3>
                {title === "Chat Video System" ? (
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 h-34">{desc}</p>
                ) : (
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 h-40">{desc}</p>
                )}
                {techs &&
                    techs.map((tech) => (
                        <span
                            key={tech}
                            className="inline-block text-xs px-3 py-1 mb-1 mr-2 border border-gray-600 text-gray-300 rounded bg-gray-700/40 backdrop-blur-sm"
                        >
                            {tech}
                        </span>
                    ))}
                {isPrivate ? (
                    <span
                        className="inline-block w-full text-gray-500 cursor-not-allowed mt-4 text-end"
                    >
                        <FaLock className="inline mr-1 mb-0.5" />
                    </span>
                ) : (
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full text-teal-400 hover:text-teal-300 hover:underline hover:underline-offset-4 inline-block mt-4 tracking-wide"
                    >
                        View on GitHub →
                    </a>
                )}
            </div>
        </div>
    );
}     

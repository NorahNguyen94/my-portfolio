import { useState, useRef, useEffect } from "react";
import { FaJava, FaPhp } from "react-icons/fa";
import {
    SiJavascript, SiTypescript, SiHtml5, SiCss3, SiPython,
    SiReact, SiAngular, SiNodedotjs, SiExpress, SiTailwindcss,
    SiGit, SiGithub, SiFigma, SiMongodb, SiMysql, SiLaravel, SiIonic, SiVite,
    SiIntellijidea, SiEclipseide, SiDocker
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function SkillCard({ name, color }) {
    const [flipped, setFlipped] = useState(false);
    const cardRef = useRef(null);

    const toggleFlip = () => setFlipped(!flipped);

    // Close card when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (cardRef.current && !cardRef.current.contains(e.target)) {
                setFlipped(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="group w-full h-62 [perspective:1000px] cursor-pointer"
            onClick={toggleFlip}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 
                [transform-style:preserve-3d]
                ${flipped ? "[transform:rotateY(180deg)]" : ""}
                group-hover:[transform:rotateY(180deg)]`}
            >
                {/* FRONT */}
                <div className="absolute w-full h-full flex flex-col items-center justify-center 
                      bg-gray-800/60 rounded-xl border border-gray-700 shadow-lg 
                      [backface-visibility:hidden]">
                    {name === "Programming Languages" ? (
                        <h3 className={`${color} text-xl font-semibold animate-pulse`}>Programming <span className="block ml-3">Languages</span></h3>
                    ) : (
                        <h3 className={`${color} text-xl font-semibold animate-pulse`}>{name}</h3>
                    )}
                </div>

                {/* BACK */}
                <div className="absolute w-full h-full bg-gray-900/90 rounded-xl border border-gray-700 
                      p-4 text-gray-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    {name === "Programming Languages" ? (
                        <p className="font-bold mb-2">Languages</p>
                    ) :
                        <p className="font-bold mb-2">{name}</p>
                    }
                    <div className="flex flex-wrap gap-2">
                        {name === "Programming Languages" && (
                            <>
                                {name === "Programming Languages" && (
                                    <>
                                        <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                            <FaJava className="text-orange-600 w-4 h-4 mr-2" /> Java
                                        </span>
                                        <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                            <SiJavascript className="text-yellow-400 w-4 h-4 mr-2" /> JavaScript
                                        </span>
                                        <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                            <SiTypescript className="text-blue-400 w-4 h-4 mr-2" /> TypeScript
                                        </span>
                                        <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                            <SiHtml5 className="text-orange-500 w-4 h-4 mr-2" /> HTML
                                        </span>
                                        <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                            <SiCss3 className="text-blue-500 w-4 h-4 mr-2" /> CSS
                                        </span>
                                        <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                            <FaPhp className="text-indigo-300 w-4 h-4 mr-2" /> PHP
                                        </span>
                                        <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                            <SiPython className="text-yellow-300 w-4 h-4 mr-2" /> Python
                                        </span>
                                        <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                            <SiTailwindcss className="text-blue-300 w-4 h-4 mr-2" /> Tailwind CSS
                                        </span>
                                    </>
                                )}
                            </>
                        )}
                        {name === "Frameworks" && (
                            <>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiReact className="text-blue-400 w-4 h-4 mr-2" /> React
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiAngular className="text-red-500 w-4 h-4 mr-2" /> Angular
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiLaravel className="text-[#FF2D20] w-4 h-4 mr-2" /> Laravel
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiIonic className="text-[#3880FF] w-4 h-4 mr-2" /> Ionic
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiVite className="text-violet-600 w-4 h-4 mr-2" /> Vite
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <FaJava className="text-orange-600 w-4 h-4 mr-2" /> JavaFX
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiNodedotjs className="text-green-500 w-4 h-4 mr-2" /> Node.js
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiExpress className="text-gray-300 w-4 h-4 mr-2" /> Express
                                </span>

                            </>
                        )}
                        {name === "Tools" && (
                            <>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiGit className="text-orange-500 w-4 h-4 mr-2" /> Git
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiGithub className="text-gray-200 w-4 h-4 mr-2" /> GitHub
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiFigma className="text-pink-400 w-4 h-4 mr-2" /> Figma
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiMongodb className="text-green-500 w-4 h-4 mr-2" /> MongoDB
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiMysql className="text-blue-400 w-4 h-4 mr-2" /> MySQL
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiDocker className="text-blue-400 w-4 h-4 mr-2" /> Docker
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <VscVscode className="text-blue-600 w-4 h-4 mr-2" /> VS Code
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiIntellijidea className="text-blue-400 w-4 h-4 mr-2" /> IntelliJ IDEA
                                </span>
                                <span className="text-sm px-2 py-1 flex items-center bg-gray-800 rounded-md">
                                    <SiEclipseide className="text-violet-800 w-4 h-4 mr-2" /> Eclipse
                                </span>
                            </>
                        )}
                        {name === "Soft Skills" && (
                            <>
                                <span className="text-sm px-2 py-1 bg-gray-800 rounded-md">Teamwork</span>
                                <span className="text-sm px-2 py-1 bg-gray-800 rounded-md">Leadership</span>
                                <span className="text-sm px-2 py-1 bg-gray-800 rounded-md">Communication</span>
                                <span className="text-sm px-2 py-1 bg-gray-800 rounded-md">Critical Thinking</span>
                                <span className="text-sm px-2 py-1 bg-gray-800 rounded-md">Adaptability</span>
                                <span className="text-sm px-2 py-1 bg-gray-800 rounded-md">Time Management</span>
                            </>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}     

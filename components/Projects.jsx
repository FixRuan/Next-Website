/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import DevlandiaImage from '../public/assets/projects/devlandia.png';


export function Projects() {
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#1F6FEB]">Projects</p>
                <h2 className="py-4">What I've Build</h2>

                <div className="gird md:grid-cols-2 gap-8">

                    <div className="
                        relative flex items-center justify-center h-auto w-full 
                        shadow-xl shadow-gray-400 rounded-xl p-4 group 
                        hover:bg-gradient-to-r
                        from-[#425675]
                        to-[#1F6FEB]"
                    >
                        <Image className="rounded-xl group-hover:opacity-10" src={DevlandiaImage} alt="/" />
                        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h3>Devlândia</h3>
                            <p>React Native</p>
                            <Link href="/">
                                <p>More Info</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
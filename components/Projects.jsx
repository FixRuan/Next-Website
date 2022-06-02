/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import DevlandiaImage from '../public/assets/projects/devlandia.png';
import { ProjectItem } from "./ProjectItem";


export function Projects() {
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#1F6FEB]">Projects</p>
                <h2 className="py-4">What I've Build</h2>

                <div className="grid md:grid-cols-2 gap-8">

                    <ProjectItem name={"Devlândia"} description={"React Native"} image={DevlandiaImage} />
                    <ProjectItem name={"Devlândia"} description={"React Native"} image={DevlandiaImage} />
                    <ProjectItem name={"Devlândia"} description={"React Native"} image={DevlandiaImage} />
                    <ProjectItem name={"Devlândia"} description={"React Native"} image={DevlandiaImage} />
                    <ProjectItem name={"Devlândia"} description={"React Native"} image={DevlandiaImage} />
                    <ProjectItem name={"Devlândia"} description={"React Native"} image={DevlandiaImage} />

                </div>
            </div>
        </div>
    )
}
/* eslint-disable react/no-unescaped-entities */

import { ProjectItem } from "./ProjectItem";
import { projectsArray } from "../utils/projects";

export function Projects() {
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#1F6FEB]">Projects</p>
                <h2 className="py-4">What I've Build</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projectsArray.map(project =>
                        <ProjectItem
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            key={project.name}
                        />
                    )}

                </div>
            </div>
        </div>
    )
}
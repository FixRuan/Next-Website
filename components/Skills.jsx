import Image from "next/image"
import { SkillCard } from "./SkillCard"

export function Skills() {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#1F6FEB]">Skills</p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SkillCard name="ReactJs" image={"/../public/assets/skills/react.png"} />
                    <SkillCard name="React Native" image={"/../public/assets/skills/react.png"} />
                    <SkillCard name="Typescript" image={"/../public/assets/skills/typescript.png"} />
                    <SkillCard name="Javascript" image={"/../public/assets/skills/javascript.png"} />
                    <SkillCard name="Tailwind" image={"/../public/assets/skills/tailwind.png"} />
                    <SkillCard name="Github" image={"/../public/assets/skills/github1.png"} />
                    <SkillCard name="Styled Components" image={"/../public/assets/skills/styled.png"} />
                    <SkillCard name="Html" image={"/../public/assets/skills/html.png"} />
                    <SkillCard name="Css" image={"/../public/assets/skills/css.png"} />
                    <SkillCard name="Scss" image={"/../public/assets/skills/scss.png"} />
                </div>
            </div>
        </div>
    )
}
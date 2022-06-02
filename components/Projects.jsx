/* eslint-disable react/no-unescaped-entities */
import { ProjectItem } from "./ProjectItem";
import DevlandiaImage from '../public/assets/projects/devlandia.png';
import GoPizzaImage from '../public/assets/projects/gopizza.png';
import RentxImage from '../public/assets/projects/rentx.png';
import GoFinancesImage from '../public/assets/projects/gofinances.png';
import PokedexImage from '../public/assets/projects/pokedex.png';
import IgnewsImage from '../public/assets/projects/ignews.png';


export function Projects() {
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#1F6FEB]">Projects</p>
                <h2 className="py-4">What I've Build</h2>

                <div className="grid md:grid-cols-2 gap-8">

                    <ProjectItem name={"Devlândia"} description={"React Native"} image={DevlandiaImage} />
                    <ProjectItem name={"Go Pizza"} description={"React Native"} image={GoPizzaImage} />
                    <ProjectItem name={"RentX"} description={"React Native"} image={RentxImage} />
                    <ProjectItem name={"Go Finances"} description={"React Native"} image={GoFinancesImage} />
                    <ProjectItem name={"Pokedex"} description={"React Native"} image={PokedexImage} />
                    <ProjectItem name={"Ignews"} description={"React"} image={IgnewsImage} />

                </div>
            </div>
        </div>
    )
}
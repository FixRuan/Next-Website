import Image from "next/image";
import propertyImg from '../public/assets/projects/devlandia.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from "next/link";


export default function Devlandia() {

    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-100">
                    <Image className="absolute z-[-10]" layout="fill" objectFit="cover" src={propertyImg} alt="/" />
                    <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                        <h2 className="py-2">Devlandia</h2>
                        <h3>React Native / NodeJs</h3>
                    </div>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Totam culpa nostrum dolore excepturi nam, sunt temporibus
                        hic molestiae corrupti! Mollitia molestias laborum perspiciatis
                        corrupti dicta quia quisquam quasi ad quaerat.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Totam culpa nostrum dolore excepturi nam, sunt temporibus
                        hic molestiae corrupti! Mollitia molestias laborum perspiciatis
                        corrupti dicta quia quisquam quasi ad quaerat.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Totam culpa nostrum dolore excepturi nam, sunt temporibus
                        hic molestiae corrupti! Mollitia molestias laborum perspiciatis
                        corrupti dicta quia quisquam quasi ad quaerat.
                    </p>

                    <button className="px-8 py-2 mt-4">Code</button>
                </div>

                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>

                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="flex text-gray-600 py-2 items-center">
                                <RiRadioButtonFill className="pr-1" /> React Native
                            </p>

                            <p className="flex text-gray-600 py-2 items-center">
                                <RiRadioButtonFill className="pr-1" /> Node Js
                            </p>

                            <p className="flex text-gray-600 py-2 items-center">
                                <RiRadioButtonFill className="pr-1" /> Typescript
                            </p>

                            <p className="flex text-gray-600 py-2 items-center">
                                <RiRadioButtonFill className="pr-1" /> PostgreSQL
                            </p>

                            <p className="flex text-gray-600 py-2 items-center">
                                <RiRadioButtonFill className="pr-1" /> TypeORM
                            </p>
                        </div>
                    </div>
                </div>

                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>

            </div>
        </div>
    )
}
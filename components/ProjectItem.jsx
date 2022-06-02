import Image from 'next/image';
import Link from 'next/link';


export function ProjectItem({ name, description, image }) {
    return (
        <div className="
        relative flex items-center justify-center h-auto w-full 
        shadow-xl shadow-gray-400 rounded-xl p-4 group 
        hover:bg-gradient-to-r
        from-[#425675]
        to-[#1F6FEB]"
        >
            <Image className="rounded-xl group-hover:opacity-10" src={image} alt="/" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-xl text-white tracking-wider text-center">{name}</h3>
                <p className="pb-4 pt-2 text-white text-center">{description}</p>
                <Link href="/">
                    <p className="text-center py-3 px-3 rounded-lg bg-white text-gray-700 font-bold text-xl cursor-pointer">More Info</p>
                </Link>
            </div>
        </div>
    )
}
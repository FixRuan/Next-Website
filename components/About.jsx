/* eslint-disable @next/next/no-img-element */


export function About() {
    return (
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#1F6FEB]">About</p>
                    <p className="py-4">Who I Am</p>
                    <p className="py-2 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quod
                        blanditiis qui est molestias aspernatur eos,
                        esse temporibus iste quae dolorem ut fugiat rerum quia neque facere
                        asperiores consequatur! Quidem?
                    </p>
                    <p className="py-2 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quod
                        blanditiis qui est molestias aspernatur eos,
                        esse temporibus iste quae dolorem ut fugiat rerum quia neque facere
                        asperiores consequatur! Quidem?
                    </p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p>
                </div>
                <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=476&q=80" alt="/" />
                </div>
            </div>
        </div>
    )
}
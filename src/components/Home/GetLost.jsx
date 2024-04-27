import { TbPlayerPlay } from "react-icons/tb";

const GetLost = () => {
    return (
        <div className="md:mt-24 sm:mt-20 mt-12 flex gap-6 items-center max-w-[1480px] mx-auto px-3">
            <div className="relative h-[550px]">
                <div className="h-full">
                    <img className="h-full object-cover object-center" src="https://i.ibb.co/xqvd6GN/tiger.jpg"/>
                </div>
                <div className="absolute left-9 bottom-9 text-white">
                    <h3 className="text-4xl font-kaushan mb-2 text-light-blue">New</h3>
                    <h2 className="font-platypi mb-3 text-4xl font-bold">Watch Our Video</h2>
                    <p className="font-poppins mb-5 text-lg">The Beauty of Sundarban</p>
                    <button className="w-16 transition-all ease-in-out duration-500 h-16 text-4xl rounded-full bg-light-blue hover:bg-[#6b6b6b] flex justify-center items-center"><TbPlayerPlay></TbPlayerPlay></button>
                </div>
            </div>
            <div className="w-1/2">
                <h1 className="text-5xl font-platypi mb-5 leading-snug">A Simply Perfect Place <br /> To Get Lost</h1>
                <p className="font-macondo font-semibold text-xl text-[#757575]">Treat yourself with a journey to your inner self. Visit a Sundarban and start your spiritual adventure. We promise, you’ll enjoy every step you make.</p>
                <button className="bg-light-blue hover:bg-[#383838] transition-all ease-in-out duration-500 py-2 px-8 mt-6 text-white font-macondo text-xl">See More</button>
            </div>
        </div>
    );
};

export default GetLost;
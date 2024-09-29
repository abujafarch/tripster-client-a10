import { TbPlayerPlay } from "react-icons/tb";
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

const GetLost = () => {
    return (
        <div className="md:mt-24 sm:mt-20 mt-12 flex md:flex-row flex-col gap-6 items-center max-w-[1480px] mx-auto px-3">
            <div className="relative h-[500px] md:w-1/2">
                <div className="h-full w-full">
                    <img className="h-full w-full object-cover object-center" src="https://i.ibb.co/xqvd6GN/tiger.jpg"/>
                    <div className="w-full h-full bg-[#0000003d] absolute top-0 left-0" ></div>
                </div>
                <div className="absolute sm:left-9 left-5 bottom-5 sm:bottom-9 text-white">
                    <h3 className="text-4xl font-kaushan mb-2 text-light-blue">New</h3>
                    <h2 className="font-platypi mb-3 text-3xl md-lg:text-4xl font-bold">Watch Our Video</h2>
                    <p className="font-poppins mb-5 text-lg">The Beauty of Sundarban</p>

                    <button className="w-16 transition-all ease-in-out duration-500 h-16 text-4xl rounded-full bg-light-blue hover:bg-[#6b6b6b] flex justify-center items-center"><TbPlayerPlay></TbPlayerPlay></button>
                    
                </div>
            </div>
            <div className="md:w-1/2">
                <h1 className="md-lg:text-5xl text-4xl font-platypi mb-5 leading-snug md-lg:leading-snug max-w-[580px]">A Simply Perfect Place To Get Lost</h1>
                <p className="font-macondo font-semibold text-xl text-[#757575]">Treat yourself with a journey to your inner self. Visit a Sundarban and start your spiritual adventure. We promise, you’ll enjoy every step you make.</p>
                <button className="bg-light-blue hover:bg-[#383838] transition-all ease-in-out duration-500 py-2 px-8 mt-6 text-white font-macondo text-xl">See More</button>
            </div>
        </div>
    );
};

export default GetLost;
import { Link } from "react-router-dom";

const TouristSpot = () => {
    return (
        <div className="rounded-md relative h-[550px]">
            <div className="mb-3 h-full">
                <img className="h-full object-cover object-center" src="https://i.ibb.co/xqvd6GN/tiger.jpg" />
            </div>
            <div className="absolute h-full left-0 bottom-0 transit ease-in-out duration-500 w-full bg-[#00000034] hover:bg-[#0000006e]">
                <div className="absolute left-7 bottom-7 text-[#e7e7e7]">
                    <h1 className="font-platypi text-4xl font-bold mb-3">Sundarban</h1>
                    <p className="font-bebas text-2xl mb-3">$2000</p>
                    <Link>
                        <button className="p-2 border-2 font-bebas border-[#e7e7e7] rounded-sm">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;
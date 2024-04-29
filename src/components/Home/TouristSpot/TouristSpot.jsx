import { Link } from "react-router-dom";

const TouristSpot = ({touristSpot}) => {
    const {tourists_spot_name, average_cost, image, _id} = touristSpot
    return (
        <div className="rounded-md relative h-[400px]">
            <div className="mb-3 h-full">
                <img className="h-full object-cover object-center" src={image} />
            </div>
            <div className="absolute h-full left-0 bottom-0 transit ease-in-out duration-500 w-full bg-[#00000034] hover:bg-[#0000006e]">
                <div className="absolute left-7 bottom-7 text-[#e7e7e7]">
                    <h1 className="font-platypi sm:text-3xl text-2xl font-bold mb-3">{tourists_spot_name}</h1>
                    <p className="font-bebas text-2xl mb-3">${average_cost}</p>
                    <Link to={`/view-details/${_id}`}>
                        <button className="p-2 border-2 font-bebas border-[#e7e7e7] rounded-sm">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;
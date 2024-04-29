import { NavLink } from "react-router-dom";
import TouristSpot from "./TouristSpot";

const TouristSpots = ({ slicedTouristSpots }) => {
    return (
        <div className="md:mt-24 sm:mt-20 mt-12 max-w-[1480px] mx-auto px-3">
            <h1 className="font-platypi sm:text-4xl text-3xl md:text-5xl text-light-blue text-center font-bold">Popular Tourist Spots</h1>
            <div className="md:mt-20 sm:mt-12 mt-8 grid md-lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">

                {
                    slicedTouristSpots.map(touristSpot => <NavLink to={`view-details/${touristSpot._id}`} key={touristSpot._id}><TouristSpot touristSpot={touristSpot}></TouristSpot></NavLink>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;
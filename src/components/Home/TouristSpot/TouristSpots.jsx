import { NavLink } from "react-router-dom";
import TouristSpot from "./TouristSpot";

const TouristSpots = () => {
    return (
        <div className="md:mt-24 sm:mt-20 mt-12 max-w-[1480px] mx-auto px-3">
            <h1 className="font-platypi sm:text-4xl text-3xl md:text-5xl text-light-blue text-center font-bold">Popular Tourist Spots</h1>
            <div className="md:mt-20 sm:mt-12 mt-8 grid md-lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                <NavLink to='/view-details'><TouristSpot></TouristSpot></NavLink>
                <NavLink to='/view-details'><TouristSpot></TouristSpot></NavLink>
                <NavLink to='/view-details'><TouristSpot></TouristSpot></NavLink>
            </div>
        </div>
    );
};

export default TouristSpots;
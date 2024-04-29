import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const spot = useLoaderData()
    const { average_cost, image, seasonality, totalVisitorPerYear, tourists_spot_name, travel_time, country_name, location, short_description, _id } = spot

    return (
        <div className="sm:mt-28 mt-20 max-w-[1300px] mx-auto px-3 sm:px-5">
            <Helmet>
                <title>{tourists_spot_name} | Tripster</title>
            </Helmet>
            <img className="rounded-md w-full" src={image} />
            <h1 className="mt-5 font-platypi sm:text-4xl text-3xl md:text-5xl mb-2">{tourists_spot_name}</h1>
            <p className="text-xl font-semibold text-[#9e9e9e]">{country_name} | {location}</p>

            <div className="mt-5 text-lg font-poppins">
                <p>{short_description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 gap-2 mt-5 text-lg font-semibold font-poppins">
                <p className="border border-[#ebebeb] py-1 px-2">Average Cost: ${average_cost}</p>
                <p className="border border-[#ebebeb] py-1 px-2">Seasonality: {seasonality}</p>
                <p className="border border-[#ebebeb] py-1 px-2">Travel Time: {travel_time} Days</p>
                <p className="border border-[#ebebeb] py-1 px-2">Visitor per Year: {totalVisitorPerYear}</p>
            </div>
        </div>
    );
};

export default ViewDetails;
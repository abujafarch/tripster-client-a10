import { Link } from "react-router-dom";

const MyList = ({myList}) => {
    const { _id ,average_cost, image, seasonality, totalVisitorPerYear, tourists_spot_name, travel_time } = myList
    return (
        <div className="border border-[#dadada]">
            <div className="relative">
                <img className="h-[350px] object-cover object-center" src={image} />
                <div className="absolute left-3 bottom-3 text-white p-3 bg-[#00000050]">
                    <h2 className="font-platypi text-3xl">${average_cost}</h2>
                    <p className="font-raleway text-lg font-medium">best for <span className="font-platypi font-semibold">{seasonality}</span></p>
                </div>
            </div>
            <h2 className="sm:text-3xl px-2 text-2xl mt-1 font-platypi">{tourists_spot_name}</h2>
            <div className="flex my-3 px-2 justify-between font-semibold text-base font-macondo sm:text-lg">
                <p>Visitor: {totalVisitorPerYear}/yr</p>
                <p>Time: {travel_time}Days</p>
            </div>
            <div className="flex justify-between mx-2 mb-3">
                <Link to={`/update-spot/${_id}`}>
                    <button className="py-2 px-5 bg-light-blue rounded-sm text-white font-macondo text-lg">Update</button>
                </Link>
                <button className="py-2 px-5 bg-orange rounded-sm text-white font-macondo text-lg">Delete</button>
            </div>
        </div>
    );
};

export default MyList;
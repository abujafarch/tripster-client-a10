import { Link } from "react-router-dom";

const MyList = () => {
    return (
        <div className="border border-[#dadada]">
            <div className="relative">
                <img className="h-[350px] object-cover object-center" src="https://i.ibb.co/CPkhyJJ/vietnam-f.jpg" />
                <div className="absolute left-3 bottom-3 text-white p-3 bg-[#00000050]">
                    <h2 className="font-platypi text-3xl">$2000</h2>
                    <p className="font-raleway text-lg font-medium">best for <span className="font-platypi font-semibold">Winter</span></p>
                </div>
            </div>
            <h2 className="sm:text-3xl px-2 text-2xl mt-1 font-platypi">Gracefully Sundarban</h2>
            <div className="flex my-3 px-2 justify-between font-semibold text-base font-macondo sm:text-lg">
                <p>Visitor: 100000/yr</p>
                <p>Time: 7Days</p>
            </div>
            <div className="flex justify-between mx-2 mb-3">
                <Link>
                    <button className="py-2 px-5 bg-light-blue rounded-sm text-white font-macondo text-lg">Update</button>
                </Link>
                <button className="py-2 px-5 bg-orange rounded-sm text-white font-macondo text-lg">Delete</button>
            </div>
        </div>
    );
};

export default MyList;
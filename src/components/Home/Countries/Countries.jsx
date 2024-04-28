import { Link } from "react-router-dom";
import Country from "./Country";

const Countries = () => {
    return (
        <div className="md:mt-24 sm:mt-20 mt-12 max-w-[1480px] mx-auto px-3">
            <h1 className="font-platypi sm:text-4xl text-3xl md:text-5xl text-light-blue text-center font-bold">Browse Countries</h1>
            <div className="md:mt-20 sm:mt-12 mt-8 grid md-lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                <Link to='/country-spots'><Country></Country></Link>
                <Link to='/country-spots'><Country></Country></Link>
                <Link to='/country-spots'><Country></Country></Link>
            </div>
        </div>
    );
};

export default Countries;
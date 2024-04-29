import { Link } from "react-router-dom";
import Country from "./Country";
import { useEffect, useState } from "react";

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data=>{
                setCountries(data)
                // console.log(data)
            })
    }, [])

    return (
        <div className="md:mt-24 sm:mt-20 mt-12 max-w-[1480px] mx-auto px-3">
            <h1 className="font-platypi sm:text-4xl text-3xl md:text-5xl text-light-blue text-center font-bold">Browse Countries</h1>
            <div className="md:mt-20 sm:mt-12 mt-8 grid md-lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {
                    countries.map(country=><Link key={country._id}><Country country={country} ></Country></Link>)
                }
            </div>
        </div>
    );
};

export default Countries;
import { useState } from "react";
import AllTouristSpot from "./AllTouristSpot";
import { IoIosArrowDown } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const AllTouristsSpots = () => {
    const touristSpots = useLoaderData()
    const duplicatedTouristSpots = [...touristSpots]
    const [touristSpotsSort, setTouristSpotsSort] = useState(touristSpots)
    console.log(touristSpots)

    const handleSelectValue = (e) => {
        if (e.target.value === 'LowToHigh') {
            duplicatedTouristSpots.sort((a, b) => parseInt(a.average_cost) - parseInt(b.average_cost))
            setTouristSpotsSort(duplicatedTouristSpots)
        }
        else if (e.target.value === 'HighToLow') {
            duplicatedTouristSpots.sort((a, b) => parseInt(b.average_cost) - parseInt(a.average_cost))
            setTouristSpotsSort(duplicatedTouristSpots)
        }
        else{
            setTouristSpotsSort(touristSpots)
        }
    }

    return (
        <div className="mb-12">
            <Helmet>
                <title>All Tourists Spot | Tripster</title>
            </Helmet>
            <div className="h-[400px] relative">
                <img className="h-full w-full object-cover object-center" src="https://i.ibb.co/z7dqvW8/combodia.jpg" />
                <div className="z-10 w-full absolute left-1/2 top-[22%] sm:top-[35%] -translate-x-1/2">
                    <h1 className="font-kaushan w-full text-center sm:text-5xl text-3xl font-bold text-[#e2e2e2]">All Tourists Spot</h1>
                    <p className="text-[#e2e2e2] mt-4 sm:mt-8 max-w-[800px] mx-auto px-2 font-macondo text-lg text-center">Asia, the world's largest continent, is a treasure trove of diversity. From the majestic Himalayas to the serene beaches of Southeast Asia, it offers iconic landmarks, rich cultures, and breathtaking natural beauty</p>
                </div>
                <div className="absolute w-full h-full left-0 bottom-0 bg-[#00000075]"></div>
            </div>

            <div className="mt-5 max-w-[1480px] mx-auto px-3">
                <div className="mb-5 w-fit border-2 px-2 py-1 flex justify-between gap-2 items-center border-light-blue rounded-md relative pl-0 right-0">
                    <select onChange={handleSelectValue} className="outline-none cursor-pointer text-lg sort-by font-raleway font-semibold px-3">
                        <option value="Sort by">Sort by</option>
                        <option value="LowToHigh">Lowest to high price</option>
                        <option value="HighToLow">Highest to low price</option>
                    </select>
                    <p className="text-xl font-bold"><IoIosArrowDown></IoIosArrowDown></p>
                </div>

                <div className="grid md-lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-5">
                    {
                        touristSpotsSort.map(touristSpot => <AllTouristSpot touristSpot={touristSpot} key={touristSpot._id}></AllTouristSpot>)
                    }
                    {/* <AllTouristSpot></AllTouristSpot> */}
                </div>
            </div>

        </div>
    );
};

export default AllTouristsSpots;
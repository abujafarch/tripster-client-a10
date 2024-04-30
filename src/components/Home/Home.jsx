
import { useContext } from "react";
import Countries from "./Countries/Countries";
import GetLost from "./GetLost";
import Slider from "./Slider";
import TopReviews from "./TopReviews";
import TouristSpots from "./TouristSpot/TouristSpots";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const { themeChange } = useContext(AuthContext)
    const touristSpots = useLoaderData()
    const slicedTouristSpots = touristSpots.slice(3, 9)
    // console.log(slicedTouristSpots)

    return (
        <div data-theme={`${themeChange ? 'light' : 'dark'}`}>
            <Helmet>
                <title>Tripster Home | Tripster</title>
            </Helmet>
            <div className="relative">
                <Slider></Slider>
                <TouristSpots slicedTouristSpots={slicedTouristSpots}></TouristSpots>
                <GetLost></GetLost>
                <Countries></Countries>
                <TopReviews></TopReviews>
            </div>
        </div>
    );
};

export default Home;
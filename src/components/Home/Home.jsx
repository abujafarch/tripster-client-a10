
import { useContext } from "react";
import Countries from "./Countries/Countries";
import GetLost from "./GetLost";
import Slider from "./Slider";
import TopReviews from "./TopReviews";
import TouristSpots from "./TouristSpot/TouristSpots";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
    const { themeChange } = useContext(AuthContext)
    return (
        <div data-theme={`${themeChange ? 'light' : 'dark'}`}>
            <div className="relative">
                <Slider></Slider>
                <TouristSpots></TouristSpots>
                <GetLost></GetLost>
                <Countries></Countries>
                <TopReviews></TopReviews>
            </div>
        </div>
    );
};

export default Home;
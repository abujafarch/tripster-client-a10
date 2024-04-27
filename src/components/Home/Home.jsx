import Countries from "./Countries/Countries";
import GetLost from "./GetLost";
import Slider from "./Slider";
import TopReviews from "./TopReviews";
import TouristSpots from "./TouristSpot/TouristSpots";

const Home = () => {
    return (
        <div>
            <div className="">
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
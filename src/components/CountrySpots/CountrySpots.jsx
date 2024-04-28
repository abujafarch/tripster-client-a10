import CountrySpot from "./CountrySpot";

const CountrySpots = () => {
    return (
        <div className="mb-12">
            <div className="h-[400px] relative">
                <img className="h-full w-full object-cover object-center" src="https://i.ibb.co/z7dqvW8/combodia.jpg"/>
                <div className="z-10 w-full absolute left-1/2 top-[22%] sm:top-[35%] -translate-x-1/2">
                    <h1 className="font-kaushan w-full text-center sm:text-5xl text-3xl font-bold text-[#e2e2e2]">Bangladesh Spots</h1>
                    <p className="text-[#e2e2e2] mt-4 sm:mt-8 max-w-[800px] mx-auto px-2 font-macondo text-lg text-center">Asia, the world's largest continent, is a treasure trove of diversity. From the majestic Himalayas to the serene beaches of Southeast Asia, it offers iconic landmarks, rich cultures, and breathtaking natural beauty</p>
                </div>
                <div className="absolute w-full h-full left-0 bottom-0 bg-[#00000075]"></div>
            </div>

            <div className="mt-5 max-w-[1480px] mx-auto px-3">
                <div className="grid md-lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-5">
                    <CountrySpot></CountrySpot>
                    <CountrySpot></CountrySpot>
                    <CountrySpot></CountrySpot>
                    <CountrySpot></CountrySpot>
                </div>
            </div>

        </div>
    );
};

export default CountrySpots;
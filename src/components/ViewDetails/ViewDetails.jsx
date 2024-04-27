const ViewDetails = () => {
    return (
        <div className="sm:mt-28 mt-20 max-w-[1300px] mx-auto px-3 sm:px-5">
            <img className="rounded-md w-full" src="https://i.ibb.co/CPkhyJJ/vietnam-f.jpg" />
            <h1 className="mt-5 font-platypi sm:text-4xl text-3xl md:text-5xl mb-2">Gracefully Sundarban</h1>
            <p className="text-xl font-semibold text-[#9e9e9e]">Bangladesh | Sundarban</p>

            <div className="mt-5 text-lg font-poppins">
                <p>The Sundarbans, a UNESCO World Heritage Site straddling Bangladesh and India, is a mesmerizing labyrinth of mangrove forests, tidal rivers, and diverse wildlife. Home to the elusive Bengal tiger, spotted deer, crocodiles, and countless bird species, it captivates with its raw beauty and ecological importance. Exploring its waterways by boat unveils a serene yet haunting landscape, where nature's resilience and fragility intertwine. A journey to the Sundarbans is not just an adventure, but a pilgrimage to one of the last remaining wildernesses, a poignant reminder of our interconnectedness with the natural world and the need for its preservation.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 gap-2 mt-5 text-lg font-semibold font-poppins">
                <p className="border border-[#ebebeb] py-1 px-2">Average Cost: $20000</p>
                <p className="border border-[#ebebeb] py-1 px-2">Seasonality: Winter</p>
                <p className="border border-[#ebebeb] py-1 px-2">Travel Time: Winter</p>
                <p className="border border-[#ebebeb] py-1 px-2">Visitor per Year: 100000</p>
            </div>
        </div>
    );
};

export default ViewDetails;
import { Fade, Slide } from "react-awesome-reveal";


const Country = () => {
    return (
        <div className="relative h-[500px]">
            <img className="h-full object-cover object-center" src="https://i.ibb.co/z7dqvW8/combodia.jpg" />
            <div className="absolute left-0 bottom-0 w-full h-full transition-all duration-500 ease-in-out hover:bg-[#00000054] bg-[#00000021]">
                <div className="absolute left-5 bottom-5 text-white">
                    <Slide>
                        <h1 className="font-platypi text-4xl font-bold mb-3">Bangladesh</h1>
                    </Slide>
                    <Fade delay={500} cascade damping={1e-1}>
                        <p className="font-macondo text-lg">Bangladesh, a country of natural beauty and cultural richness, boasts lush greenery, ancient temples, vibrant festivals, and warm-hearted people, inviting travelers to explore its diverse landscapes and heritage sites</p>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Country;
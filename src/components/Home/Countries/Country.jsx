import { Fade, Slide } from "react-awesome-reveal";

const Country = ({ country }) => {
    const { country_name, image, description } = country
    return (
        <div className="relative h-[500px]">
            <img className="h-full object-cover object-center" src={image} />
            <div className="absolute left-0 bottom-0 w-full h-full transition-all duration-500 ease-in-out hover:bg-[#00000054] bg-[#00000021]">
                <div className="absolute left-5 bottom-5 text-white">
                    <Slide>
                        <h1 className="font-platypi text-4xl font-bold mb-3">{country_name}</h1>
                    </Slide>
                    <Fade delay={500} cascade damping={1e-1}>
                        <p className="font-platypi">{description}</p>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Country;
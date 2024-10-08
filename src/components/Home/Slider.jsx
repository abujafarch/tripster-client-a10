import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Autoplay } from 'swiper/modules';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Typewriter } from 'react-simple-typewriter'

const Slider = () => {
    return (
        <div className=''>
            <Swiper
                navigation={{
                    nextEl: '.slide-next',
                    prevEl: '.slide-prev',
                    clickable: true
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                loop={true}
                modules={[Navigation, Autoplay]}
                className='relative mySwiper h-[550px] lg:h-screen md:h-[870px]'
            >

                <div className='absolute flex max-w-[900px] mx-auto flex-col items-center w-full z-40 text-center top-[53%] sm:top-[50%] -translate-x-1/2 -translate-y-1/2 left-1/2 px-5 '>
                    <div className='max-w-[900px] sm:mb-8 mb-2'>
                        <h1 className='text-light-blue font-kaushan font-bold text-3xl sm:text-5xl md:text-6xl md-lg:text-7xl'>Make Yourself
                            <span className='ml-3 sm:ml-4 md:ml-8'>
                                <Typewriter
                                    words={['Overwhelmed', 'Free', 'Curious']}
                                    loop={Infinity}
                                    typeSpeed={120}
                                    deleteSpeed={100}
                                    delaySpeed={3000}
                                />
                            </span>
                        </h1>
                    </div>
                    <div className='max-w-[700px] sm:px-6'>
                        <p className='object-fill text-white md:text-lg font-inter'>Explore diverse destinations, rich cultures, and memorable experiences. Start your adventure today with our curated travel guides</p>
                    </div>
                    <button className='hover:bg-light-blue transition duration-300 ease-in-out px-4 py-2 rounded-[30px] sm:mt-10 mt-6 font-semibold text-lg z-40 text-white hover:text-white border-[3px] border-light-blue'>Explore Now</button>
                </div>

                <SwiperSlide>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/mGZmwnz/dubai.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/YZjth5K/mangrove-forest-in-phang-nga-bay-4k-thailand-b-Wtoa2a-Um-Zqara-Wkp-JRob-Wllr-Wdma2-U.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/nLkwCxy/malaysia-f.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/CPkhyJJ/vietnam-f.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/z7dqvW8/combodia.jpg.jpg" />
                    </div>
                </SwiperSlide>

                <div className='w-full h-full z-10 absolute top-0 bg-[#00000070]'></div>

                {/* bottom-5 left-1/2 -translate-x-1/2 */}
                <div className='flex w-full sm:h-full gap-10 items-center justify-center absolute z-30 bottom-5 left-1/2 -translate-x-1/2'>

                    <div className='slide-prev sm:absolute sm:left-1 sm:top-1/2 sm:-translate-y-1/2 bg-transparent transition duration-300 p-1 sm:w-16 sm:h-16 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer text-white text-3xl sm:text-7xl sm:border-none border-2 border-light-blue'>
                        <MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft>
                    </div>
                    <div className='slide-next sm:absolute sm:right-1 sm:top-1/2 sm:-translate-y-1/2 bg-transparent transition duration-300 p-1 sm:w-16 sm:h-16 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer text-white text-3xl sm:text-7xl sm:border-none border-2 border-light-blue'>
                        <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;
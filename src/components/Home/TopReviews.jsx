import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay } from 'swiper/modules';
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";

const TopReviews = () => {
    return (
        <div className="md:mt-24 md:h-[650px] sm:mt-20 mt-12 flex md:flex-row flex-col items-center">
            <img className="md:w-1/2 w-full object-cover object-center h-full" src="https://i.ibb.co/kSCptVB/shutterstock-657091870.jpg" />
            <div className="bg-[#1f1e1e] w-full md:w-1/2 md:pb-0 pb-10 md:h-full">
                <h1 className="font-platypi text-white text-3xl sm:text-4xl md-lg:text-5xl text-center md:mt-20 mt-10">Our Top Reviews</h1>
                <div className='md:mt-16 mt-8'>

                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        modules={[ Autoplay]}
                        className="mySwiper"
                    >


                        <SwiperSlide>
                            <div>
                                <h1 className='text-center text-white font-platypi text-2xl px-2'>Majestically Sundarban</h1>
                                <div className='flex gap-3 text-orange text-2xl justify-center mt-3'>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                </div>
                                <p className=' px-10 font-inter text-center mt-8 font-medium text-[#d6d6d6]'>A mesmerizing adventure! Navigating through mangrove forests, spotting elusive tigers, and witnessing diverse wildlife was unforgettable. The tranquility of the rivers and the raw beauty of nature make Sundarbans a must-visit destination for nature enthusiasts</p>
                                <h4 className='text-center font-bebas text-lg tracking-widest text-white mt-6'>Abujafar Chhaleh</h4>
                                <div className='mt-5 flex justify-center'>
                                    <img className='h-12 object-cover w-12 rounded-full' src="https://i.ibb.co/whW8Hnb/360-F-60785976-MUAspg-GG0-Zccrdc-Xgx-XGR9ih-Q3-Iq-VNHh.jpg" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                                <h1 className='text-center px-2 text-white font-platypi text-2xl'>Vibrantly Thailand</h1>
                                <div className='flex gap-3 text-orange text-2xl justify-center mt-3'>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStarHalfStroke></FaStarHalfStroke>
                                </div>
                                <p className='px-10 font-inter text-center mt-8 font-medium text-[#d6d6d6]'>Thailand is a feast for the senses! From the bustling streets of Bangkok to the tranquil beaches of Phuket, every moment is filled with vibrant culture, delicious food, and awe-inspiring temples. A perfect blend of adventure and relaxation.</p>
                                <h4 className='text-center font-bebas text-lg tracking-widest text-white mt-6'>Shezan Normel</h4>
                                <div className='mt-5 flex justify-center'>
                                    <img className='h-12 object-cover w-12 rounded-full' src="https://i.ibb.co/yXLPgsH/1000-F-147271302-djhdwlc-Ak2-P7n-AAFUWM9-Ehraj-BEb-FSoj.jpg" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                                <h1 className='text-center px-2 text-white font-platypi text-2xl'>Gracefully Vietnam</h1>
                                <div className='flex gap-3 text-orange text-2xl justify-center mt-3'>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStarHalfStroke></FaStarHalfStroke>
                                </div>
                                <p className='px-10 font-inter text-center mt-8 font-medium text-[#d6d6d6]'>Vietnam stole my heart! Exploring ancient temples in Hanoi, cruising through Halong Bay's limestone karsts, and savoring pho on the streets of Ho Chi Minh City - each experience left me in awe of Vietnam's beauty and rich history</p>
                                <h4 className='text-center font-bebas text-lg tracking-widest text-white mt-6'>Ashiqur Rahman</h4>
                                <div className='mt-5 flex justify-center'>
                                    <img className='h-12 object-cover w-12 rounded-full' src="https://i.ibb.co/VtD7hs9/images.jpg" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TopReviews;
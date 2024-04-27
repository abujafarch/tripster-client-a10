import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

const LoginBanner = () => {
    return (
        <div className="w-full">
            <Swiper
                effect={'fade'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop={true}
                modules={[EffectFade, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className="w-full">
                    <div className=" h-[500px] w-full object-cover relative">
                        <img className="h-full w-full rounded-l-xl object-cover" src="https://i.ibb.co/gJPSQwz/mohona-hoker.jpg" />
                        <div className="absolute top-16 z-20 text-white text-center">
                            <h1 className="font-kaushan text-6xl mb-3">Bangladesh</h1>
                            <p className="font-macondo p-6 md-lg:p-10 pt-0 font-medium">Explore Bangladesh's stunning nature: Sundarbans, Sylhet tea gardens, Padma river, and diverse wildlife. Nature enthusiasts' dream destination</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <div className=" h-[500px] w-full object-cover relative">
                        <img className="h-full w-full rounded-l-xl object-cover" src="https://i.ibb.co/bQV8ZYh/island-travel-destinations-idyllic-relaxation-summer-1122-2272.jpg" />
                        <div className="absolute top-16 z-20 text-white text-center">
                            <h1 className="font-kaushan text-6xl mb-3">Thailand</h1>
                            <p className="font-macondo p-6 md-lg:p-10 pt-0 font-medium">Thailand, known for its vibrant culture, stunning beaches, rich history, and delicious cuisine, offers travelers a truly unforgettable experience.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <div className="h-[500px] w-full object-cover relative">
                        <img className="h-full w-full rounded-l-xl object-cover" src="https://i.ibb.co/QjFB3t1/Vz-z-SCc-Zu9hm-d-6-HNi-Tc-r-E05y3-QG2uu-Wj-zpu6-Mz-N7a-Fhr2-MLZNIPyml-SUz7kyuj5k6kf-XL5-Ep-KDBWWUq-E.jpg" />
                        <div className="absolute top-16 z-20 text-white text-center">
                            <h1 className="font-kaushan text-6xl mb-3">Indonesia</h1>
                            <p className="font-macondo p-6 md-lg:p-10 pt-0 font-medium">
                                Indonesia, an archipelago of diverse landscapes, boasts lush rainforests, pristine beaches, ancient temples, and vibrant cultures, inviting exploration and adventure.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <div className="h-[500px] w-full object-cover relative">
                        <img className="h-full w-full rounded-l-xl object-cover" src="https://i.ibb.co/JrZr2z7/Kuala-Lumpur-Malaysia.jpg" />
                        <div className="absolute top-16 z-20 text-white text-center">
                            <h1 className="font-kaushan text-6xl mb-3">Malaysia</h1>
                            <p className="font-macondo p-6 md-lg:p-10 pt-0 font-medium">
                                Malaysia, a melting pot of cultures, features modern cities, lush rainforests, idyllic islands, and diverse cuisine, offering travelers a unique and memorable experience.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <div className="h-[500px] w-full object-cover relative">
                        <img className="h-full w-full rounded-l-xl object-cover" src="https://i.ibb.co/sQD2JPW/vietnam-ha-long-bay-3x2.jpg" />
                        <div className="absolute top-16 z-20 text-white text-center">
                            <h1 className="font-kaushan text-6xl mb-3">Vietnam</h1>
                            <p className="font-macondo p-6 md-lg:p-10 pt-0 font-medium">Vietnam, with its captivating landscapes, rich history, vibrant cities, and delicious cuisine, promises travelers an unforgettable journey filled with cultural immersion and natural beauty.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <div className="h-[500px] w-full object-cover relative">
                        <img className="h-full w-full rounded-l-xl object-cover" src="https://i.ibb.co/TLGPmVN/Floating-fishing-village-near-rock-islands-in-Halong-Bay-Vietnam.jpg" />
                        <div className="absolute top-16 z-20 text-white text-center">
                            <h1 className="font-kaushan text-6xl mb-3">Cambodia</h1>
                            <p className="font-macondo p-6 md-lg:p-10 pt-0 font-medium">
                                Cambodia, home to ancient temples like Angkor Wat, lush landscapes, bustling markets, and warm hospitality, invites travelers to discover its rich history and natural wonders</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default LoginBanner;
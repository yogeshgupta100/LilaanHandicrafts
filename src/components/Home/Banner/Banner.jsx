// import React from "react";

// import "./Banner.scss";
// // import BannerImg from "/image4.jpg";

// const Banner = () => {
//     return (
//         <div className="hero-banner">
//             <div className="content">
//                 <div className="text-content">
//                     <h1>SALES</h1>
//                     <p>
//                         Convallis interdum purus adipiscing dis parturient
//                         posuere ac a quam a eleifend montes parturient posuere
//                         curae tempor
//                     </p>
//                     <div className="ctas">
//                         <div className="banner-cta">Read More</div>
//                         <div className="banner-cta v2">Shop Now</div>
//                     </div>
//                 </div>
//                 <img className="banner-img" src="/img1.jpg" />
//             </div>
//         </div>
//     );
// };

// export default Banner;

import { SwiperSlide , Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.scss";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Banner = () => {
    const [banner , setBanner] = useState([]);
    useEffect(() => {
        getBanner();
    },[])
    const getBanner = async() => {
        const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}api/banners?populate=*`);
        const data = await res.json();
        console.log(data.data);
        setBanner(data.data);
    }
    return (
        <section className="hero">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {banner && banner.map((item) => {
                    return (
                    <>
                    <SwiperSlide className="mainSwiper" id={item.id}>
                        <img src={item?.attributes?.img?.data?.attributes?.url} alt="bgImg" />
                        <div className="hero-wrapper">
                            <h3>
                                {item?.attributes?.title}
                            </h3>
                            <h5>{item?.attributes?.desc}</h5>
                            <button>Explore Now</button>
                        </div>
                    </SwiperSlide>
                    </>
                    );
                })}
            </Swiper>
        </section>

    );
};

export default Banner;

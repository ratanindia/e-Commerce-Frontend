import React from "react";
//import Slider from "react-slick";
import { Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import s1 from '../../images/s1.jpg'
import s2 from '../../images/s2.jpg'
import s3 from '../../images/s3.png'
import s4 from '../../images/s4.png'
import s5 from '../../images/s5.png'



const HomeBanner = ()=>{

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows:true,
    //     autoplay:true
    //   };


   return(

    <div className="container mt-3">
        <div className="homeBannerSection">
                            <Swiper slidesPerView={1}
                                    spaceBetween={15}
                                    navigation={true}
                                    loop= {false}
                                    autoplay={{
                                        delay:2500,
                                        disableOnInteraction:false
                                    }}
                                    modules={[Navigation, Autoplay]}
                                    className="mySwiper">
            <div className="item">
                <img src={s1} className="w-100"/>
            </div>
            <div className="item">
                <img src={s2} className="w-100"/>
            </div>
            <div className="item">
                <img src={s3} className="w-100"/>
            </div>
            <div className="item">
                <img src={s4} className="w-100"/> </div>
            <div className="item">
                <img src={s5} className="w-100"/>
            </div>
            </Swiper>
        </div>
    </div>
   )
}

export default HomeBanner;
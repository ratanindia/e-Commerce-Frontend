import { Button } from "@mui/material";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductItem from "../../Components/ProductItem";
import HomeCategories from "../../Components/HomeCategories";
import { IoMailOutline } from "react-icons/io5";








const Home = () => {

    // var productSliderOption = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     autoplay: true
    // };


    return (
        <>
            <HomeBanner />

            <HomeCategories/>
            <section className='homeProducts'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                           <div className="sticky">
                           <div className="banner">
                                <img src={banner1} className="cursor w-100" />
                            </div>

                            <div className="banner mt-4">
                                <img src={banner2} className="cursor w-100" />
                            </div>
                           </div>
                        </div>


                        <div className="col-md-9 productRow">

                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-dark text-sml mb-0">Do not miss the
                                        current offer untill the end of October.</p>

                                </div>

                                <Button className="viewallBtn ml-auto">View All <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-2">

                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    navigation={true}
                                    slidesPerGroup={3}
                                    modules={[Navigation]}
                                    className="mySwiper">

                                
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    
                                    </Swiper>



                            </div>





                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-dark text-sml mb-0">New products with updated stocks.</p>

                                </div>

                                <Button className="viewallBtn ml-auto">View All <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                
                                 </div>

                                 <div className="d-flex mt-4 mb-5 bannerSec">
                                 <div className="banner">
                                <img src={banner3} className="cursor w-100" />
                            </div>
                            <div className="banner">
                                <img src={banner4} className="cursor w-100" />
                            </div>
                                 </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="newsLetterSec mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <p className="text-white">$20 discount for your first order</p>
                        <h3 className="text-white">Join our newsletter and get...</h3>
                        <p className="text-light">Join our email subsription now to get 
                             updates <br/> on promotions and coupons.</p>


                             <form>
                                <IoMailOutline />
                                <input type="text" placeholder="Please fill your Email.."/>
                                <Button>Subscribe</Button>
                                </form>
                        </div>
                        <div className="col-md-6">
                            <img src={banner3}/>
                        </div>
                    </div>
                </div>
            </section>



           
            
        </>
    )
}

export default Home;
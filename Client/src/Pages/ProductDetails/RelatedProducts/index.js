
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductItems from '../../../Components/ProductItems';



const RelatedProducts = (props) =>{


    return  (
        <>
        <div className="d-flex align-items-center mt-3">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">{props.title}</h3>
                                    
                                </div>

                            </div>

                            <div className="product_row w-100 mt-0">

                                <Swiper
                                    slidesPerView={5}
                                    spaceBetween={0}
                                    navigation={true}
                                    slidesPerGroup={3}
                                    modules={[Navigation]}
                                    className="mySwiper">

                                
                                    <SwiperSlide>
                                        <ProductItems/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItems/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItems/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItems/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItems/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItems/>
                                    </SwiperSlide>
                                    
                                    </Swiper>



                            </div>
        </>
    )
}


export {RelatedProducts}
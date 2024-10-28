import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useRef, useState } from 'react';




const ProductZoom = () =>{

    const [slideIndex, setslideIndex] = useState(0);
    const zoomSilderBig = useRef()
    const zoomSilder = useRef()

    const goto = (index) => {
        setslideIndex(index)
        zoomSilder.current.swiper.slickGoto(index)
        zoomSilderBig.current.swiper.slickGoto(index)
    }


    return(
        <>
        <div className="productZoom">
        <div className='productZoom position-relative'>
                            <div className='badge badge-primary'>23%</div>
                            <Swiper slidesPerView={1}
                                spaceBetween={0}
                                navigation={false}
                                slidesPerGroup={1}
                                modules={[Navigation]}
                                className='zoomSilderBig'
                                ref={zoomSilderBig}>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom zoomType='hover' zoomScale={1} src='https://www.shutterstock.com/image-vector/
                                vector-illustration-set-colorful-icons-260nw-599920115.jpg'/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom zoomType='hover' zoomScale={1} src='https://www.shutterstock.com/image-vector/
                                vector-illustration-set-colorful-icons-260nw-599920115.jpg'/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom zoomType='hover' zoomScale={1} src='https://www.shutterstock.com/image-vector/
                                vector-illustration-set-colorful-icons-260nw-599920115.jpg'/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom zoomType='hover' zoomScale={1} src='https://www.shutterstock.com/image-vector/
                                vector-illustration-set-colorful-icons-260nw-599920115.jpg'/>
                                    </div>
                                </SwiperSlide>
                            </Swiper>


                            <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        navigation={true}
                        slidesPerGroup={1}
                        modules={[Navigation]}
                        className='zoomSilder'
                        ref={zoomSilder}>

                        <SwiperSlide>
                            <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                                <img src='https://www.shutterstock.com/image-vector/
                                vector-illustration-set-colorful-icons-260nw-599920115.jpg' className='w-100'
                                    onClick={() => goto(0)} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                                <img src='https://www.shutterstock.com/image-vector/
                                vector-illustration-set-colorful-icons-260nw-599920115.jpg' className='w-100'
                                    onClick={() => goto(1)} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                                <img src='https://www.shutterstock.com/image-vector/
                                vector-illustration-set-colorful-icons-260nw-599920115.jpg' className='w-100'
                                    onClick={() => goto(2)} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                                <img src='https://www.shutterstock.com/image-vector/
                                vector-illustration-set-colorful-icons-260nw-599920115.jpg' className='w-100'
                                    onClick={() => goto(3)} />
                            </div>
                        </SwiperSlide>


                    </Swiper>
                        </div>
        </div>
        </>
    )
}

export {ProductZoom}
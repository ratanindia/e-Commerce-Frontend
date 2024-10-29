import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';



const HomeCategories = () =>{

    const [itemBg, setitemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3ff',
        '#f2fce4',
        
    ])


    return(
        <>

        <section className="homeCat">
            <div className="container">
                <h3 className='mb-3 hd'>Featured Categories</h3>
            <Swiper
                                    slidesPerView={10}
                                    spaceBetween={8}
                                    navigation={true}
                                    slidesPerGroup={3}
                                    modules={[Navigation]}
                                    className="mySwiper">

                                    {itemBg?. map((item, index)=>{
                                        return(
                                            <SwiperSlide>
                                       <div key={index} className='item text-center cursor' style={{background:item}}>
                                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png'/>
                                       <h6>Peach</h6>
                                       </div>
                                    </SwiperSlide>
                                        )
                                    }) }
                                    
                                    
                                    </Swiper>
            </div>
        </section>
        </>
    )
}

export default HomeCategories;
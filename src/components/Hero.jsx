import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';



const Hero = () => {
  return (

    <section>

       <Swiper 
         slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          dynamicBullets: true,
           clickable: true,
        }}
         navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full h-[300px] md:h-[350px] lg:h-[400px]  my-2 mx-20"
      >
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      
    </section>

  )
}

export default Hero
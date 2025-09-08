// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import image1 from "../../assets/images/i1.jpg";
import image2 from "../../assets/images/i2.jpg";
import image3 from "../../assets/images/i3.jpg";
import image4 from "../../assets/images/i4.jpg";
import image5 from "../../assets/images/i5.jpg";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="rounded-xl">
          <div className="h-[450px] ">
            <img
              className="w-full h-full rounded-xl"
              src={image1}
              alt="banner image 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl">
          <div className="h-[450px] ">
            <img
              className="w-full h-full rounded-xl"
              src={image2}
              alt="banner image 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl">
          <div className="h-[450px] ">
            <img
              className="w-full h-full rounded-xl"
              src={image3}
              alt="banner image 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl">
          <div className="h-[450px] ">
            <img
              className="w-full h-full rounded-xl"
              src={image4}
              alt="banner image 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl">
          <div className="h-[450px] ">
            <img
              className="w-full h-full rounded-xl"
              src={image5}
              alt="banner image 1"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

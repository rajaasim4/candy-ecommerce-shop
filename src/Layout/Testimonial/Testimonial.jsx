import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard";

import { Autoplay, Navigation } from "swiper";
const Testimonial = () => {
  return (
    <>
      <div className="">
        <div className="text-center mb-5 py-3 w-6/12 mx-auto slg:w-8/12">
          <h3 className="text-4xl font-pacifico text-[#f4952c] font-medium slg:text-3xl sm:text-2xl">
            Testimonial
          </h3>
          <h2 className="text-5xl mt-4 font-medium  slg:text-4xl sm:text-3xl font-pacifico ">
            We Care About Our Customers Experience Too
          </h2>
        </div>
        <div className="py-4 mt-10 w-95 mx-auto flex justify-evenly item-center xxl:w-[1700px]">
          <Swiper
            slidesPerView={4}
            autoplay={true}
            spaceBetween={30}
            allowSlideNext={true}
            speed={1500}
            allowSlidePrev={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper h-full w-full py-14"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              670: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide className="text-center flex justify-center items-center">
              <TestimonialCard customerName="Bruce Hardy" company="Google" />
            </SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center">
              <TestimonialCard customerName="Georgia" company="Meta" />
            </SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center">
              <TestimonialCard customerName="Alex" company="Apple" />
            </SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center">
              <TestimonialCard customerName="Danny Smith" company="Tesla" />
            </SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center">
              <TestimonialCard customerName="Elon " company="Amazon" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

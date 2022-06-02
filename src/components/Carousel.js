import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@/components/Container';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel({ id, innerRef }) {
  const swiper = useSwiper();
  return (
    <section id={id} className="bg-purple h-[64rem] w-[100%] flex items-center justify-center" ref={innerRef}>
      <Container>
        <div className="text-center">
          <p className="text-orange font-extrabold uppercase">Testimonial</p>
          <h4 className="font-extrabold text-white text-[2.4rem] md:text-[2.8rem]">What some of our Clients say </h4>
        </div>
        <Swiper loop={true} slidesPerView={1}>
          <SwiperSlide>
            <div className="relative flex flex-col items-center">
              <div className="absolute bg-purple rounded-[50%] h-[10rem] w-[10rem] flex justify-center items-center mb-[1.6rem]">
                <svg className="h-[3.39rem] w-[3.38rem]">
                  <use href="/images/sprite.svg#icon-quote" />
                </svg>
              </div>
              <div className="w-[100%] flex items-center justify-center md:justify-between">
                <button onClick={() => swiper.slidePrev()}>
                  <svg className="h-[6.4rem] w-[6.4rem] hidden md:block">
                    <use href="/images/sprite.svg#icon-chevron-left" />
                  </svg>
                </button>
                <div className="mt-[5rem] bg-white w-[90%] md:w-[48.72%] h-[38rem] md:h-[33rem] px-[1.6rem] flex flex-col justify-center items-center space-y-[1.6rem]">
                  <div className="flex mt-[4rem] md:mt-[2.4rem]">
                    <svg className="h-[1.75rem] w-[1.64rem]">
                      <use href="/images/sprite.svg#icon-star" />
                    </svg>
                    <svg className="h-[1.75rem] w-[1.64rem]">
                      <use href="/images/sprite.svg#icon-star" />
                    </svg>
                    <svg className="h-[1.75rem] w-[1.64rem]">
                      <use href="/images/sprite.svg#icon-star" />
                    </svg>
                    <svg className="h-[1.75rem] w-[1.64rem]">
                      <use href="/images/sprite.svg#icon-star" />
                    </svg>
                    <svg className="h-[1.75rem] w-[1.64rem]">
                      <use href="/images/sprite.svg#icon-star" />
                    </svg>
                  </div>
                  <p className="w-[100%] md:w-[60%] text-center">
                    Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus.
                  </p>
                  <hr className="h-[.1rem] w-[10%] border-0 bg-black/10" />
                  <div className="flex flex-col justify-between items-center">
                    <div className="w-[3.6rem] h-[3.6rem] rounded-[100%] overflow-hidden">
                      <img className="w-[100%] h-[100%]" src="/images/review-image.png" alt="" />
                    </div>
                    <p className="font-bold">Justus Menke</p>
                    <p className="text-black/50">CEO Eronaman</p>
                  </div>
                </div>
                <button onClick={() => swiper.slideNext()}>
                  <svg className="h-[6.4rem] w-[6.4rem] hidden md:block">
                    <use href="/images/sprite.svg#icon-chevron-right" />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}

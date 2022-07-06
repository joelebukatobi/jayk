import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@/components/Container';
import { carousel } from 'utils/carousel';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel({ id, innerRef }) {
  const swiperRef = useRef();
  return (
    <section
      id={id}
      className="bg-purple mt-[16rem] py-[8rem] md:py-[16rem] sw-[100%] flex items-center justify-center"
      ref={innerRef}
    >
      <Container>
        <div className="text-center">
          <p className="text-orange font-extrabold uppercase">Testimonial</p>
          <h4 className="font-extrabold text-white text-[2.4rem] md:text-[2.8rem]">What some of our Clients say </h4>
        </div>
        <div className="w-[100%] border-5 border-white flex items-center justify-center md:justify-between">
          <button onClick={() => swiperRef.current.slidePrev()}>
            <svg className="h-[6.4rem] w-[6.4rem] hidden md:block">
              <use href="/images/sprite.svg#icon-chevron-left" />
            </svg>
          </button>
          <Swiper
            loop={true}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {carousel.map(({ stars, review }) => (
              <SwiperSlide>
                <div className="relative flex flex-col items-center">
                  <div className="absolute bg-purple rounded-[50%] h-[10rem] w-[10rem] flex justify-center items-center mb-[1.6rem]">
                    <svg className="h-[3.39rem] w-[3.38rem]">
                      <use href="/images/sprite.svg#icon-quote" />
                    </svg>
                  </div>
                  <div className="mt-[5rem] bg-white md:w-[60%] lg:w-[60%] h-[45rem] md:h-[40rem] lg:h-[40rem] pt-[2.4rem] lg:h-[33rem] px-[2.4rem] md:px-[4rem] flex flex-col justify-center items-center space-y-[1.6rem]">
                    <div className="flex">
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
                    <p className="w-[100%] text-center">{review}</p>
                    <hr className="h-[.1rem] w-[10%] border-0 bg-black/10" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button onClick={() => swiperRef.current.slideNext()}>
            <svg className="h-[6.4rem] w-[6.4rem] hidden md:block">
              <use href="/images/sprite.svg#icon-chevron-right" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@/components/Container';

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
                  <p className="w-[100%] text-center">
                    I have read through the proposal you have sent, and I must really appreciate you for a very thorough
                    job. The pain-staking process of selecting a trending, unique and interesting topic from scratch
                    made this process very easy. Also, the contents of the proposal are very informative and unique as
                    there were almost no similarities anywhere. Comments from lecturers have been superb so far. I am
                    certain of a distinction going forward. Thank you 🙏🙏
                  </p>
                  <hr className="h-[.1rem] w-[10%] border-0 bg-black/10" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex flex-col items-center">
                <div className="absolute bg-purple rounded-[50%] h-[10rem] w-[10rem] flex justify-center items-center mb-[1.6rem]">
                  <svg className="h-[3.39rem] w-[3.38rem]">
                    <use href="/images/sprite.svg#icon-quote" />
                  </svg>
                </div>
                <div className="mt-[5rem] bg-white md:w-[60%] lg:w-[60%] h-[45rem] md:h-[40rem] lg:h-[33rem] px-[4rem] flex flex-col justify-center items-center space-y-[1.6rem]">
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
                  <p className="w-[100%] text-center">
                    Thanks a bunch, Jaykacademy for putting me through how to source recent works relating to my project
                    topic🤗 I remember informing you that I had to submit chapters 4 & 5 within a short space, you made
                    sure justice was done to my analysis and also created time to proofread and edit the entire work.
                    Thanks for making this process seem easy.
                  </p>
                  <hr className="h-[.1rem] w-[10%] border-0 bg-black/10" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex flex-col items-center">
                <div className="absolute bg-purple rounded-[50%] h-[10rem] w-[10rem] flex justify-center items-center mb-[1.6rem]">
                  <svg className="h-[3.39rem] w-[3.38rem]">
                    <use href="/images/sprite.svg#icon-quote" />
                  </svg>
                </div>
                <div className="mt-[5rem] bg-white md:w-[60%] lg:w-[60%] h-[45rem] md:h-[40rem] lg:h-[33rem] px-[4rem] flex flex-col justify-center items-center space-y-[1.6rem]">
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
                  <p className="w-[100%] text-center">
                    JayKAcademy to the world!!!! You can't imagine the way I felt when my supervisor did not see
                    grammatical errors in my project. I give it to you, your editing is top-notch 👍🏻 I had a "B" in my
                    project work 🤗Thanks once again.
                  </p>
                  <hr className="h-[.1rem] w-[10%] border-0 bg-black/10" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex flex-col items-center">
                <div className="absolute bg-purple rounded-[50%] h-[10rem] w-[10rem] flex justify-center items-center mb-[1.6rem]">
                  <svg className="h-[3.39rem] w-[3.38rem]">
                    <use href="/images/sprite.svg#icon-quote" />
                  </svg>
                </div>
                <div className="mt-[5rem] bg-white md:w-[60%] lg:w-[60%] h-[45rem] md:h-[40rem] lg:h-[33rem] px-[4rem] flex flex-col justify-center items-center space-y-[1.6rem]">
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
                  <p className="w-[100%] text-center">
                    🥳🥳🥳 The topic was approved. I couldn't even believe it. Thanks for helping me recoin my topic.
                  </p>
                  <hr className="h-[.1rem] w-[10%] border-0 bg-black/10" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex flex-col items-center">
                <div className="absolute bg-purple rounded-[50%] h-[10rem] w-[10rem] flex justify-center items-center mb-[1.6rem]">
                  <svg className="h-[3.39rem] w-[3.38rem]">
                    <use href="/images/sprite.svg#icon-quote" />
                  </svg>
                </div>
                <div className="mt-[5rem] bg-white md:w-[60%] lg:w-[60%] h-[45rem] md:h-[40rem] lg:h-[33rem] px-[4rem] flex flex-col justify-center items-center space-y-[1.6rem]">
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
                  <p className="w-[100%] text-center">
                    I am so grateful😭this woman has finally approved my questionnaire. I have been crying since
                    yesterday because I could not find a suitable way to draft the questions I had in mind. Thank you
                    very much JayKAcademy. I am indeed speechless. You don't know what you did for me but my God will
                    bless you. Even if you don't want it, it's too late😁you are indeed a genius like my roomie said.
                  </p>
                  <hr className="h-[.1rem] w-[10%] border-0 bg-black/10" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex flex-col items-center">
                <div className="absolute bg-purple rounded-[50%] h-[10rem] w-[10rem] flex justify-center items-center mb-[1.6rem]">
                  <svg className="h-[3.39rem] w-[3.38rem]">
                    <use href="/images/sprite.svg#icon-quote" />
                  </svg>
                </div>
                <div className="mt-[5rem] bg-white md:w-[60%] lg:w-[60%] h-[45rem] md:h-[40rem] lg:h-[33rem] px-[4rem] flex flex-col justify-center items-center space-y-[1.6rem]">
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
                  <p className="w-[100%] text-center">
                    Jayk Academy came through for me in my project. I was confuse on what to do and how to do it and my
                    supervisor wasn't helping then. But when I reached out to Jayk Academy, I was put through in a more
                    simple way and everything went fine. Thank you so much Jayk Academy, you have really been a great
                    rescue to me. I really appreciate🥰🥰🥰
                  </p>
                  <hr className="h-[.1rem] w-[10%] border-0 bg-black/10" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative flex flex-col items-center">
                <div className="absolute bg-purple rounded-[50%] h-[10rem] w-[10rem] flex justify-center items-center mb-[1.6rem]">
                  <svg className="h-[3.39rem] w-[3.38rem]">
                    <use href="/images/sprite.svg#icon-quote" />
                  </svg>
                </div>
                <div className="mt-[5rem] bg-white md:w-[60%] lg:w-[60%] h-[45rem] md:h-[40rem] lg:h-[33rem] px-[4rem] flex flex-col justify-center items-center space-y-[1.6rem]">
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
                  <p className="w-[100%] text-center">
                    My questionnaire was cancel more than three times and I was on the verge of crying when a friend
                    introduced me to Jayk academy. And in one trail my questionnaire was approved. Thank you so much
                    Jayk Academy. Can't thank you enough😊
                  </p>
                  <hr className="h-[.1rem] w-[10%] border-0 bg-black/10" />
                </div>
              </div>
            </SwiperSlide>
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

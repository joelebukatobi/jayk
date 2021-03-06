import { useRef, useEffect } from 'react';
import Container from '@/components/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Services({ id, className, innerRef }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <section id={id} className={`${className} space-y-[6.4rem] mt-[16rem] pt-[8rem]`} ref={innerRef}>
        <div className="flex flex-col md:flex-row justify-between ">
          <div
            className="space-y-[.8rem] md:w-[55%] mb-[4rem] md:mb-[0]"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <p className="text-purple font-extrabold uppercase">What We Do</p>
            <h4 className="font-extrabold w-[100%]">
              Why JayK? <br />
              Here are some of our services
            </h4>
            <p>
              Our Academy has the best professional researchers who support the client's throughout the writing process.
            </p>
          </div>
          <div className="flex flex-col space-y-[1.6rem] md:w-[30%]">
            <div
              className="w-[100%] flex items-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <svg className="h-[3.2rem] w-[3.2rem] mr-[1.6rem]">
                <use href="/images/sprite.svg#icon-feature" />
              </svg>
              <h6 className="font-bold">Academic Research Consultation </h6>
            </div>
            <div
              className="w-[100%] flex items-center"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <svg className="h-[3.2rem] w-[3.2rem] mr-[1.6rem]">
                <use href="/images/sprite.svg#icon-feature" />
              </svg>
              <h6 className="font-bold">Editing & Proofreading</h6>
            </div>
            <div
              className="w-[100%] flex items-center"
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out"
            >
              <svg className="h-[3.2rem] w-[3.2rem] mr-[1.6rem]">
                <use href="/images/sprite.svg#icon-feature" />
              </svg>
              <h6 className="font-bold">Powerpoint Help</h6>
            </div>
            <div
              className="w-[100%] flex items-center"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out"
            >
              <svg className="h-[3.2rem] w-[3.2rem] mr-[1.6rem]">
                <use href="/images/sprite.svg#icon-feature" />
              </svg>
              <h6 className="font-bold">Data Analysis </h6>
            </div>
            <div
              className="w-[100%] flex items-center"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
              <svg className="h-[3.2rem] w-[3.2rem] mr-[1.6rem]">
                <use href="/images/sprite.svg#icon-feature" />
              </svg>
              <h6 className="font-bold">Academic Research Training </h6>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

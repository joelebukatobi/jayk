import { useRef, useEffect } from 'react';
import Container from '@/components/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About({ id, className, innerRef }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <section
        id={id}
        className={`${className} flex flex-col md:flex-row space-y-[2.4rem] md:space-y-[0rem] items-center justify-between pt-[0rem]`}
        ref={innerRef}
      >
        <div
          className="space-y-[.8rem] w-[100%] md:w-[42.31%]"
          data-aos="fade-up-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <p className="text-purple font-extrabold uppercase">About Us</p>
          <h4 className="font-extrabold w-[70%]">Our job is to ensure you worry less </h4>
          <p>
            Jayk Academy with CAC Reg Number 1931235 is a private research Consultancy firm that specializes in academic
            research writing and has other subsidiaries which help promote vocational and skill acquisition training.
          </p>
        </div>
        <div
          className="w-[100%] md:w-[48.72%]"
          data-aos="fade-up-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img src="/images/about-image.png" alt="" />
        </div>
      </section>
    </Container>
  );
}

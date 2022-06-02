import { useRef } from 'react';
import Container from '@/components/Container';
export default function About({ id, className, innerRef }) {
  return (
    <Container>
      <section
        id={id}
        className={`${className} flex flex-col md:flex-row space-y-[2.4rem] md:space-y-[0rem] items-center justify-between pt-[16rem]`}
        ref={innerRef}
      >
        <div className="space-y-[.8rem] w-[100%] md:w-[42.31%]">
          <p className="text-purple font-extrabold uppercase">About Us</p>
          <h4 className="font-extrabold w-[70%]">Our job is to ensure you worry less </h4>
          <p>
            Jayk Academy with CAC Reg Number 1931235 is a private research Consultancy firm that specializes in academic
            research writing and has other subsidiaries which help promote vocational and skill acquisition training.
          </p>
        </div>
        <div className="w-[100%] md:w-[48.72%]">
          <img src="/images/about-image.png" alt="" />
        </div>
      </section>
    </Container>
  );
}

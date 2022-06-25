import { useEffect } from 'react';
import Container from '@/components/Container';
import Accordion from '@/components/Accordion';
import { accordionData } from 'utils/content';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function FAQs({ id, innerRef }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <section id={id} className="pb-[16rem] pt-[16rem] flex flex-col md:flex-row justify-between" ref={innerRef}>
        <div
          className="space-y-[2.4rem] w-[100%] md:w-[35%] mb-[2.4rem] md:mb-[0rem]"
          data-aos="fade-up-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <h4 className="font-extrabold w-[50%]">Any questions? We got you.</h4>
          <p>
            Over time we have gotten several questions from clients and have compiled some of them to make things easier
            for you.
          </p>
          <p className="flex items-center text-purple font-extrabold">
            More FAQs
            <svg className="h-[1.6rem] w-[1.6rem] ml-[.8rem] rotate-90 md:rotate-0">
              <use href="/images/sprite.svg#icon-arrow" />
            </svg>
          </p>
        </div>
        <div
          className="w-[100%] mt-[4rem] md:mt-[0] md:w-[49.83%] space-y-[2.4rem]"
          data-aos="fade-up-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {accordionData.map(({ title, content }) => (
            <Accordion key={title} title={title} content={content} />
          ))}
        </div>
      </section>
    </Container>
  );
}

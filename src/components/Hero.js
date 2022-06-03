import { useRef } from 'react';
import Container from '@/components/Container';
import Button from '@/elements/Button';

export default function Hero({ id, className, innerRef }) {
  return (
    <Container>
      <section
        id={id}
        className={`${className} flex flex-col items-center justify-center text-center space-y-[2.4rem] pt-[8rem] pb-[16rem] md:pt-[25rem] md:pb-[15rem] mt-[9.6rem]`}
        ref={innerRef}
      >
        <h1 className="font-black w-[100%] md:w-[72.6%] text-[6rem] md:text-[6.7rem] marker:leading-[8.4rem]">
          Writing a <span className="text-orange">Dissertation</span> has never been easier
        </h1>
        <p className="w-[100%] md:w-[45.83%] text-[2.4rem] font-medium">Need help with your essay? 👇🏽</p>
        <Button>Get Started</Button>
      </section>
    </Container>
  );
}

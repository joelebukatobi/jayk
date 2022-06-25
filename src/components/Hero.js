import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/elements/Button';
import Typed from 'typed.js';

export default function Hero({ id, className, innerRef }) {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ['Dissertation^1000', 'Thesis^1000', 'Paper^1000'],
      typeSpeed: 120,
      showCursor: false,
      backSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section
      id={id}
      className={`${className} flex flex-col items-center justify-center text-center md:space-y-[2.4rem] mt-[10vh] md:mb-[16rem] px-[3.2rem] md:px-[0rem] relative h-[80vh] md:h-[50vh] lg:h-[65vh] xl:h-[90vh] w-[100%]`}
      ref={innerRef}
    >
      <div className="absolute hidden md:block z-[-1] top-[0rem] h-[100%] w-[100%] overflow-hidden">
        <img className="w-[100%]" src="/images/hero.svg" alt="" />
      </div>
      <div className="flex flex-col space-y-[2.4rem] items-center w-[100% md:w-[50%]">
        <h1 className="font-black w-[100%] text-[6rem] md:text-[5rem] xl:text-[7rem] marker:leading-[8.4rem]">
          Writing a <span className="text-orange text" ref={typeTarget}></span> has never been easier
        </h1>
        <p className="w-[100%] md:w-[100%] text-[2.4rem] font-medium">Need help with your essay? 👇🏽</p>
        <Link href="/#contact" passHref>
          <Button>Get Started</Button>
        </Link>
      </div>
    </section>
  );
}

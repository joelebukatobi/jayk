import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/elements/Button';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <nav
        className={
          open
            ? `${'h-[100vh] w-full pt-[3.2rem] flex justify-between relative'}`
            : `${'h-[9.6rem]  pt-[3.2rem] md:my-[0rem] w-full flex items-center justify-between'}`
        }
      >
        <Link href="/">
          <svg className="h-[6.4rem] w-[6.4rem]">
            <use href="/images/sprite.svg#logo" />
          </svg>
        </Link>
        <ul
          className={
            open
              ? `${'flex flex-col absolute top-[12.8rem] pl-[0.8rem] w-[100%] left-0 space-x-[0rem] space-y-[2.4rem]'}`
              : `${'space-x-[5.6rem] hidden md:flex'}`
          }
        >
          <Link href="/">
            <li className="text-[1.6rem] font-extrabold hover:text-purple hover:cursor-pointer">Home</li>
          </Link>
          <Link href="/#about">
            <li className="text-[1.6rem] font-extrabold hover:text-purple hover:cursor-pointer">About</li>
          </Link>
          <Link href="/#whatwedo">
            <li className="text-[1.6rem] font-extrabold hover:text-purple hover:cursor-pointer">What We Do</li>
          </Link>
          <Link href="/#reviews">
            <li className="text-[1.6rem] font-extrabold hover:text-purple hover:cursor-pointer">Reviews</li>
          </Link>
          <Link href="/#faqs">
            <li className="text-[1.6rem] font-extrabold hover:text-purple hover:cursor-pointer">FAQs</li>
          </Link>
        </ul>
        <Link href="/#contact">
          <Button className={open ? `${'absolute top-[37rem] ml-[0.8rem]'}` : `${'hidden md:flex'}`}>Contact</Button>
        </Link>
        <div onClick={toggle} className="md:hidden focus:outline-none focus:select-none">
          <svg className="w-[4rem] m:h-[4rem] h-[6.4rem] fill-purple cursor-pointer">
            <use href={open ? `/images/sprite.svg#icon-close` : `/images/sprite.svg#icon-menu`} />
          </svg>
        </div>
      </nav>
    </Container>
  );
}

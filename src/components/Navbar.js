import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/elements/Button';

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Container className={'bg-white max-w-[100vw] mx-auto fixed z-50 flex justify-center'}>
      <nav
        className={
          open
            ? `${'h-[100vh] w-full pt-[3.2rem] flex justify-between relative'}`
            : `${'h-[9.6rem] py-[3.2rem] w-full md:my-[0rem] flex items-center justify-between max-w-[124.8rem]'}`
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
            <li
              className={
                activeSection === 0
                  ? 'text-[1.6rem] font-extrabold hover:text-orange hover:cursor-pointer text-orange'
                  : 'text-[1.6rem] font-extrabold hover:text-orange hover:cursor-pointer '
              }
            >
              Home
            </li>
          </Link>
          <Link href="/#about">
            <li
              className={
                activeSection === 1
                  ? 'text-[1.6rem] font-extrabold hover:text-orange hover:cursor-pointer text-orange'
                  : 'text-[1.6rem] font-extrabold hover:text-orange hover:cursor-pointer '
              }
            >
              About
            </li>
          </Link>
          <Link href="/#whatwedo">
            <li
              className={
                activeSection === 2
                  ? 'text-[1.6rem] font-extrabold hover:text-orange hover:cursor-pointer text-orange'
                  : 'text-[1.6rem] font-extrabold hover:text-orange hover:cursor-pointer '
              }
            >
              What We Do
            </li>
          </Link>
          <Link href="/#reviews">
            <li
              className={
                activeSection === 3
                  ? 'text-[1.6rem] font-extrabold hover:text-orange hover:cursor-pointer text-orange'
                  : 'text-[1.6rem] font-extrabold hover:text-orange hover:cursor-pointer '
              }
            >
              Reviews
            </li>
          </Link>
          <Link href="/#faqs">
            <li
              className={
                activeSection === 4
                  ? 'text-[1.6rem] font-extrabold hover:text-orange hover:cursor-pointer text-orange'
                  : 'text-[1.6rem] font-extrabold hover:text-orange hover:cursor-pointer '
              }
            >
              FAQs
            </li>
          </Link>
        </ul>
        <Link href="/#contact" passHref>
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

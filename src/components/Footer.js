import Link from 'next/link';
import Container from '@/components/Container';

export default function Footer() {
  return (
    <Container>
      <footer className="flex flex-col items-center md:md:flex-row justify-between py-[4rem]">
        <p className="font-bold">© Jayk Academy. All Rights Reserved 2022 </p>
        <p className="font-bold">
          Designed and Developed by
          <Link href={'https://jetdev.vercel.app'}>
            <span className="text-orange"> JetDev </span>
          </Link>
        </p>
      </footer>
    </Container>
  );
}

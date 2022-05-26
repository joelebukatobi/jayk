import Container from '@/components/Container';

export default function Footer() {
  return (
    <Container>
      <footer className="flex flex-col items-center md:md:flex-row justify-between py-[4rem]">
        <p className="font-bold">© Jayk Academy. All Rights Reserved 2022 </p>
        <p className="font-bold">
          Designed and Developed by <span className="text-orange"> JetDev </span>
        </p>
      </footer>
    </Container>
  );
}

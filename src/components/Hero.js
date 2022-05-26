import Container from '@/components/Container';
import Button from '@/elements/Button';

export default function Hero() {
  return (
    <Container>
      <section className=" flex flex-col items-center justify-center text-center space-y-[2.4rem] pt-[12rem] md:pt-[16rem]">
        <h1 className="font-extrabold w-[100%] md:w-[72.6%] leading-[8.4rem]">
          Writing a <span className="text-orange">Dissertation</span> has never been easier
        </h1>
        <p className="w-[100%] md:w-[45.83%] text-[2.4rem] font-medium">Need help with your essay? 👇🏽</p>
        <Button>Get Started</Button>
      </section>
    </Container>
  );
}

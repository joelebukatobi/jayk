import Container from '@/components/Container';
import Button from '@/elements/Button';

export default function Contact({ id }) {
  return (
    <section id={id} className="relative w-[100%] pb-[8rem] md:pb-[0rem]">
      <div className="w-[100%] h-[100%] overflow-hidden hidden md:block">
        <img src="/images/contact-image.png" alt="" className="w-[100vw]" />
      </div>
      <div className="w-[100%] h-[100%] hidden md:block absolute top-0 left-0 bg-purple/50 z-[5]"></div>
      <Container>
        <form
          action=""
          className="w-[100%] p-[3.2rem] md:p-[2.4rem] xl:p-[6.4rem] md:w-[52rem] xl:w-[60.8rem] bg-purple md:absolute md:top-[50%] z-10 rounded-[.8rem] md:translate-y-[-50%] space-y-[1.6rem] md:space-y-[.8rem] lg:space-y-[1.6rem]"
        >
          <header className="space-y-[.8rem]">
            <p className="text-orange font-bold uppercase ">contact us</p>
            <h4 className="font-extrabold text-white">Book a consultation</h4>
          </header>
          <input
            type="text"
            className="rounded-[.4rem] h-[4.8rem] w-full outline-none border-none
               px-[1.6rem] text-[1.6rem]"
            placeholder="Name"
          />
          <input
            type="email"
            className="rounded-[.4rem] h-[4.8rem] w-full outline-none border-none 
               px-[1.6rem] text-[1.6rem]"
            placeholder="Email"
          />
          <textarea
            name=""
            id=""
            className="rounded-[.4rem] w-full h-[17.6rem] outline-none border-none
               px-[1.6rem] py-[1.6rem] text-[1.6rem]"
            placeholder="Message"
          ></textarea>
          <Button className={'bg-orange'}>Send</Button>
        </form>
      </Container>
    </section>
  );
}

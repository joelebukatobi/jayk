import { useState } from 'react';
import Container from '@/components/Container';
import Success from '@/components/Success';
import Button from '@/elements/Button';

export default function Contact({ id }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({
        message: message,
        email: email,
        name: name,
        subject: subject,
      }),
    });

    const data = await res.json();
    console.log(data.status);

    if (data.status === 'Ok') {
      setOpen(true);
    }
  };

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <section id={id} className="relative w-[100%] pb-[8rem] md:pb-[0rem]">
        <div className="w-[100%] h-[100%] overflow-hidden hidden md:block">
          <img src="/images/contact-image.png" alt="" className="w-[100vw]" />
        </div>
        <div className="w-[100%] h-[100%] hidden md:block absolute top-0 left-0 bg-purple/50 z-[5]"></div>
        <Container>
          <form
            action=""
            className="w-[100%] p-[3.2rem] md:p-[2.4rem] xl:p-[6.4rem] md:w-[52rem] xl:w-[60.8rem] bg-purple md:absolute md:top-[50%] z-10 rounded-[.8rem] md:translate-y-[-50%] space-y-[1.6rem] md:space-y-[.8rem] lg:space-y-[1.6rem]"
            onSubmit={handleSubmit}
          >
            <header className="space-y-[.8rem]">
              <p className="text-orange font-bold uppercase ">contact us</p>
              <h4 className="font-extrabold text-white">Book a consultation</h4>
            </header>
            <input
              type="text"
              name="name"
              id="name"
              className="rounded-[.4rem] h-[4.8rem] w-full outline-none border-none
               px-[1.6rem] text-[1.6rem]"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              name="email"
              id="email"
              type="email"
              className="rounded-[.4rem] h-[4.8rem] w-full outline-none border-none 
               px-[1.6rem] text-[1.6rem]"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              name="subject"
              id="subject"
              type="text"
              className="rounded-[.4rem] h-[4.8rem] w-full outline-none border-none 
             px-[1.6rem] text-[1.6rem]"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              name="message"
              id="message "
              className="rounded-[.4rem] w-full h-[17.6rem] md:h-[11.2rem] lg:h-[17.6rem] outline-none border-none
               px-[1.6rem] py-[1.6rem] text-[1.6rem]"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <Button className={'bg-orange'}>Send</Button>
          </form>
        </Container>
      </section>
      <Success toggle={toggle} className={open ? `block` : `hidden`} />
    </>
  );
}

import { useEffect, useState } from 'react';
import Container from '@/components/Container';
import Success from '@/components/Success';
import Button from '@/elements/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Hours() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        email: email,
        name: name,
        subject: subject,
      }),
    });

    const data = await res.json();

    if (data.status === 'Ok') {
      setShow(true);
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <div className="flex flex-col md:flex-row items-centre justify-between pb-[16rem]">
        <div
          className="space-y-[1.6rem] md:w-[35%]"
          data-aos="fade-up-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <h4 className=" font-extrabold">Working Hours</h4>
          <hr className="h-[.1rem] w-[100%] bg-black/5 border-none" />
          <p>
            We're open <em className="font-bold">Mondays to Thursday</em> from <em className="font-bold">8am to 5pm</em>{' '}
            and on <em className="font-bold">Friday's</em> from <em className="font-bold">8am to 4pm.</em> During the
            weekends we are open from <em className="font-bold">10am to 4pm</em> on{' '}
            <em className="font-bold">Saturday</em> and <em className="font-bold">12pm to 4pm</em> on{' '}
            <em className="font-bold">Sunday</em>.
          </p>
        </div>

        <div
          className="space-y-[1.6rem] md:w-[49.83%] mt-[4rem] md:mt-[0]"
          data-aos="fade-up-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h4 className=" font-extrabold">Got Inquiries?</h4>
          <hr className="h-[.1rem] w-[100%] bg-black/5 border-none" />
          <div className="space-y-[.8rem]">
            <p>
              Place a call to <em className="text-orange font-bold">+2348169799459; +36 20 597 8946</em>
            </p>
            <p>or send a mail to jay_academy@yahoo.com</p>
            <p>
              Want to leave a review? Click{' '}
              <em onClick={toggle} className="text-orange font-bold cursor-pointer">
                here
              </em>
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={toggle}
        className={
          open
            ? 'fixed z-[100] flex justify-center items-center bg-black/80 left-0 top-0 h-[100vh] w-[100vw]'
            : 'hidden'
        }
      ></div>

      <form
        className={
          open
            ? 'w-[85%] p-[3.2rem] md:p-[2.4rem] xl:p-[6.4rem] md:w-[52rem] xl:w-[60.8rem] bg-purple  rounded-[.8rem] space-y-[1.6rem] md:space-y-[.8rem] lg:space-y-[1.6rem] flex flex-col items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100]'
            : 'hidden'
        }
        onSubmit={handleSubmit}
      >
        <header className="space-y-[.8rem] text-center">
          <p className="text-orange font-bold uppercase ">contact us</p>
          <h4 className="font-extrabold text-white">Leave a review</h4>
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
        <Button className={'bg-orange w-[50%]'}>Send</Button>
      </form>
      <Success toggle={toggle} className={show ? `block z-[110]` : `hidden`} />
    </Container>
  );
}

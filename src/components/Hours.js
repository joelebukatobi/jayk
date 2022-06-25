import { useEffect } from 'react';
import Container from '@/components/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Hours() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container className={''}>
      <div className="flex flex-col md:flex-row items-centre justify-between pb-[16rem]">
        <div
          className="space-y-[1.6rem] md:w-[35%]"
          data-aos="fade-up-right"
          data-aos-duration="1500"
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
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <h4 className=" font-extrabold">Got Inquiries?</h4>
          <hr className="h-[.1rem] w-[100%] bg-black/5 border-none" />
          <div className="space-y-[.8rem]">
            <p>
              Place a call to <em className="text-orange font-bold">+2348169799459; +36 20 597 8946</em>
            </p>
            <p>or send a mail to jay_academy@yahoo.com</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

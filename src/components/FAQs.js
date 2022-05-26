import Container from '@/components/Container';
import Accordion from '@/components/Accordion';
import { accordionData } from 'utils/content';

export default function FAQs() {
  return (
    <Container>
      <section id="faqs" className="py-[16rem] flex flex-col md:flex-row justify-between">
        <div className="space-y-[2.4rem] w-[100%] md:w-[35%] mb-[2.4rem] md:mb-[0rem]">
          <h4 className="font-extrabold w-[50%]">Any questions? We got you.</h4>
          <p>
            Over time we've gotten a number of questions from our large number of ever growing clientele. We've compile
            some of them so as to make things easier for you.
          </p>
          <p className="flex items-center text-purple font-extrabold">
            More FAQs
            <svg className="h-[1.6rem] w-[1.6rem] ml-[.8rem] rotate-90 md:rotate-0">
              <use href="/images/sprite.svg#icon-arrow" />
            </svg>
          </p>
        </div>
        <div className="w-[100%] md:w-[49.83%] space-y-[2.4rem]">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </section>
    </Container>
  );
}

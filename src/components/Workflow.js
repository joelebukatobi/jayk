import Container from '@/components/Container';

export default function Workflow() {
  return (
    <Container>
      <section className="w-[100%] mx-auto pt-[4rem] flex flex-col items-start space-y-[3.2rem]">
        <div className="header">
          <p className="text-purple font-extrabold uppercase">About Us</p>
          <h4 className="font-extrabold w-[100%]">Our Workflow</h4>
        </div>
        <div className="flex flex-col space-y-[2.4rem] md:space-y-[0rem] md:flex-row justify-between">
          <div className="flex space-x-[1.6rem] w-100%; md:w-[30%]">
            <p className="text-orange font-extrabold">01</p>
            <p className="font-medium">
              Engage our ever-ready team on any number of our multiple academic packages you would like to access
            </p>
          </div>
          <div className="flex space-x-[1.6rem] w-100%; md:w-[30%]">
            <p className="text-orange font-extrabold">02</p>
            <p className="font-medium">
              Outline the requirements of your research work. Then send a direct message to any of the digits stated
              below, so we can fully understand what you need
            </p>
          </div>
          <div className="flex space-x-[1.6rem] w-100%; md:w-[30%]">
            <p className="text-orange font-extrabold">03</p>
            <p className="font-medium">
              Proper actionable timelines as regards completion are provided as well as stage by stage update of the
              particular service being rendered
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
import Container from '@/components/Container';

export default function Workflow() {
  return (
    <Container>
      <section className="w-[100%] mx-auto pt-[15.2rem] flex flex-col items-center space-y-[3.2rem]">
        <div className="header">
          <h4 className="font-bold">Our Workflow</h4>
        </div>
        <div className="flex flex-col space-y-[2.4rem] md:space-y-[0rem] md:flex-row justify-between">
          <div className="flex space-x-[1.6rem] w-100%; md:w-[30%]">
            <p className="text-orange font-extrabold">01</p>
            <p className="font-medium">
              Engage our ever ready team on any number of our multiple academic packages you'd like to access
            </p>
          </div>
          <div className="flex space-x-[1.6rem] w-100%; md:w-[30%]">
            <p className="text-orange font-extrabold">02</p>
            <p className="font-medium">
              Outline the requirements of the academic undertaking in general be it a term paper or presentation. You
              could book a session with any member of our team so we fully understand what you need
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

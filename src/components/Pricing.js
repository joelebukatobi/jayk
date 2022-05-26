import Container from '@/components/Container';

export default function Pricing() {
  return (
    <Container>
      <section className="pb-[16rem] flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="grid grid-flow-row auto-rows-max gap-y-0 grid-cols-2 w-[100%] md:w-[70%]">
          <div className="p-[1.6rem] font-extrabold text-white text-[1.6rem] flex items-center bg-purple">Services</div>
          <div className="p-[1.6rem] font-extrabold text-white text-[1.6rem] flex items-center bg-purple">
            Pricing (₦)
          </div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center">Project Consultation</div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center">5000</div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center bg-black/5">Project Topic</div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center bg-black/5">10,000 (Optional) </div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center">B.Sc Project</div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center">10,000 per Chapter</div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center bg-black/5">Thesis & Dissertation</div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center bg-black/5"> 25,000</div>{' '}
          <div className="p-[1.6rem] text-[1.6rem] flex items-center">
            Analysis and Transcription of In Depth-Interview
          </div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center">50,000 (Optional)</div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center bg-black/5">Questionnaire</div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center bg-black/5"> 25,000 per Chapter</div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center">Analysis of Observation Ethnographic Data</div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center">50,000 (Optional)</div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center bg-black/5">SPSS</div>
          <div className="p-[1.6rem] text-[1.6rem] flex items-center bg-black/5">(Optional)</div>
        </div>
        <div className="space-y-[2.4rem] w-[100%] md:w-[25%] mb-[2.4rem] md:mb-[0rem]">
          <h4 className="font-extrabold w-[100%] md:w-[50%]">Pricing</h4>
          <p>
            We offer quite a number of packages as a company and pricing is more often that not bespoke to each one in
            particular. However we've curated a list of some of most requested stand alone services and their
            corresponding pricing.
          </p>
        </div>
      </section>
    </Container>
  );
}

import Container from '@/components/Container';

export default function Services() {
  return (
    <Container>
      <section id="whatwedo" className="space-y-[6.4rem] py-[16rem]">
        <div className="space-y-[.8rem]">
          <p className="text-purple font-extrabold uppercase">What We Do</p>
          <h4 className="font-extrabold w-[100%] md:w-[50.64%]">Why JayK? Here are some of our services</h4>
          <p className="w-[100%] md:w-[65%]">
            Our Academy has the best professional researchers who support the client's throughout the writing process.
            Also, our clients are assured of a satisfying grade.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-[4.25%]">
          <div className="space-y-[1.6rem] w-[100%] md:w-[20.59%] mb-[4.25%]">
            <svg className="h-[3.2rem] w-[3.2rem]">
              <use href="/images/sprite.svg#icon-feature" />
            </svg>
            <h6 className="font-bold">Academic Research Writing </h6>
            <p>
              From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.
            </p>
          </div>
          <div className="space-y-[1.6rem] w-[100%] md:w-[20.59%] mb-[4.25%]">
            <svg className="h-[3.2rem] w-[3.2rem]">
              <use href="/images/sprite.svg#icon-feature" />
            </svg>
            <h6 className="font-bold">Editing & Proofreading</h6>
            <p>
              From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.
            </p>
          </div>
          <div className="space-y-[1.6rem] w-[100%] md:w-[20.59%] mb-[4.25%]">
            <svg className="h-[3.2rem] w-[3.2rem]">
              <use href="/images/sprite.svg#icon-feature" />
            </svg>
            <h6 className="font-bold">Powerpoint Presentations</h6>
            <p>
              From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.
            </p>
          </div>
          <div className="space-y-[1.6rem] w-[100%] md:w-[20.59%] mb-[4.25%]">
            <svg className="h-[3.2rem] w-[3.2rem]">
              <use href="/images/sprite.svg#icon-feature" />
            </svg>
            <h6 className="font-bold">Data Analysis </h6>
            <p>
              From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.
            </p>
          </div>{' '}
          <div className="space-y-[1.6rem] w-[100%] md:w-[20.59%] mb-[4.25%]">
            <svg className="h-[3.2rem] w-[3.2rem]">
              <use href="/images/sprite.svg#icon-feature" />
            </svg>
            <h6 className="font-bold">Academic Research Training </h6>
            <p>
              From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

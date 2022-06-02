export default function Container({ children, className }) {
  return (
    <section className={`w-[100%] max-w-[124.8rem] mx-auto px-[3.2rem] md:px-[5.6rem] xl:px-[0] ${className} `}>
      {children}
    </section>
  );
}

export default function Container({ children, className }) {
  return (
    <section className={`w-[100%] px-[3.2rem] max-w-[124.8rem] mx-auto xl:px-[0] overflow-x-hidden ${className} `}>
      {children}
    </section>
  );
}

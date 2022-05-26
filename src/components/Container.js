export default function Container({ children, className }) {
  return (
    <section className={`${className} w-[100%] max-w-[124.8rem] mx-auto px-[3.2rem] lg:px-[0rem] `}>{children}</section>
  );
}

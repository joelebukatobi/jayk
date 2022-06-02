export default function Button({ children, className }) {
  return (
    <button
      className={`${className} h-[4.8rem] bg-purple py-[1.4rem] px-[3.2rem] text-[1.6rem] text-white font-bold rounded-[.4rem]`}
    >
      {children}
    </button>
  );
}

import React from 'react';
const Button = React.forwardRef(({ children, className, onClick }, ref) => {
  return (
    <button
      onClick={onClick}
      ref={ref}
      className={`${className} h-[4.8rem] bg-purple py-[1.4rem] hover:bg-orange px-[3.2rem] text-[1.6rem] text-white font-bold rounded-[.4rem]`}
    >
      {children}
    </button>
  );
});

export default Button;

import React, { useState } from 'react';

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="space-y-[1.6rem] border-b-[.1rem] border-black/10 pb-[1.6rem] cursor-pointer">
        <header className="flex items-center justify-between" onClick={() => setIsActive(!isActive)}>
          <h6 className="font-extrabold">{title}</h6>
          <svg className="h-[1.6rem] w-[1.6rem] cursor-pointer">
            <use href={`/images/sprite.svg#${isActive ? 'icon-minus' : 'icon-plus'}`} />
          </svg>
        </header>
        {isActive && <p>{content}</p>}
      </div>
    </div>
  );
}

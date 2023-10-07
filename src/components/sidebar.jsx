import { useState } from "react";

export default function Sidebar(props) {
  const [toggle, settoggle] = useState(false);

  return (
    <aside className="sticky top-20 h-screen border-r-2 p-4 flex">
      <div
        className={
          !toggle ? " hidden md:w-[15rem] md:block" : "w-[15rem] md:hidden"
        }
      >
        <p className="font-semibold text-center text-lg">
          {props.title} Contents
        </p>
        <div className="pb-20 h-[95%] overflow-scroll">{props.children}</div>
      </div>
      <div>
        <p
          onClick={() => settoggle(!toggle)}
          className="cursor-pointer font-extrabold text-xl"
        >
          &#8624;
        </p>
      </div>
    </aside>
  );
}

import { useState } from "react";

export default function Sidebar(props) {
  const [toggle, settoggle] = useState(false);

  return (
    <aside className="sticky top-20 h-screen border-r-2 p-4 flex">
      <div
        className={
          !toggle ? " hidden md:w-[14rem] md:block" : "w-[10rem] md:hidden"
        }
      >
        <p className="font-semibold text-center text-lg underline">
          {props.title} Contents
        </p>
        <div className="pb-20 h-[95%] overflow-scroll">{props.children}</div>
      </div>
      <div>
        <p
          onClick={() => settoggle(!toggle)}
          className={
            toggle
              ? "cursor-pointer font-extrabold text-3xl rotate-45 md:rotate-0"
              : "cursor-pointer font-extrabold text-3xl md:rotate-45 "
          }
        >
          +
        </p>
      </div>
    </aside>
  );
}

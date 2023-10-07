import { useState } from "react";

export default function Sidebar(props) {
  const [toggle, settoggle] = useState(false);

  return (
    <aside className="sticky w-fit top-20 h-screen border-r-2 p-4 flex">
      <div className={toggle ? " hidden" : "w-[15rem]"}>
        <p className="font-semibold text-center text-lg">
          {props.title} Contents
        </p>
        {props.children}
      </div>
      <div>
        <p onClick={() => settoggle(!toggle)}>&#8624;</p>
      </div>
    </aside>
  );
}

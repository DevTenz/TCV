import Html from "../assets/html.png";
import Css from "../assets/css3.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col h-[33rem] md:h-[35rem] lg:h-[37rem] justify-center items-center">
        <p className="text-5xl md:text-6xl lg:text-8xl font-bold text-center">
          The CheatSheet Vault
        </p>
        <p className="md:text-lg lg:text-2xl px-1 text-center opacity-60">
          A safe vault of cheatsheets for every programming languages known.
        </p>
        <div className="text-center p-2">
          <p className="text-xl md:text-2xl lg:text-3xl opacity-75">
            Get Your CheatSheet for
          </p>
          <div className=" h-[29px] md:h-[42px] bg-slate-400 overflow-hidden text-2xl md:text-3xl lg:text-4xl font-semibold ">
            <p className="first:animate-show">Javascript</p>
            <p>React</p>
            <p>Css</p>
          </div>
          <p className="text-xl  md:text-2xl lg:text-3xl  opacity-75">here.</p>
        </div>
        <button className="p-4 text-white font-semibold text-xl bg-[#0F2C59] w-5/6 md:w-4/6 lg:w-3/6 rounded-md ">
          Lets Learn
        </button>
      </section>
      <p className="text-2xl font-medium text-white text-center p-2 bg-[#0F2C59]">
        Languages
      </p>
      <section>
        <div className="grid grid-cols-4 lg:grid-cols-8 lg:gap-6 px-4 py-6 justify-items-center gap-4">
          <Link to="/html">
            <img
              className="h-20 w-18 grayscale hover:grayscale-0"
              src={Html}
              alt="html logo"
              loading="lazy"
            />
          </Link>
          <img
            className="h-20 w-20 grayscale hover:grayscale-0"
            src={Css}
            alt="css logo"
            loading="lazy"
          />
          <img className="h-20 w-18" src={Html} alt="html logo" />
          <img className="h-20 w-20" src={Css} alt="css logo" />
          <img className="h-20 w-18" src={Html} alt="html logo" />
          <img className="h-20 w-20" src={Css} alt="css logo" />
          <img className="h-20 w-18" src={Html} alt="html logo" />
          <img className="h-20 w-20" src={Css} alt="css logo" />
          <img className="h-20 w-18" src={Html} alt="html logo" />
          <img className="h-20 w-20" src={Css} alt="css logo" />
          <img className="h-20 w-18" src={Html} alt="html logo" />
          <img className="h-20 w-20" src={Css} alt="css logo" />
        </div>
      </section>
    </div>
  );
}

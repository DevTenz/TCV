import Loading from "../assets/Loading.gif";

export default function Loadinggif() {
  return (
    <div className="absolute h-screen w-screen flex justify-center items-center z-50 bg-white">
      <div>
        <img
          className="h-[50px]"
          src={Loading}
          alt="loading gif"
          height="50"
          width="50"
        />
        <p className="font-bold">Loading...</p>
      </div>
    </div>
  );
}

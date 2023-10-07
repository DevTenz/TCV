export default function TopBtn() {
  function Top() {
    window.scrollTo(0, 0);
  }

  return (
    <div
      className="fixed h-12 justify-center cursor-pointer flex items-center w-12 font-extrabold text-2xl md:right-16 right-6 md:bottom-10 bottom-4 bg-slate-400 p-4 rounded-xl"
      onClick={Top}
    >
      <p>&#8593;</p>
    </div>
  );
}

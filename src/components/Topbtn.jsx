export default function TopBtn() {
  function Top() {
    window.scrollTo(0, 0);
  }

  return (
    <div
      className="fixed h-12 justify-center cursor-pointer flex items-center w-12 text-2xl right-16 bottom-10 bg-slate-400 p-4 rounded-xl"
      onClick={Top}
    >
      <p>&#8593;</p>
    </div>
  );
}

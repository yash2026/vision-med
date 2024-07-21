export default function Navbar() {
  return (
    <header className="h-16  flex justify-center items-center fixed top-0 left-0 right-0 z-50">
      <div className="w-[97%] h-full bg-slate-50 shadow-md rounded-b-3xl">
        <div className="flex items-center justify-between px-4 h-full">
          <div className="">Logo</div>
          <div className="">List</div>
          <div className="flex items-center justify-between gap-4 ">
            <button className="px-4 py-2 bg-blue-200 rounded">Call Us</button>
            <button className="px-4 py-2 bg-blue-200 rounded">Whats App</button>
          </div>
        </div>
      </div>
    </header>
  );
}

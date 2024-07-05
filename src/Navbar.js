function Navbar() {
  return (
    <div className="Navbar absolute z-30 w-full top-44 left-0 h-5/6 ">
      <div className="NavGradiant w-auto  flex  justify-around  relative  opacity-100 border-y-2  ">
        {/* <a href='#' className=" p-1 text-black font-bold text-2xl hover:text-3xl ">X</a> */}
        <a href='#' className=" p-1 pl-2 pr-2  text-center hover:text-black font-bold text-2xl hover:font-extrabold text-white hover:bg-white ">Home</a>
        <a href='#' className=" p-1 pl-2 pr-2  text-center hover:text-black font-bold text-2xl hover:font-extrabold text-white hover:bg-white ">My Projects</a>
        <a href='#' className=" p-1 pl-2 pr-2  text-center hover:text-black font-bold text-2xl hover:font-extrabold text-white hover:bg-white ">My Career</a>
        <a href='#' className=" p-1 pl-2 pr-2  text-center hover:text-black font-bold text-2xl hover:font-extrabold text-white hover:bg-white ">My Blogs</a>
        <a href='#' className=" p-1 pl-2 pr-2  text-center hover:text-black font-bold text-2xl hover:font-extrabold text-white hover:bg-white ">Contact Me</a>

      </div>
    </div>
   
  );
}

export default Navbar;

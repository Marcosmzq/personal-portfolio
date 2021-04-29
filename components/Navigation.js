import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <nav className="w-full">
        <ul className="flex justify-around items-center">
          <li className="font-bold font-cursive text-white text-xl transform hover:scale-125">
            <Link href="/">
              <a className="">Home</a>
            </Link>
          </li>
          <span className="select-none text-white">/</span>
          <li className="font-bold font-cursive text-white text-xl transform hover:scale-125">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <span className="select-none text-white">/</span>
          <li className="font-bold font-cursive text-white text-xl transform hover:scale-125">
            <Link href="/projects">
              <a>Proyects</a>
            </Link>
          </li>
          <span className="select-none text-white">/</span>
          <li className="font-bold font-cursive text-white text-xl transform hover:scale-125">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{``}</style>
    </>
  );

  /* <nav className="w-screen border bg-whiteFade fixed z-10">
      <div className="p-6 flex items-center justify-between flex-wrap">
        <h1 className="font-poppins font-bold text-2xl text-rose">
          <Link href="/">
            <a>Marcos</a>
          </Link>
        </h1>
        <div class="block">
          <button
            onClick={handleActiveNavBar}
            className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white focus:outline-none"
          >
            <svg
              class="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      {activeNavBar ? (
       
      ) : (
        ""
      )} 
    </nav>*/
};

export default Navigation;

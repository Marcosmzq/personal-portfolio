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
};

export default Navigation;

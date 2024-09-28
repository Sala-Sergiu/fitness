import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-black p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <a
          href="#"
          className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 cursor-pointer"
        >
          Portfolio
        </a>

        <div className="lg:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="lg:flex flex-col lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl">
          <Link
            href="#about"
            className="text-white  px-4 py-2 hover:text-orange-600 "
          >
            Despre
          </Link>
          <a
            href="#services"
            className="text-white  px-4 py-2  hover:text-orange-600"
          >
            Servicii
          </a>
          <Link
            href="#gallery"
            className="text-white  px-4 py-2  hover:text-orange-600"
          >
            Galerie
          </Link>
          <Link
            href="#contact"
            className="text-white  px-4 py-2  hover:text-orange-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

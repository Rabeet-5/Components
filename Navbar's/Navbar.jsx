"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import './style.css'

const Navbar = () => {

  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen,);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const openClass = "top-0 h-full right-0  flex justify-center items-center";
  const closedClass = "right-full h-full top-0 flex justify-center items-center";
  
  const navLinksClass = `nav-links duration-500 md:static absolute bg-white md:min-h-full h-full -right-full top-0 ${
    menuOpen ? openClass : closedClass 
  } md:w-auto w-full flex flex-col items-center px-5`;

  return (
    <>
    <div className={menuOpen ? 'overlay' : ''}>
      <header className="bg-white px-5 my-4 ">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
          <div>
            <Image
              width={80}
              height={80}
              src={"/webAssets/images/home/header logo.png"}
              alt=""
            />
          </div>
          <div className={navLinksClass}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] md:w-full md:h-full gap-8">
              <button onClick={onToggleMenu}>
                <svg
                  className="h-8 w-8 text-slate-600 lg:hidden md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <li className="">
                <Link
                  href="/home"
                  className={`hover:text-green cursor-pointer ${
                    path === "/home/" ? "text-green" : "text-slate-600"
                  }`}
                >
                  HOME
                </Link>
              </li>
              <li className="">
                <Link
                  href="/about"
                  className={`hover:text-green cursor-pointer ${
                    path === "/about/" ? "text-green" : "text-slate-600"
                  }`}
                >
                  ABOUT
                </Link>
              </li>
              <li className="">
                <Link
                  href="#"
                  className={`hover:text-green cursor-pointer ${
                    path === "" ? "text-green" : "text-slate-600"
                  }`}
                >
                  SERVICES
                </Link>
              </li>
              <li className="">
                <Link
                  href="#"
                  className={`hover:text-green cursor-pointer ${
                    path === "" ? "text-green" : "text-slate-600"
                  }`}
                >
                  DRIVER
                </Link>
              </li>
              <li className="">
                <Link
                  href="#"
                  className={`hover:text-green cursor-pointer ${
                    path === "" ? "text-green" : "text-slate-600"
                  }`}
                >
                  USER
                </Link>
              </li>
              <li className="">
                <Link
                  href="#"
                  className={`hover:text-green cursor-pointer ${
                    path === "" ? "text-green" : "text-slate-600"
                  }`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-3 mt-4 md:mt-0">
              <Link
                href="/booking"
                className="bg-green py-2 px-4 rounded-md font-semibold text-sm "
              >
                <button>BOOK NOW</button>
              </Link>
              <Link
                href="/auth/register/user"
                className="bg-green py-2 px-4 rounded-md font-semibold text-sm "
              >
                <button>BECOME A DRIVER</button>
              </Link>
            </div>
            <button onClick={onToggleMenu}>
              <svg
                className="h-10 w-10 text-slate-600  md:hidden"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      </div>

     
    </>
    
  );
};

export default Navbar;

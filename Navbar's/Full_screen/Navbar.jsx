"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const [menuIcon, setMenuIcon] = useState(false);
  const handleSmScreen = () => {
    setMenuIcon(!menuIcon);
  };
  if (menuIcon) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <header className="bg-white text-2xl w-full ease-in duration-300  ">
        <nav className="max-w-[1366px] mx-auto h-24 flex justify-between items-center p-4">
          <div onClick={handleSmScreen}>
            <Link href="/">
              <Image
                width={80}
                height={80}
                src={"/webAssets/images/home/header logo.png"}
                alt=""
              />
            </Link>
          </div>

          {/* //Larger Screen  */}
          <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800 gap-8">
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

          <div className="hidden md:flex items-center gap-6">
            <div className="flex space-x-3">
              <Link
                href="/booking"
                className="bg-green py-3 px-4 rounded-md font-semibold text-sm "
              >
                <button>BOOK NOW</button>
              </Link>
              <Link
                href="/auth/register/user"
                className="bg-green py-3 px-4 rounded-md font-semibold text-sm "
              >
                <button>BECOME A DRIVER</button>
              </Link>
            </div>
          </div>

          {/* small screen icons  */}
          <div className="md:hidden flex" onClick={handleSmScreen}>
            {menuIcon ? (
              <AiOutlineClose size={30} className="text-black" />
            ) : (
              <AiOutlineMenu size={30} className="text-black" />
            )}
          </div>

          {/* small screen navbar content */}
          <div
            className={
              menuIcon
                ? "md:hidden absolute top-[90px] right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center ease-in duration-300"
                : "md:hidden absolute top-[90px] right-0 left-[-100%]  flex justify-center items-center w-full h-screen  text-black text-center ease-in duration-300"
            }
          >
            <div className="w-full -mt-10">
              <ul className="upppercase text-md font-bold">
                <li
                  onClick={handleSmScreen}
                  className="py-4  cursor-pointer"
                >
                  <Link
                    href="/home"
                    className={`hover:text-green cursor-pointer text-md ${
                      path === "/home/" ? "text-green" : "text-slate-600"
                    }`}
                  >
                    HOME
                  </Link>
                </li>
                <li
                  onClick={handleSmScreen}
                  className="py-4  cursor-pointer"
                >
                  <Link
                    href="/about"
                    className={`hover:text-green cursor-pointer ${
                      path === "/about/" ? "text-green" : "text-slate-600"
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li
                  onClick={handleSmScreen}
                  className="py-4  cursor-pointer"
                >
                  <Link
                    href="#"
                    className={`hover:text-green cursor-pointer ${
                      path === "/services/" ? "text-green" : "text-slate-600"
                    }`}
                  >
                    Services
                  </Link>
                </li>
                <li
                  onClick={handleSmScreen}
                  className="py-4  cursor-pointer"
                >
                  <Link
                    href="/driver"
                    className={`hover:text-green cursor-pointer ${
                      path === "/driver/" ? "text-green" : "text-slate-600"
                    }`}
                  >
                    Driver
                  </Link>
                </li>
                <li
                  onClick={handleSmScreen}
                  className="py-4  cursor-pointer"
                >
                  <Link
                    href="/user"
                    className={`hover:text-green cursor-pointer ${
                      path === "/user/" ? "text-green" : "text-slate-600"
                    }`}
                  >
                    User
                  </Link>
                </li>
                <li
                  onClick={handleSmScreen}
                  className="py-4  cursor-pointer"
                >
                  <Link
                    href="/contact"
                    className={`hover:text-green cursor-pointer ${
                      path === "/contact/" ? "text-green" : "text-slate-600"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
             
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

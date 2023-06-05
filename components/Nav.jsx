"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Nav = () => {
  const pathname = usePathname();

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop Navigation */}
      <header className="w-full border-b-2 border-neutral-50 select-none z-10 backdrop-blur-[3px] fixed max-lg:hidden h-[80px] bg-gray-900/50 flex justify-between items-center">
        <Link className="w-[400px] mx-3 rounded-full" href="/">
          <Image
            src="/assets/images/logo.PNG"
            className="rounded-full"
            width={400}
            height={30}
          />
        </Link>

        <nav className="mx-4 w-full flex justify-center text-3xl font-think">
          <Link
            className={`mx-4 duration-300 ease-in-out ${
              pathname == "/" ? "text-cyan-500" : ""
            } hover:text-cyan-500`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`mx-4 duration-300 ease-in-out ${
              pathname == "/about" ? "text-cyan-500" : ""
            } hover:text-cyan-500`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`mx-4 duration-300 ease-in-out ${
              pathname == "/project" ? "text-cyan-500" : ""
            } hover:text-cyan-500`}
            href="/project"
          >
            Projects
          </Link>
          <Link
            className={`mx-4 duration-300 ease-in-out ${
              pathname == "/contact" ? "text-cyan-500" : ""
            } hover:text-cyan-500`}
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Mobile  Navigation*/}
      <header className="w-full select-none border-b-2 border-neutral-50 z-10 backdrop-blur-[3px] fixed flex justify-center flex-col bg-gray-900/50 lg:hidden">
        <div className="w-full h-[65px] flex justify-between items-center">
          <Link className="w-[150px] mx-3 rounded-full" href="/">
            <Image
              src="/assets/images/logo.PNG"
              className="rounded-full"
              width={150}
              height={50}
            />
          </Link>
          <div
            className={`p-2 text-2xl mx-4 border ${
              toggle ? "border-cyan-500" : "border-transparent"
            } rounded-xl duration-300 ease-in-out cursor-pointer hover:border-cyan-500`}
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          >
            {toggle ? <HiOutlineX /> : <HiMenu />}
          </div>
        </div>
        {toggle ? (
          <nav className="pb-2 flex flex-col w-full flex-center items-center text-2xl">
            <Link
              className={`my-2 duration-300 ease-in-out ${
                pathname == "/" ? "text-cyan-500" : ""
              } hover:text-cyan-500`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`my-2 duration-300 ease-in-out ${
                pathname == "/about" ? "text-cyan-500" : ""
              } hover:text-cyan-500`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`my-2 duration-300 ease-in-out ${
                pathname == "/project" ? "text-cyan-500" : ""
              } hover:text-cyan-500`}
              href="/project"
            >
              Projects
            </Link>
            <Link
              className={`my-2 duration-300 ease-in-out ${
                pathname == "/contact" ? "text-cyan-500" : ""
              } hover:text-cyan-500`}
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        ) : (
          <></>
        )}
      </header>
    </>
  );
};

export default Nav;

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { RxPencil2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import { IoChatboxSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const pathName = usePathname();

  return pathName.startsWith("/pro") ? (
    <div className="border-b bg-[#F5F5F5]">
      <nav className="navbar container mx-auto lg:px-12 ">
        <div className="flex-1 flex items-center lg:gap-10 md:gap-4">
          <Image
            src={"/images/Freelancer-Hub.png"}
            width={120}
            height={120}
            alt="logo"
            loading="lazy"
          />
          <div className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search Jobs"
              className="px-3 py-1.5 rounded-l-md focus:outline-none border focus:border-blue-500 flex-1"
            />
            <button className=" w-10 border py-2.5 flex justify-center rounded-r-md hover:text-blue-500 duration-200">
              <IoSearch className="" />
            </button>
          </div>
        </div>
        <div className="flex-none">
          <ul className="flex items-center gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="bg-white pl-2 py-1 rounded-md flex items-center gap-1"
              >
                <IoNotifications />
                <IoIosArrowDown className="scale-50" />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 min-w-60"
              >
                <div className="font-semibold border-b py-1">Notification</div>
                <div className="min-h-56 max-h-80">
                  <p className="text-center pt-6">
                    There are no alerts to display.
                  </p>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="bg-white pl-2 py-1 rounded-md flex items-center gap-1"
              >
                <IoChatboxSharp />
                <IoIosArrowDown className="scale-50" />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-72"
              >
                <div className="font-semibold border-b py-1">Messages</div>
                <div className="min-h-56 max-h-80">
                  <p className="text-center pt-6">
                    There are no alerts to display.
                  </p>
                </div>
                <div className=" border-t flex justify-center items-center">
                  <Link
                    href={"#"}
                    className="text-blue-500 hover:underline text-xs pt-1.5"
                  >
                    View All Message
                  </Link>
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-1 hover:scale-105 duration-200"
              >
                <Image
                  src={"https://placehold.co/100x100.png"}
                  className="rounded-md"
                  alt="default"
                  width={30}
                  height={30}
                />
                <IoIosArrowDown className="scale-50" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52"
              >
                <li>
                  <Link href={"/pro/profileBuild/editAboutInfo"}>Edit Profile</Link>
                </li>
                <li>
                  <Link href={"#"}>Manage Cash Account</Link>
                </li>
                <div className="py-1" />
                <li>
                  <Link href={"#"}>Help</Link>
                </li>
                <li>
                  <Link href={"#"}>Logout</Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  ) : (
    <>
      <div className="border-b hidden lg:block sticky top-0 bg-white backdrop-blur-md bg-opacity-30 z-10">
        <nav className="navbar container mx-auto lg:px-12 ">
          <div className="flex-1 flex items-center lg:gap-10 md:gap-4">
            <Link href={"/"}>
              <Image
                src={"/images/Freelancer-Hub.png"}
                width={120}
                height={120}
                alt="logo"
                loading="lazy"
              />
            </Link>
          </div>
          <div
            className={`flex-none ${
              pathName === "/login" || pathName.startsWith("/register")
                ? "hidden"
                : ""
            }`}
          >
            <ul className="flex items-center gap-5">
              <li>
                <Link
                  href={"/register"}
                  className="px-5 py-2 rounded-3xl bg-[#4FBFA3] text-white font-semibold flex items-center gap-1"
                >
                  <span>
                    <RxPencil2 />
                  </span>
                  <span>Sign Up</span>
                </Link>
              </li>
              <Link
                href={"/login"}
                className="font-semibold hover:text-[#4FBFA3] duration-200 text-lg flex items-center gap-1"
              >
                <span>
                  <IoIosLogIn />
                </span>
                <span>Sign In</span>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
      <nav className="navbar lg:hidden container mx-auto px-3 bg-white bg-opacity-65 z-10 backdrop-blur-md sticky top-0">
        <div
          className={`navbar-start ${
            pathName === "/login" || pathName.startsWith("/register")
              ? "hidden"
              : ""
          }`}
        >
          <button className="" onClick={() => setShowSidebar(!showSidebar)}>
            <GiHamburgerMenu className="scale-150" />
          </button>
        </div>
        <div className="navbar-center">
          <Link href={"/"}>
            <Image
              src={"/images/Freelancer-Hub.png"}
              width={120}
              height={120}
              alt="logo"
              loading="lazy"
            />
          </Link>
        </div>
        <div
          className={`navbar-end ${
            pathName === "/login" || pathName.startsWith("/register")
              ? "hidden"
              : ""
          }`}
        >
          <Link
            href={"/register"}
            className="px-3 py-2 rounded-3xl bg-[#4FBFA3] text-white font-semibold text-sm flex items-center gap-1"
          >
            <span>
              <RxPencil2 />
            </span>
            <span>Sign Up</span>
          </Link>
        </div>
      </nav>
      <aside
        className={`top-0 left-0 w-[80vw] sm:w-[50vw] md:w-[30vw] py-2 bg-[#F7F7F7] fixed h-full lg:hidden ease-in-out duration-300 z-10 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex max-h-screen flex-col">
          <div className="flex justify-between py-[11px] px-5 border-b flex-none shadow-md">
            <div>
              <Image
                src={"/images/Freelancer-Hub.png"}
                width={120}
                height={120}
                alt="logo"
                loading="lazy"
              />
            </div>
            <button
              className="hover:scale-105 duration-200"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <IoCloseSharp className="scale-[2]" />
            </button>
          </div>
          <ul className="text-sm font-semibold overflow-y-auto flex-1">
            <li>
              <Link
                href={"/register"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                href={"/login"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

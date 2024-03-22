"use client";

import { usePathname } from "next/navigation";
import { IoMail, IoLogoFacebook, IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  const pathName = usePathname();

  return pathName === "/login" || pathName.startsWith("/register") ? null : (
    <footer className="bg-[#094063] p-10 text-white bottom-0">
      <div className="text-center">
        Email: Support@freelancerhub.org
      </div>
      <div className="text-2xl flex justify-center items-center gap-2 pb-4 pt-4">
        <IoLogoFacebook className="hover:scale-105 duration-200" />
        <IoLogoLinkedin className="hover:scale-105 duration-200" />
      </div>
      <div className="border-b w-full h-1" />
      <div className="text-center text-sm pt-4">
        Copyright &copy; 2024 freelancerhub.org
      </div>
    </footer>
  );
}

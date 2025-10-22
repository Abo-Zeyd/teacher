"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { Button } from "@/components/ui/Button";
import { IoSettingsOutline, IoHomeOutline, IoDocumentTextOutline, IoDocumentsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { AiTwotoneEdit } from "react-icons/ai";
import Image from "next/image";

function NaveBarGen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  // إزالة التكرارات باستخدام Set
  const navItems = [
    { name: "الرئيسية", href: "/", icon: <IoHomeOutline size={25}  className="relative -top-1"/> },
    { name: "التوزيعات", href: "/pages/monthlyDistrubtion", icon: <IoDocumentTextOutline size={25}  className="relative -top-1" /> },
    { name: "التحضير", href: "/pages/lessonPreparation", icon: <AiTwotoneEdit size={25}  className="relative -top-1"/> },
    { name: "المعلقات", href: "/pages/pendants", icon: <IoDocumentsOutline size={25}  className="relative -top-1"/> },
  ];
  function showDashboard() {
    // هنا يمكنك إضافة منطق لإظهار لوحة التحكم
    router.push("/dashboard");
  }
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <header className=" w-full mb-1 bg-background dark:bg-gray-900 border-b border-accent dark:border-gray-800  rounded-b-xl">
        <nav className="px-5 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2  p-1 scale-150"
          >
            {/* <h2 className="text-black dark:text-white font-bold text-2xl">
              المعلم
            </h2> */}
            <Image
              src="/images/school.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            {/* <span className="text-black dark:text-white font-bold text-lg">المعلم</span> */}
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex  font-bold text-black/60 dark:text-white">
            {navItems.map((item) => (
              <li
                key={item.href}
                className=" hover:underline hover:underline-offset-4 ml-3 transition"
              >
                <Link href={item.href} className="flex flex-row items-end gap-1 py-3">{item.icon}{item.name}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex ">
            <button className="px-2 py-2 text-black dark:text-white font-semibold">
              <HiOutlineLogin size={30} className="ml-1"/>
            </button>
            <button className="flex flex-row items-center px-2 py-2 text-black dark:text-white font-semibold">
             <FaRegUser size={30} className="ml-1"/> 
            </button>
            <button
              onClick={showDashboard}
              className="px-2 py-2 text-black dark:text-white font-semibold"
            >
              {/* <IoSettingsOutline size={30}/> */}
            </button>
            {/* <Button handleChange={() => {}}>دخول</Button> */}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-800 dark:text-white focus:outline-none text-2xl"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-5 pb-4">
            <ul className="flex flex-col space-y-3 text-black/70 dark:text-white font-bold">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className="hover:underline hover:underline-offset-4"
                >
                  <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-full mt-4 h-px bg-slate-500"></div>
            <div className="mt-1 flex flex-col space-y-2 w-fit">
              <button
                onClick={showDashboard}
                className="text-right text-black dark:text-white font-semibold py-2"
              >
                <IoSettingsOutline size={30}/>
              </button>
              <button className="text-right text-black dark:text-white font-semibold py-2">
               <HiOutlineLogin size={30} className="ml-1"/>
              </button>
              <button className="text-right text-black dark:text-white font-semibold py-2">
                <FaRegUser size={30} className="ml-1"/> 
              </button>
              {/* <Button handleChange={() => {}}>دخول</Button> */}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default NaveBarGen;

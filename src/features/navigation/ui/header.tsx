import React from "react";
import { links } from "../model/header-links";
import Image from "next/image";
import SparkLogo from "../../../../public/assets/hero-section/spark_logo.svg";

export const Header = () => {
  return (
    <header className="w-screen px-[2vw] py-[1vh] max-w-[1920px] mx-auto mt-[1vw] fixed bg-inherit z-50">
      <nav className="flex items-center justify-between">
        <div className="w-[8vw] min-w-[80px]">
          <Image src={SparkLogo} alt="Spark-logo" className="w-full h-auto" />
        </div>

        {links.map((link, index) => (
          <a
            href={link.href}
            key={index}
            className="cursor-pointer text-[1.2vw] min-text-[16px] hover:text-gray-500 transition-all duration-300"
          >
            {link.name}
          </a>
        ))}
        <a
          className="cursor-pointer text-[1.2vw] min-text-[16px] hover:text-custom-orange transition-all duration-300"
          href=""
        >
          Получить консультацию
        </a>
      </nav>
    </header>
  );
};

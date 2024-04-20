"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FbIcon } from "../svgs/FbIcon";
import { InIcon } from "../svgs/InIcon";
import { IgIcon } from "../svgs/IgIcon";

import { usePathname } from "next/navigation";

export const Navbar = ({ small, autocomplete, showBack }) => {
  const pathname = usePathname();

  const paths = [
    { name: "Artes curativas", path: "/" },
    { name: "Testimonios", path: "/testimonios" },
    { name: "Maestro manccini", path: "/maestro-manccini" },
    { name: "Casa espiritual", path: "/casa-espiritual" },
    { name: "Contacto", path: "/contacto" },

    // { name: "Blog", path: "/blog" },
  ];

  const socialMedia = [
    {
      title: "Instagram TeKer",
      iconUrl: "/assets/svgs/igIcon.svg",
      url: "https://www.instagram.com/mundoespiritualusa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      content: (
        <IgIcon
          className={` aspect-square w-6 ${
            small ? " fill-[#00323E] " : " fill-white"
          }`}
        />
      ),
    },
    {
      title: "Facebook TeKer",
      iconUrl: "/assets/svgs/fbIcon.svg",
      url: "https://www.facebook.com/MundoEspiritualCA?mibextid=LQQJ4d",
      content: (
        <FbIcon
          className={` aspect-square w-6 ${
            small ? " fill-[#00323E] " : " fill-white"
          }`}
        />
      ),
    },
  ];

  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [scrolled, SetScrolled] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const standard = (
    <div className={` w-full   bg-[#11181F] `}>
      <nav className={`max-w-7xl w-full  mx-auto  ${scrolled && " "}`}>
        <div
          className={`w-full lg:flex   items-end justify-between mx-auto  px-4  ${
            scrolled && " "
          }`}
        >
          <div className="flex items-center justify-between py-3 ">
            {/* START logo */}
            <Link
              href="/"
              title="Inicio"
              className=" inline-flex items-center space-x-2"
            >
              <div className="relative w-20 md:w-32 ">
                <Image
                  src={"/assets/logo.png"}
                  width="0"
                  height="0"
                  sizes="100%"
                  title={"Teker Logo"}
                  alt="TeKer Logo"
                  className="w-full h-auto"
                />
              </div>
            </Link>
            {/* END logo */}

            {/* START hamburger */}
            <div className="lg:hidden">
              <button
                className="p-2  rounded-lg outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-Default/Base/Default"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-Default/Base/Default"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* END hamburger */}
          </div>

          {/* START paths */}
          <div
            className={`flex-1 justify-self-center lg:block pb-3 lg:pb-0 lg:mt-0 mt-2 sm:mt-4 md:mt-8 p-2 lg:p-0 ${
              navbar ? "block " : "hidden"
            } rounded-2xl md:rounded-3xl`}
          >

<div className=" w-full flex gap-2 justify-end px-4">
        {socialMedia.map((elm, index) => (
          <Link key={index} title={elm.title} href={elm.url} target="_blank">
            {elm.content}
          </Link>
        ))}
      </div>
            <ul className="lg:flex items-center justify-end space-y-4 sm:space-y-8 lg:space-x-6 lg:space-y-0 text-lg text-Text/Secondary">
              {paths.map((path, index) => (
                <li
                  key={index}
                  onClick={() => setNavbar(false)}
                  // className={` ${
                  //   path.name === "Ingreso paciente"
                  //     ? "text-center text-white bg-Default/Base/Default hover:decoration hover:underline"
                  //     : pathname === path.path
                  //     ? "text-Default/Base/Default bg-white"
                  //     : path.name === "Ingreso profesional"
                  //     ? "text-center text-white bg-green-500 hover:decoration hover:underline"
                  //     : "text-Text/Secondary hover:text-Default/Base/Default active:text-Default/Base/Default"
                  // } px-4 py-3 font-bold rounded-2xl `}
                  className={` ${
                    path.name === "Ingreso paciente"
                      ? " "
                      : pathname === path.path
                      ? "text-white font-bold  "
                      : path.name === "Ingreso profesional"
                      ? " "
                      : "text-white"
                  } px-4 py-3 rounded-2xl `}
                >
                  <Link
                    title={path.name}
                    href={{
                      pathname: path.path,
                    }}
                    target={path.target && path.target}
                  >
                    {path.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* END paths */}
        </div>
      </nav>
    </div>
  );

  const mini = (
    <nav className={`  w-full drop-shadow-md  ${scrolled && ""}`}>
      <div
        className={`w-full px-4 md:px-16 mx-auto ${
          !autocomplete && "bg-white"
        }`}
      >
        <div
          className={` relative w-full flex flex-row items-center justify-between ${
            scrolled ? "py-1 lg:py-3" : "py-3 lg:py-5"
          }`}
        >
          {/* logo n autocomplete */}
          <div
            className={` w-full flex flex-col md:flex-row md:items-center ${
              autocomplete ? "space-y-4 md:space-y-0" : "justify-center"
            }`}
          >
            {/* START logo */}
            <Link
              href="/"
              title="Inicio"
              className={`${
                !autocomplete && "self-center"
              } inline-flex items-center space-x-2 `}
            >
              <div className="relative w-20 ">
                <Image
                  src={"../../../public/assets/logo.png"}
                  width="0"
                  height="0"
                  sizes="100%"
                  title={"Teker Logo"}
                  alt="TeKer Logo"
                  className="w-full h-auto"
                />
              </div>
              <span className={" text-3xl font-bold text-black"}>Mundo</span>
            </Link>
            {/* END logo */}

            {/* autocomplete */}

            {/* autocomplete */}
          </div>
          {/* logo n autocomplete */}
        </div>

        {/* START paths */}
        <div
          className={`flex-1 justify-self-center  pb-3 lg:pb-0 lg:mt-0 mt-2 sm:mt-4 md:mt-8 p-2 lg:p-0  rounded-2xl md:rounded-3xl`}
        >
          <ul className="flex flex-col items-center justify-end bg-black space-y-4 sm:space-y-8 lg:space-x-6 lg:space-y-0 text-lg text-Text/Secondary">
            {paths.map((path, index) => (
              <li
                key={index}
                onClick={() => setNavbar(false)}
                className={` ${
                  path.name === "Ingreso paciente"
                    ? "text-center text-white bg-Default/Base/Default hover:decoration hover:underline"
                    : pathname === path.path
                    ? "text-Default/Base/Default bg-white"
                    : path.name === "Ingreso profesional"
                    ? "text-center text-white bg-green-600 hover:decoration hover:underline"
                    : "text-Text/Secondary hover:text-Default/Base/Default active:text-Default/Base/Default"
                } px-4 py-3 font-bold rounded-2xl `}
              >
                <Link
                  title={path.name}
                  href={{
                    pathname: path.path,
                  }}
                  target={path.target && path.target}
                >
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* END paths */}
      </div>
    </nav>
  );

  const hideBanner = ["/cita", "/cita/domiciliaria", "/solicitud-atencion"];
  const domesticBannerRoutes = ["/cita/domiciliaria"];

  return (
    <div className={"w-screen sticky top-0 z-50"}>
      {small ? mini : standard}
      {/* {dev} */}
    </div>
  );
};

"use client";

import Link from "next/link";

import { COLdate } from "@/lib/utils";

import { FbIcon } from "../svgs/FbIcon";
import { InIcon } from "../svgs/InIcon";
import { IgIcon } from "../svgs/IgIcon";
import MaxWidthWrapper from "@/components/max-width-wrapper/MaxWidthWrapper";

const links = {
  servs: [
    {
      title: "Artes curativas",
      href: "/",
    },
    {
      title: "Testimonios",
      href: "/testimonios",
    },
    {
      title: "Contacto",
      href: "/contacto",
    },
    {
      title: "Maestro Manccini",
      href: "/maestro-manccini",
    },
    {
      title: "Casa Espiritual",
      href: "/casa-espiritual",
    },
  ],

  social: [
    {
      title: "Facebook",
      href: "https://www.facebook.com/Tekersalud/",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/tekersalud/",
    },
    {
      title: "TikTok",
      href: "https://www.tiktok.com/@tekersalud",
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/company/tekersalud/",
    },
    // {
    //   title: "X",
    //   href: "/cita/virtual"
    // }
  ],
};

export const Footer = ({ small = false }) => {
  const { currentYear } = COLdate();
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

  const standard = (
    <>
      {/* START first row */}

      {/* END first row */}

      {/* START second row */}

      <div className=" grid grid-cols-2 md:grid-cols-5 gap-12 z-10  w-full ">
        <div className=" flex flex-col space-y-3">
          {/* <span className=" mb-1 font-semibold text-xs">
            NUESTROS SERVICIOS
          </span> */}
          {links.servs.map((elm, index) => (
            <Link key={index} title={elm.title} href={elm.href}>
              {elm.title}
            </Link>
          ))}
        </div>

        <div className=" hidden md:flex flex-col space-y-3">
          <span className=" mb-1 font-semibold text-xs">SOCIAL</span>
          {links.social.map((elm, index) => (
            <Link key={index} title={elm.title} href={elm.href} target="_blank">
              {elm.title}
            </Link>
          ))}
        </div>
      </div>
      {/* END second row */}
    </>
  );

  const mini = (
    <div
      className={`w-full flex flex-col md:flex-row items-center justify-center md:justify-between ${
        !small && "pt-12 md:pt-14"
      } gap-8 border-t border-white/10`}
    >
      <div className=" text-justify text-sm  ">
        <p>© www.mundoespiritualcalifornia.com</p>
      </div>
      <div className=" w-fit grid grid-flow-col gap-3">
        {socialMedia.map((elm, index) => (
          <Link key={index} title={elm.title} href={elm.url} target="_blank">
            {elm.content}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <footer className={`  ${small ? "" : " "}`}>
      {!small && (
        <div
          className={` w-full flex flex-col mx-auto pt-16 pb-12 space-y-14 bg-[#11181F] ${
            small
              ? " md:flex-row items-center justify-between text-black"
              : " text-white "
          }`}
        >
          <MaxWidthWrapper className="max-w-7xl">
            {standard}
            {mini}
          </MaxWidthWrapper>
        </div>
      )}

      {small && (
        <div className="border-t border-Input/Border">
          <div className="max-w-7xl w-full mx-auto px-4 md:px-16 py-8 md:py-12 ">
            {mini}
          </div>
        </div>
      )}
    </footer>
  );
};

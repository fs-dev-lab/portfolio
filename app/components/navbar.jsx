"use client";

import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import useCurrentHash from "@/hooks/useCurrentHash";

function Navbar() {
  const currentHash = useCurrentHash();

  const links = [
    ["ABOUT", "/#about"],
    ["EXPERIENCE", "/#experience"],
    ["SKILLS", "/#skills"],
    ["PROJECTS", "/#projects"],
    ["EDUCATION", "/#education"],
    ["CONTACT ME", "/#contact"],
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-[9999] border-b border-b-[#16f2b3]">
      <div className="flex items-center justify-between px-6 md:px-24 py-4 h-[70px]">
        <Link
          href="/"
          className="text-[#16f2b3] text-2xl md:text-3xl font-bold"
        >
          {personalData.name}
        </Link>

        <ul className="flex flex-col md:flex-row items-start md:items-center text-sm space-y-4 md:space-y-0 md:space-x-6">
          {links.map(([label, href]) => {
            const fragment = href.includes("#") ? `#${href.split("#")[1]}` : "";
            const isActive = currentHash === fragment;

            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`relative block py-1 transition-all duration-300
                      hover:text-[#16f2b3] text-white
                    `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

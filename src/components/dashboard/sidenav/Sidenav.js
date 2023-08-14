import React, { useState } from "react";

import { navigationLinks } from "../../../constants/navigation.constants";
import logo from "../../../assets/Logo.svg";
import search from "../../../assets/search.svg";
import lady from "../../../assets/Image.png";
import avatar from "../../../assets/Avatar.png";
import logout from "../../../assets/log-out.svg";
import PrefixedInput from "../../prefixed-input/PrefixedInput";
import LinkItem from "./link-item/LinkItem";

function Sidenav({ open, toggleOpen }) {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <>
      <div
        className={`sm:w-[300px] w-full px-4 border-r md:h-screen ${
          open ? "h-screen" : "h-16"
        } overflow-hidden md:pt-8 py-4 flex flex-col md:relative sticky top-0 md:border-0 border-b`}
      >
        <div className="md:px-2">
          <div
            className="w-full mb-4 flex justify-between items-center"
            data-testid="logo"
          >
            <img src={logo} alt="" />

            <div
              onClick={() => toggleOpen()}
              className={`md:hidden nav-icon1 flex items-end ${
                open ? "open" : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <PrefixedInput image={search} />
        </div>
        <div className="flex-1 overflow-auto mt-4">
          <div className="w-full">
            {navigationLinks.map((link, i) => (
              <div
                data-testid={`link`}
                onClick={() => {
                  setActiveLink(i);
                  open && toggleOpen(false);
                }}
                key={i}
                className={`w-full flex items-center justify-between py-2 px-2 rounded-md text-sm text-gray-700 cursor-pointer
            ${link.pullDown ? "mt-8" : "mt-2"} 
            ${activeLink === i ? "bg-gray-50" : ""}
            `}
              >
                <LinkItem link={link} />
              </div>
            ))}
          </div>

          <div className="w-full p-4 rounded-lg bg-gray-50 my-6">
            <h4 className="text-[14px] text-gray-900">
              New features available!
            </h4>
            <p className="text-[14px] text-gray-500 font-light mt-2 mb-5 text-sm">
              Check out the new dashboard view. Pages now load faster.
            </p>
            <img src={lady} alt="" className="w-full rounded-md" />
            <div className="mt-3 flex text-[14px] text-gray-500">
              Dismiss <span className="ml-4 text-purple-700">What's new?</span>
            </div>
          </div>
        </div>
        <div className="border-t flex py-6 justify-between">
          <div className="flex">
            <img src={avatar} alt="" className="rounded-full w-12 h-12" />
            <div className="ml-3 text-[14px]">
              <p className="text-gray-900">Olivia Rhye</p>
              <p className="text-gray-500">olivia@untitledui.com</p>
            </div>
          </div>
          <img src={logout} alt="" />
        </div>
      </div>
    </>
  );
}

export default Sidenav;

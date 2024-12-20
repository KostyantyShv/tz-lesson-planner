import React from "react";
import logo from "../assets/Logo.svg";
import overviewIcon from "../assets/Owerflow.svg";
import toolsIcon from "../assets/grid-icon.svg";
import avatarSidebar from "../assets/avatar-sidebar.png"

const SideBar: React.FC = () => {
  return (
    <aside className="bg-white h-[97%] flex flex-col items-center justify-between py-6 rounded-3xl m-2">
      <div>
        <div className="w-full mb-7 flex justify-center">
          <img src={logo} alt="logo" />
        </div>
        <nav className="flex flex-col space-y-4 w-full px-1">
          <button className="w-full flex flex-col items-center text-xs py-2 px-3 rounded-lg text-customGray">
            <img src={overviewIcon} alt="overview icon" className="mb-2" />
            Overview
          </button>
          <button className="w-full flex flex-col items-center text-xs py-2 px-3 rounded-lg text-white bg-gray-900">
            <img src={toolsIcon} alt="ai tools icon" className="mb-2"/>
            AI Tools
          </button>
        </nav>
      </div>
      <button>
        <img src={avatarSidebar} alt="avatar side bar" className="rounded-full" />
      </button>
    </aside>
  );
};

export default SideBar;

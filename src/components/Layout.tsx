import React from "react";
import SideBar from "./SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />
      <main className="flex-1 overflow-y-auto p-6 flex justify-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Header"

const Layout = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  

  useEffect(() => {
    const savedState = localStorage.getItem("sidebarExpanded");
    if (savedState !== null) {
      setIsExpanded(JSON.parse(savedState));
    }
  }, []);

  const toggleSidebar = () => {
    setIsExpanded((prev) => {
      const newState = !prev;
      localStorage.setItem("sidebarExpanded", JSON.stringify(newState));
      return newState;
    });
  };


  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      <div className="flex-1 flex flex-col overflow-auto">
        <Header isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
        <main className="overflow-x-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout
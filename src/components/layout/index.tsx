import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <main>
      <Navbar setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} />
      <div className="p-4 sm:ml-64 dark:bg-gray-900 min-h-screen dark:text-white bg-white text-black  mt-[60px]">
        {children}
      </div>
    </main>
  );
};

export default Layout;

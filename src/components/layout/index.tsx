import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <div className="p-4 sm:ml-64 dark:bg-gray-900 min-h-screen dark:text-white bg-white text-black overflow-y-auto mt-[60px]">
        {children}
      </div>
    </main>
  );
};

export default Layout;

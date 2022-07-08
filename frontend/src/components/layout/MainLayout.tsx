import React from "react";
import Navbar from "./Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className='w-full p-8'>{children}</div>
    </div>
  );
}

import React from "react";

const Footer = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} w-full bg-black text-white text-center z-10 p-4`}
    >
      <div className="container text-sm flex justify-center flex-col sm:flex-row">
        <div className="">
          Gilberto Carrillo - Yoga {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;

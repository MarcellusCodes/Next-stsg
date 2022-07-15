import React from "react";
import Image from "next/image";

const Branding = () => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <div className="w-[70px!important] h-[70px !important]">
        <Image
          src="/images/branding.png"
          alt="Branding"
          width="100%"
          height="100%"
        />
      </div>
      <h2 className="text-4xl text-slate-900 font-primary">SB</h2>
    </div>
  );
};

export default Branding;

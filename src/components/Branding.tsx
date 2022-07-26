import React from "react";
import Image from "next/image";
import Link from "next/link";

const Branding = () => {
  return (
    <Link href="/" passHref>
      <div className="grid place-content-center space-x-2 border-2 rounded-full border-primary-500 w-16 h-16 cursor-pointer">
        <h2 className="text-4xl text-primary-500 font-primary">SB</h2>
      </div>
    </Link>
  );
};

export default Branding;

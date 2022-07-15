import React from "react";
import { Branding, PrimaryButton } from "./index";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 px-4">
      <div className="flex flex-row items-center container mx-auto justify-between">
        <Branding />
        <PrimaryButton>Login</PrimaryButton>
      </div>
    </nav>
  );
};

export default Navbar;

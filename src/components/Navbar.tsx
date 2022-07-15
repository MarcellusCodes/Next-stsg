import React from "react";
import { Branding, PrimaryButton } from "./index";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-2 px-4">
      <div className="flex flex-row items-center container mx-auto justify-between">
        <Branding />
        <PrimaryButton
          onClick={() => {
            console.log("Login");
          }}
        >
          Login
        </PrimaryButton>
      </div>
    </nav>
  );
};

export default Navbar;

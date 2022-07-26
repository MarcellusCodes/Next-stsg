import React from "react";
import { Branding, PrimaryButton } from "./index";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="bg-white py-2 px-4">
      <div className="flex flex-row items-center container mx-auto justify-between">
        <Branding />
        <ul className="flex flex-row items-center space-x-6">
          {children}
          <li>
            <PrimaryButton
              onClick={() => {
                console.log("Login");
              }}
            >
              Login
            </PrimaryButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

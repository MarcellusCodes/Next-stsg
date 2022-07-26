import React from "react";
import { Branding, PrimaryButton } from "./index";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  return (
    <nav className="bg-white py-2 px-4">
      <div className="flex flex-row items-center container mx-auto justify-between">
        <Branding />
        <ul className="flex flex-row items-center space-x-6">
          {children}
          {session ? (
            <li>
              <PrimaryButton onClick={signOut}>Logout</PrimaryButton>
            </li>
          ) : (
            <li>
              <PrimaryButton
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </PrimaryButton>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

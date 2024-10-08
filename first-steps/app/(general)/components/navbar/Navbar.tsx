import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../nav-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex justify-between shadow-md shadow-slate-400 bg-opacity-30 p-5">
      <Link href="/" className="flex items-center gap-2">
        <HomeIcon />
        <span>Home</span>
      </Link>

      <div className="flex gap-4">
        {navItems.map((navItem) => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))}
      </div>
    </nav>
  );
};

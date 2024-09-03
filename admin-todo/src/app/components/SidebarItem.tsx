"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  title: string;
  path: string;
  icon: JSX.Element;
}

export const SidebarItem = ({ title, path, icon }: SidebarProps) => {
  const currentPath = usePathname();

  const activateClass =
    currentPath === path
      ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
      : "text-gray-600 hover:bg-gray-100";

  return (
    <li>
      <Link
        href={path}
        className={`${activateClass} relative px-4 py-3 flex items-center space-x-4 rounded-xl`}
      >
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  );
};

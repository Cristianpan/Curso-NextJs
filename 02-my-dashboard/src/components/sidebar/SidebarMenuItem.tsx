"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface SidebarMenuItemProps {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export const SidebarMenuItem = ({
  path,
  icon,
  title,
  subtitle,
}: SidebarMenuItemProps) => {
  const currentPath = usePathname();

  return (
    <Link
      href={path}
      className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group ${
        currentPath === path ? "bg-gray-100" : ""
      }`}
    >
      {icon}
      <div className="flex flex-col gap-1">
        <span className="ms-3">{title}</span>
        <span className="ms-3 text-xs opacity-65">{subtitle}</span>
      </div>
    </Link>
  );
};

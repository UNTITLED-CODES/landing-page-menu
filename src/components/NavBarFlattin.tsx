"use client";
import React from "react";
import { FloatingNav } from "@/ui/navbar-flattin";
import { FaHome, FaUser } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#creators",
      icon: <FaUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <AiFillMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

import React, { ReactNode } from "react";

type NavItems = {
  key: string;
  label: string;
  icon?: ReactNode;
  link?: string;
  show?: boolean;
  permission?: string;
  Children?: NavItems[];
};

export const navItems: NavItems[] = [
  {
    key: "0",
    label: "Dashboard",
    icon: <i className="fas fa-tachometer-alt"></i>,
    link: "/",
  },
  {
    key: "1",
    label: "Serivces",
    icon: <i className="fas fa-tachometer-alt"></i>,
    link: "/services",
  },
];

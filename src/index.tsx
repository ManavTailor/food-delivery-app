import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FC, ReactNode } from "react";
import { Menu } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

export const Layout: FC<{
  children: ReactNode;
  title?: string;
}> = ({ children, title }) => {
  const navItems = useMemo(() => {
    const fn = (data: typeof navItems): ItemType[] =>
      data
        .map((item) => {
          if (item.show === false) return null;
          if (item.permission && !item.permission) return null;
          if (item.children) {
            const children = fn(item.children);
            if (children.length === 0) return null;
            return {
              ...item,
              children,
            };
          }
          return item;
        })
        .filter(Boolean) as ItemType[];
    return fn(navItems);
  }, []);

  return (
    <div className="App">
      <App />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      ></Menu>
    </div>
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

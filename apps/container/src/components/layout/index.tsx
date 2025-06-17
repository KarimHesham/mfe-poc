import { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

import styled from "@emotion/styled";
console.log("👀 styled type:", typeof styled); // should be 'function'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

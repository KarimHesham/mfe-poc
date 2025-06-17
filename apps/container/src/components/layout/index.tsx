import { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content on the right (Header, Main, Footer) */}
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Header />
        <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

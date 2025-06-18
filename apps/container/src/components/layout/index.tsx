import { PropsWithChildren } from "react";
import { useRouter } from "@tanstack/react-router";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const pathname = router.state.location.pathname;
  const showSidebar = pathname !== "/auth" && pathname !== "/";

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar on the left - hidden on auth page */}
      {showSidebar && <Sidebar />}

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

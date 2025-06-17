const Footer = () => {
  return (
    <footer
      style={{ padding: "1rem", background: "#f0f0f0", textAlign: "center" }}
    >
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Tech Suite</p>
    </footer>
  );
};

export default Footer;

import { Button } from "@suite-poc/ui-kit";

const Header = () => {
  return (
    <header
      style={{
        padding: "1rem",
        background: "#f0f0f0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>Tech Suite</h2>
      <Button
        buttonText="Sign In"
        backgroundColor="#6200ea"
        color="#fff"
        onClick={() => alert("Sign In clicked")}
      />
    </header>
  );
};

export default Header;

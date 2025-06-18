import { useEffect } from "react";
import SignIn from "./components/sign-in";

const App = ({ setActiveApp }: { setActiveApp?: (app: string) => void }) => {
  useEffect(() => {
    if (setActiveApp) {
      setActiveApp("auth");
    }

    const event = new CustomEvent("setAppName", {
      detail: {
        appName: "Auth",
      },
    });

    window.dispatchEvent(event);
  }, []);

  return (
    <div>
      <SignIn />
    </div>
  );
};

export default App;

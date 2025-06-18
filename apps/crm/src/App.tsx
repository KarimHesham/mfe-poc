import { Button } from "@suite-poc/ui-kit";
import { useCallback, useEffect } from "react";

const App = ({ setActiveApp }: { setActiveApp?: (app: string) => void }) => {
  useEffect(() => {
    if (setActiveApp) {
      setActiveApp("crm");
    }
  }, []);

  const handleClick = useCallback(() => {
    const event = new CustomEvent("setAppName", {
      detail: {
        appName: "CRM",
      },
    });

    window.dispatchEvent(event);
  }, []);

  return (
    <div>
      <h2>CRM Application</h2>
      <Button
        buttonText="Click Me"
        backgroundColor="#f44336"
        color="#ffffff"
        onClick={handleClick}
      />
    </div>
  );
};

export default App;

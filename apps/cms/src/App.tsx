import { Button } from "@suite-poc/ui-kit";
import { useCallback, useEffect } from "react";

const App = ({ setActiveApp }: { setActiveApp?: (app: string) => void }) => {
  useEffect(() => {
    if (setActiveApp) {
      setActiveApp("cms");
    }
  }, []);

  const handleClick = useCallback(() => {
    const event = new CustomEvent("setAppName", {
      detail: {
        appName: "CMS",
      },
    });

    window.dispatchEvent(event);
  }, []);

  return (
    <div>
      <h2>CMS Application</h2>
      <Button
        buttonText="Click Me"
        backgroundColor="#6200ea"
        color="#fff"
        onClick={handleClick}
      />
    </div>
  );
};

export default App;

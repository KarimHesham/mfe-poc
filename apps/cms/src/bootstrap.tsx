import { createRoot } from "react-dom/client";
import App from "./App";

const mount = (
  el: HTMLElement,
  {
    setActiveApp,
    setAppName,
  }: {
    setActiveApp?: (app: string) => void;
    setAppName?: (app: string) => void;
  } = {}
) => {
  const root = createRoot(el);
  root.render(<App setActiveApp={setActiveApp} setAppName={setAppName} />);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("cms-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };

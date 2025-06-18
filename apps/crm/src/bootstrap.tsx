import { createRoot } from "react-dom/client";
import App from "./App";

const mount = (
  el: HTMLElement,
  {
    setActiveApp,
  }: {
    setActiveApp?: (app: string) => void;
  } = {}
) => {
  const root = createRoot(el);
  root.render(<App setActiveApp={setActiveApp} />);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("crm-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };

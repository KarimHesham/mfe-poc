import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("container-root")!);
root.render(<App />);

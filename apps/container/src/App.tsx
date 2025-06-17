import { lazy, Suspense } from "react";
import { Button } from "@suite-poc/ui-kit";

const RemoteCms = lazy(() => import("./components/CmsApp"));
const RemoteCrm = lazy(() => import("./components/CrmApp"));

const App = () => {
  return (
    <div>
      <h1>Container Application</h1>
      <Button
        buttonText="Click Me"
        backgroundColor="#2196f3"
        color="#ffffff"
        onClick={() => alert("Button from Container Application clicked!")}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteCms />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteCrm />
      </Suspense>
    </div>
  );
};

export default App;

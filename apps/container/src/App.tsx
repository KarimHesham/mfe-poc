import { lazy, Suspense } from "react";

const RemoteCms = lazy(() => import("./components/CmsApp"));
const RemoteCrm = lazy(() => import("./components/CrmApp"));

const App = () => {
  return (
    <div>
      <h1>Container Application</h1>
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

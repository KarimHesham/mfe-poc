import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from "@tanstack/react-router";
import IndexRoute from "../components/routes";
import CrmRoute from "../components/routes/crm";
import CmsRoute from "../components/routes/cms";
import Layout from "../components/layout";
import { AppContextProvider } from "../context/app.context";

const rootRoute = createRootRoute({
  component: () => {
    return (
      <AppContextProvider>
        <Layout>
          <Outlet />
        </Layout>
      </AppContextProvider>
    );
  },
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <IndexRoute />,
});

const crmRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/crm",
  component: () => <CrmRoute />,
});

const cmsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cms",
  component: () => <CmsRoute />,
});

const routeTree = rootRoute.addChildren([indexRoute, crmRoute, cmsRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router };

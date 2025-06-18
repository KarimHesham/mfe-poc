import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import { useRouter } from "@tanstack/react-router";

type AppContextType = {
  activeApp: string;
  setActiveApp: (app: string) => void;
  appName: string;
  setAppName: (app: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const path = router.state.location.pathname;
  const initialActiveApp = path === "/" ? "none" : path.slice(1);

  const [activeApp, setActiveApp] = useState(initialActiveApp);
  const [appName, setAppName] = useState(initialActiveApp.toUpperCase());

  useEffect(() => {
    console.log("activeApp changed to", activeApp);
  }, [activeApp]);

  useEffect(() => {
    const handleSetAppName = (e: Event) => {
      const customEvent = e as CustomEvent<{ appName: string }>;
      setAppName(customEvent.detail.appName);
    };

    window.addEventListener("setAppName", handleSetAppName);

    return () => {
      window.removeEventListener("setAppName", handleSetAppName);
    };
  }, []);

  const contextValue = useMemo(
    () => ({ activeApp, setActiveApp, appName, setAppName }),
    [activeApp, appName]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within a Provider");
  return context;
};

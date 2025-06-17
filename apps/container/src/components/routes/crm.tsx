import { useEffect, useRef } from "react";
import { mount } from "crm/CrmApp";
import { useAppContext } from "../context/app.context";

export default () => {
  const { setActiveApp, setAppName } = useAppContext();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      mount(ref.current, { setActiveApp, setAppName });
    }
  }, []);

  return <div ref={ref}></div>;
};

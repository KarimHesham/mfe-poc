import { useEffect, useRef } from "react";
import { mount } from "cms/CmsApp";
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

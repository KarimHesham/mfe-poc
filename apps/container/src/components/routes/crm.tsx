import { useEffect, useRef } from "react";
import { mount } from "crm/CrmApp";

export default () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref}></div>;
};

declare module "crm/CrmApp" {
  export const mount: (
    el: HTMLElement,
    {
      setActiveApp,
      setAppName,
    }: {
      setActiveApp: (app: string) => void;
      setAppName: (app: string) => void;
    }
  ) => void;
}

declare module "cms/CmsApp" {
  export const mount: (
    el: HTMLElement,
    {
      setActiveApp,
      setAppName,
    }: {
      setActiveApp: (app: string) => void;
      setAppName: (app: string) => void;
    }
  ) => void;
}

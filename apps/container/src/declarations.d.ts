declare module "crm/CrmApp" {
  export const mount: (
    el: HTMLElement,
    {
      setActiveApp,
    }: {
      setActiveApp: (app: string) => void;
    }
  ) => void;
}

declare module "cms/CmsApp" {
  export const mount: (
    el: HTMLElement,
    {
      setActiveApp,
    }: {
      setActiveApp: (app: string) => void;
    }
  ) => void;
}

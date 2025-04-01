declare module "*.astro" {
  import type { ComponentType } from "react";
  const component: ComponentType<any>;
  export default component;
}

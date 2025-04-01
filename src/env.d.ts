/// <reference types="astro/client" />

declare module "astro:content" {
  interface ContentCollectionEntry<C extends string> {
    data: any;
    body: string;
    slug: string;
  }
}

import type { AvailableLocales } from "../../translations/translations";

export type NavbarProps = {
  links: {
    text: string;
    href: string;
  }[];
  lang?: AvailableLocales;
};

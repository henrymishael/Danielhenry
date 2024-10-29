import {
  House,
  GraduationCap,
  IdCard,
  SquareEqual,
  LayoutDashboard,
  Bolt,
  LucideIcon,
} from "lucide-react";

export type LinksProps = {
  id?: number;
  label: string;
  icon: LucideIcon;
  link: string;
  path?: "home" | "work" | "contact" | string;
};
export const NAV_LINKS: LinksProps[] = [
  {
    id: 1,
    label: "Home",
    icon: House,
    link: "home",
  },
  {
    id: 2,
    label: "Contact",
    icon: GraduationCap,
    link: "work",
  },
  {
    id: 3,
    label: "Work",
    icon: IdCard,
    link: "contact",
  },
];

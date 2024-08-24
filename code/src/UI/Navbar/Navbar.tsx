import Link from "next/link";
import {
  Navbar as NUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/react";
import type { NavbarProps } from "./Navbar.types";

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <NUINavbar className="bg-black" shouldHideOnScroll isBordered>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          MCTS
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map(({ text, href }) => (
          <NavbarItem key={href}>
            <Link color="foreground" href={href}>
              {text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NUINavbar>
  );
};

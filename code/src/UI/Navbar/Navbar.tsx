"use client";

import Link from "next/link";
import {
  Navbar as NUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/react";
import type { NavbarProps } from "./Navbar.types";
import { useRouter } from "next/navigation";
import { useClientTranslations } from "@/translations/translations";
import { Translations } from "@/translations/translations.types";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export const Navbar: React.FC<NavbarProps> = ({ links, lang }) => {
  const { data, status } = useSession();
  const router = useRouter();
  const translations = useClientTranslations(lang);

  const handleLogout = () => {
    signOut();
    router.push("/");
  };

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
              {translations?.global?.[text as keyof Translations["global"]]}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {status === "authenticated" ? (
            <Button color="danger" onClick={handleLogout} variant="flat">
              {translations?.global?.logout}
            </Button>
          ) : (
            <Button
              as={Link}
              color="primary"
              href="/api/auth/signin"
              variant="flat"
              isLoading={status === "loading"}
            >
              {translations?.global?.login}
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </NUINavbar>
  );
};

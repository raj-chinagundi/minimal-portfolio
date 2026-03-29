"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/photos", label: "Photos" },
  { href: "/posts", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href ? "active" : ""}
        >
          {label}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  );
}

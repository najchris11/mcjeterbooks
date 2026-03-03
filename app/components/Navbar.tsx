"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "About M.C." },
  { href: "/books", label: "Books" },
  { href: "/extras", label: "Extras" },
  { href: "/connect", label: "Connect" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">
          <Image src="/icons/nav-logo.png" width={64} height={64} alt="M.C. Jeter Books logo" />
        </Link>
      </div>

      <ul className="navbar-links">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={pathname === href ? "active" : ""}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navbar-social">
        <a href="https://www.tiktok.com/@mcjeterbooks" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/tt.png" width={25} height={25} alt="TikTok" />
        </a>
        <a href="https://www.instagram.com/mcjeterbooks/" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/ig.png" width={25} height={25} alt="Instagram" />
        </a>
      </div>
    </nav>
  );
}

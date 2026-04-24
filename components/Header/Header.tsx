"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";
import { RiMenu4Line } from "react-icons/ri";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

const navItems = [
  { href: "/", label: "home" },
  { href: "/contact", label: "contact" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about me" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <div className={css.containerHeader}>
        <ul className={css.social}>
          <li className={css.socialLink}>
            <a
              href="https://github.com/SashaSkybina11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <svg
                className={css.icon}
                width="30"
                height="30"
                aria-hidden="true"
              >
                <use href="/icons/symbol-defs.svg#icon-github" />
              </svg>
            </a>
          </li>
          <li className={css.socialLink}>
            <a href="mailto:sashaskibina16@gmail.com" aria-label="Send email">
              <svg
                className={css.icon}
                width="30"
                height="30"
                aria-hidden="true"
              >
                <use href="/icons/symbol-defs.svg#icon-email" />
              </svg>
            </a>
          </li>
          <li className={css.socialLink}>
            <a
              href="https://www.linkedin.com/in/oleksandraskybina/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <svg
                className={css.icon}
                width="30"
                height="30"
                aria-hidden="true"
              >
                <use href="/icons/symbol-defs.svg#icon-linkedin" />
              </svg>
            </a>
          </li>
        </ul>
        <Link href="/" className={css.logo}>
          <p className={css.logoDescr}>
            <span>O</span>
            <span className={css.dot}>.</span>
            <span>S</span>
            <span>k</span>
            <span>y</span>
            <span>b</span>
            <span>i</span>
            <span>n</span>
            <span>a</span>
          </p>
        </Link>
        <button
          type="button"
          className={css.mobileMenuBtn}
          onClick={() => setIsOpen(true)}
        >
          <RiMenu4Line size={36} />
        </button>

        {/* Mobile menu */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />

        <nav className={css.navWrap}>
          <ul className={css.nav}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href} className={css.item}>
                  <Link
                    href={item.href}
                    className={`${css.itemLink} ${
                      isActive ? css.itemLinkActive : ""
                    }`}
                  >
                    {item.label}

                    <span
                      className={css.dotActive}
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scale(1)" : "scale(0.5)",
                      }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

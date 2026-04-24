"use client";
import css from "./MobileMenu.module.css";
import { createPortal } from "react-dom";
import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navItems: NavItem[];
};

const MobileMenu = ({ isOpen, setIsOpen, navItems }: MobileMenuProps) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div className={css.overlay} onClick={() => setIsOpen(false)} />

      <div className={css.mobileMenu}>
        <ul className={css.mobileNav}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={css.mobileLink}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>,
    document.body,
  );
};

export default MobileMenu;

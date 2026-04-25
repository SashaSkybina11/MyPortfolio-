"use client";
import css from "./MobileMenu.module.css";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  navItems: NavItem[];
  triggerRef: RefObject<HTMLButtonElement | null>;
};

const MobileMenu = ({
  isOpen,
  setIsOpen,
  navItems,
  triggerRef,
}: MobileMenuProps) => {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      if (wasOpenRef.current) {
        triggerRef.current?.focus();
      }
      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        event.preventDefault();
        return;
      }

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      }

      if (!event.shiftKey && activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen, triggerRef]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <>
      <div
        className={`${css.overlay} ${isOpen ? css.open : ""}`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      <div
        ref={menuRef}
        id="mobile-menu"
        className={`${css.mobileMenu} ${isOpen ? css.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={css.mobileBtn}
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu"
          tabIndex={isOpen ? 0 : -1}
        >
          <IoCloseCircleSharp className={css.mobileIcon} aria-hidden="true" />
        </button>
        <nav aria-label="Mobile navigation">
          <ul className={css.mobileNav}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={css.mobileLink}
                    aria-current={isActive ? "page" : undefined}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>,
    document.body,
  );
};

export default MobileMenu;

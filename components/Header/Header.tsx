"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useEffectEvent,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const navItems = [
  { href: "/", label: "home" },
  { href: "/contact", label: "contact" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about me" },
];

const Header = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicatorX, setIndicatorX] = useState(0);
  const [indicatorVisible, setIndicatorVisible] = useState(false);

  const updateIndicator = useEffectEvent(() => {
    const nav = navRef.current;
    const activeLink = linkRefs.current[pathname] ?? linkRefs.current["/"];

    if (!nav || !activeLink) {
      setIndicatorVisible(false);
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const activeRect = activeLink.getBoundingClientRect();
    const nextX = activeRect.left - navRect.left + activeRect.width / 2 - 4;

    setIndicatorX(nextX);
    setIndicatorVisible(true);
  });

  useLayoutEffect(() => {
    updateIndicator();
  }, [pathname]);

  useEffect(() => {
    updateIndicator();

    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, []);

  return (
    <header className={css.header}>
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
      <nav className={css.navWrap}>
        <span
          className={css.dotActive}
          aria-hidden="true"
          style={{
            opacity: indicatorVisible ? 1 : 0,
            transform: `translateX(${indicatorX}px)`,
          }}
        />
        <ul ref={navRef} className={css.nav}>
          {navItems.map((item) => (
            <li key={item.href} className={css.item}>
              <Link
                ref={(node) => {
                  linkRefs.current[item.href] = node;
                }}
                className={`${css.itemLink} ${
                  pathname === item.href ? css.itemLinkActive : ""
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

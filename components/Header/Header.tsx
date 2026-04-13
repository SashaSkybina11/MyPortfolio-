"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <ul className={css.social}>
        <li className={css.socialLink}>
          <a
            href="https://github.com/SashaSkybina11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={css.icon} width="30" height="30">
              <use href="/icons/symbol-defs.svg#icon-github" />
            </svg>
          </a>
        </li>
        <li className={css.socialLink}>
          <a href="mailto:sashaskibina16@gmail.com" aria-label="Send email">
            <svg className={css.icon} width="30" height="30">
              <use href="/icons/symbol-defs.svg#icon-email" />
            </svg>
          </a>
        </li>
        <li className={css.socialLink}>
          <a
            href="https://www.linkedin.com/in/oleksandraskybina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={css.icon} width="30" height="30">
              <use href="/icons/symbol-defs.svg#icon-linkedin" />
            </svg>
          </a>
        </li>
      </ul>
      <Link href={""} className={css.logo}>
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
      <nav>
        <ul className={css.nav}>
          <li className={css.item}>
            <Link className={css.itemLink} href="/">
              {pathname === "/" && <span className={css.dotActive} />}home
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.itemLink} href="/about">
              {pathname === "/about" && <span className={css.dotActive} />}{" "}
              about me
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.itemLink} href="/projects">
              {pathname === "/projects" && <span className={css.dotActive} />}{" "}
              projects
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.itemLink} href="/contact">
              {pathname === "/contact" && <span className={css.dotActive} />}
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

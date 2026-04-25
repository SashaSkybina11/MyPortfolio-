import { ViewTransition } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      enter={{
        "site-nav": "page-enter",
        default: "none",
      }}
      exit={{
        "site-nav": "page-exit",
        default: "none",
      }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}

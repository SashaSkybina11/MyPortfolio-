"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

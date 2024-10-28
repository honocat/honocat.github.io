"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModeToggle(): JSX.Element {
  const { theme, setTheme } = useTheme();
  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={theme === "dark" ? "dark" : "light"}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="inline-block"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="bg-purple-500 dark:bg-orange-500 bg-opacity-70 dark:bg-opacity-90
            hover:bg-purple-500 hover:bg-opacity-100 dark:hover:bg-opacity-100"
        >
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}

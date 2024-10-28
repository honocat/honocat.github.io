import { tv } from "tailwind-variants";

interface HeadingProps {
  variant?: "h1" | "h2" | "h3" | "section-title" | "skillset-title";
  children: React.ReactNode;
}

const headingStyles = tv({
  base: "font-bold text-gray-800 dark:text-gray-300",
  variants: {
    variant: {
      h1: "text-3xl",
      h2: "text-xl",
      h3: "text-base",
      "section-title":
        "w-fit text-xl mb-4 border-b-4 border-black dark:border-gray-600",
      "skillset-title": "dark:text-gray-300",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

export function Heading({ variant = "h1", children }: HeadingProps) {
  return <p className={headingStyles({ variant })}>{children}</p>;
}

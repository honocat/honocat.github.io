"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const LogoBox = [
  "font-bold",
  "text-[18px]",
  "inline-flex",
  "items-center",
  "h-fit",
  "leading-[20px]",
  "p-[10px]",
  "group",
];

export default function Logo(): JSX.Element {
  const { resolvedTheme } = useTheme();
  const honocatImg =
    resolvedTheme === "dark"
      ? "/images/honocat-dark.png"
      : "/images/honocat-light.png";

  return (
    <Link href="/">
      <div className={LogoBox.join(" ")}>
        <Image
          src={honocatImg}
          width={25}
          height={25}
          alt="Logo"
          className="transition-transform duration-300 group-hover:rotate-[20deg]"
        />
        <p className="text-gray-800 dark:text-white/90 font-bold ml-1">
          Keisuke Nakano
        </p>
      </div>
    </Link>
  );
}

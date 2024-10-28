"use client";

import { useTheme } from "next-themes";
import Account from "@/components/account";

import { SiGithub } from "react-icons/si";
import { PiXLogo } from "react-icons/pi";

export default function Accounts(): JSX.Element {
  const { resolvedTheme } = useTheme();
  const IconColor = resolvedTheme === "dark" ? "#2dd4bf" : "#0f766e";
  return (
    <div className="space-y-1">
      <Account name="@honocat" href="https://github.com/honocat/">
        <SiGithub color={IconColor} />
      </Account>
      <Account name="@hono_n819" href="https://x.com/hono_n819/">
        <PiXLogo color={IconColor} />
      </Account>
    </div>
  );
}

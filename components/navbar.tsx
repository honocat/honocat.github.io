"use client";

import { usePathname } from "next/navigation";
// import { Manu } from 'lucide-react';
// import { DropdownMenu }

import Logo from "@/components/logo";
import Link from "next/link";
import ModeToggle from "@/components/theme-toggle-button";

import { SiGithub } from "react-icons/si";

interface LinkItemProps {
  href: string;
  path: string;
  children: React.ReactNode;
}

const LinkItem = ({
  href,
  path,
  children,
  ...props
}: LinkItemProps): JSX.Element => {
  const active = path === href;
  const inactiveColor = "text-gray-800 dark:text-white/80";
  return (
    <Link
      href={href}
      className={`
        p-2
        flex
        items-center
        hover:underline
        bg-${active ? "[#7ec5c3]" : ""}
        text-${active ? "[#202023]" : inactiveColor}
      `}
      {...props}
    >
      {children}
    </Link>
  );
};

export default function Navbar(): JSX.Element {
  const path = usePathname();
  return (
    <nav className="fixed w-full h-[60px] bg-[#f2ebe0] dark:bg-[#20202380] backdrop-blur-md z-10">
      <div className="flex p-2 container max-w-2xl mx-auto items-center justify-between">
        <div className="flex items-center md:space-x-4">
          <Logo />

          <div className="hidden md:flex space-x-2">
            <LinkItem href="/works" path={path}>
              Works
            </LinkItem>
            <LinkItem href="/blogs" path={path}>
              Blogs
            </LinkItem>
            <LinkItem href="/contact" path={path}>
              Contact
            </LinkItem>
            <LinkItem
              href="https://github.com/honoka-nakano/honocat-github.io/"
              path={path}
            >
              <div className="flex h-fit items-center space-x-1">
                <SiGithub size={16} />
                <p>Source</p>
              </div>
            </LinkItem>
          </div>
        </div>

        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

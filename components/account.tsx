import Link from "next/link";

interface AccountProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

const style = [
  "w-fit",
  "rounded-md",
  "px-4",
  "py-2",
  "hover:bg-teal-800",
  "hover:bg-opacity-20",
  "transition",
  "duration-300",
];

export default function Account({
  name,
  href,
  children,
}: AccountProps): JSX.Element {
  return (
    <div>
      <div className={style.join(" ")}>
        <Link href={href} className="flex space-x-2" target="_blank">
          <div className="flex items-center">{children}</div>
          <p className="font-bold text-teal-700 dark:text-teal-400">{name}</p>
        </Link>
      </div>
    </div>
  );
}

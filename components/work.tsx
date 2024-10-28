import Link from "next/link";
import { Heading } from "@/components/styles/heading";
import { ImageStyle } from "@/components/styles/image-style";

interface WorkProps {
  name: string;
  src: string;
  href: string;
  children: React.ReactNode;
}

export default function Work({
  name,
  src,
  href,
  children,
}: WorkProps): JSX.Element {
  return (
    <div className="text-center space-y-2">
      <Link href={href} target="_blank">
        <ImageStyle src={src} />
      </Link>
      <Heading variant="h3">{name}</Heading>
      <p className="text-sm">{children}</p>
    </div>
  );
}

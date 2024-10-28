import Link from "next/link";
import { RightArrow } from "@/components/styles/right-arrow";

export default function Guide(): JSX.Element {
  return (
    <div className="text-center">
      <Link
        href="/works"
        className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        My Portfolio
        <RightArrow />
      </Link>
    </div>
  );
}

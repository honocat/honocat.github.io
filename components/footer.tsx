import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <div className="text-center opacity-40 text-sm my-4">
      <p>
        &copy; {new Date().getFullYear()} Keisuke Nakano. All Right Reserved.
      </p>
      <p>
        This Homepage Inspired by{" "}
        <span className="font-bold underline text-teal-800">
          <Link href="https://github.com/craftzdog/craftzdog-homepage/">
            @craftzdog
          </Link>
        </span>
      </p>
    </div>
  );
}

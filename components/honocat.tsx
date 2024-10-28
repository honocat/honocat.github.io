import Image from "next/image";
import { Heading } from "@/components/styles/heading";

export default function Honocat(): JSX.Element {
  return (
    <div className="md:flex mb-6">
      <div className="flex-grow">
        <Heading variant="h1">Keisuke Nakano</Heading>
        <p>Student Developer ( Web app / design )</p>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 text-center">
        <div className="w-24 h-24 rounded-full border-2 border-white overflow-hidden mx-auto">
          <Image
            src="/images/keisuke.png"
            alt="Profile Image"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

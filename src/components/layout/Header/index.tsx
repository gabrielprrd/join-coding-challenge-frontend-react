import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-4 bg-blue-700 text-white p-4 shadow-md">
      <Image
        src="/assets/images/bundespolizei.png"
        alt="Police badge"
        width="50"
        height="10"
      />
      <div className="flex flex-col">
        <Link className="no-underline text-2xl" href="/">
          Police Department of Berlin
        </Link>
        <p>Stolen bikes</p>
      </div>
    </header>
  );
}

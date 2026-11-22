
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-800 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-5 md:flex-row">

        {/* School Name */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">
            MISAB NOOR ACADEMY
          </h1>

          <p className="text-sm text-yellow-300">
            JANI
          </p>
        </div>

        {/* Navigation */}
       <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium sm:gap-6 sm:text-base">
          <Link href="/" className="hover:text-yellow-300">
            Home
          </Link>

          <Link href="/about" className="hover:text-yellow-300">
            About
          </Link>

          <Link href="/contact" className="hover:text-yellow-300">
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}

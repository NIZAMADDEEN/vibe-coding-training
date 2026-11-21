import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link>{" | "}
        <Link href="/about">About</Link>{" | "}
        <Link href="/contact">Contact</Link>
      </nav>

      <h1>Welcome to Next.js!</h1>
      <p>This is my homepage.</p>
    </main>
  );
}
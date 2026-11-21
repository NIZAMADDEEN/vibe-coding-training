import Link from "next/link";

export default function About() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link>{" | "}
        <Link href="/about">About</Link>{" | "}
        <Link href="/contact">Contact</Link>
      </nav>

      <h1>About Us</h1>
      <p>This is the About page.</p>
    </main>
  );
}
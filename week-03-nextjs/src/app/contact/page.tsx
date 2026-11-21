import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link>{" | "}
        <Link href="/about">About</Link>{" | "}
        <Link href="/contact">Contact</Link>
      </nav>

      <h1>Contact Us</h1>
      <p>Email: example@email.com</p>
    </main>
  );
}
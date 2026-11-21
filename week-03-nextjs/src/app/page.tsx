export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      <section className="rounded-xl bg-white p-10 shadow-md">
        <h1 className="mb-4 text-4xl font-bold text-blue-700">
          Welcome to My Website
        </h1>

        <p className="mb-6 text-lg text-gray-600">
          I am learning modern web development using React and Next.js.
        </p>

        <button className="rounded-lg bg-blue-700 px-6 py-3 text-white hover:bg-blue-800">
          Get Started
        </button>
      </section>
    </main>
  );
}
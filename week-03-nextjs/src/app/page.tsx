
import SchoolCard from "@/components/SchoolCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-green-800 px-6 py-24 text-center text-white">

        <p className="mb-3 font-semibold uppercase tracking-widest text-yellow-300">
          Welcome to
        </p>

        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          MISAB NOOR ACADEMY JANI
        </h1>

        <p className="mb-8 text-lg text-green-100">
          Together We Grow, Together We Learn!
        </p>

        <a
          href="#admissions"
          className="rounded-lg bg-yellow-400 px-8 py-3 font-bold text-green-900 hover:bg-yellow-300"
        >
          Explore Admissions
        </a>

      </section>

      {/* About Section */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-16"
      >

        <h2 className="mb-5 text-center text-3xl font-bold text-green-800">
          About Our School
        </h2>

        <p className="mx-auto max-w-3xl text-center leading-8 text-gray-600">
          MISAB NOOR ACADEMY JANI is a school offering Nursery and
          Primary education. Our motto is Together We Grow,
          Together We Learn!
        </p>

      </section>

      {/* School Sections */}
      <section className="bg-gray-50 px-6 py-16">

        <h2 className="mb-10 text-center text-3xl font-bold text-green-800">
          Our School Sections
        </h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

          <SchoolCard
            title="Nursery Section"
            description="Discover our Nursery section and the beginning of a child's learning journey."
          />

          <SchoolCard
            title="Primary Section"
            description="Explore our Primary section and opportunities for continued learning."
          />

        </div>

      </section>

      {/* Admissions Section */}
      <section
        id="admissions"
        className="bg-green-800 px-6 py-16 text-center text-white"
      >

        <h2 className="mb-4 text-3xl font-bold">
          Admissions
        </h2>

        <p className="mb-6 text-green-100">
          Explore admission opportunities at MISAB NOOR ACADEMY JANI.
        </p>

        <a
          href="mailto:misabnooracademy@gmail.com"
          className="rounded-lg bg-yellow-400 px-8 py-3 font-bold text-green-900 hover:bg-yellow-300"
        >
          Contact Us
        </a>

      </section>

    </main>
  );
}

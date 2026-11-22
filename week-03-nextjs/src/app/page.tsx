
import SchoolImageCard from "@/components/SchoolImageCard";
import SchoolCard from "@/components/SchoolCard";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
     
<section
  className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center px-6 py-20 text-center text-white"
  style={{
    backgroundImage: "url('/images/school-building.jpg')"
  }}
>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 mx-auto max-w-4xl">

    <p className="mb-4 font-semibold uppercase tracking-widest text-yellow-300">
      Nursery and Primary School
    </p>

    <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
      Welcome to MISAB NOOR ACADEMY JANI
    </h1>

    <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-green-50">
      Together We Grow, Together We Learn!
      Discover a welcoming environment for children's
      educational growth and development.
    </p>

    <a
      href="/admissions"
      className="inline-block rounded-lg bg-yellow-400 px-8 py-4 font-bold text-green-900 transition hover:bg-yellow-300"
    >
      Explore Admissions
    </a>

  </div>

</section>

      <section className="mx-auto max-w-6xl px-6 py-12">
  <Image
    src="/images/school-building.jpg"
    alt="MISAB NOOR ACADEMY JANI school building"
    width={1200}
    height={700}
    className="h-auto w-full rounded-2xl shadow-lg"
  />
</section>
<section className="bg-gray-50 px-6 py-16">
  <div className="mx-auto max-w-6xl">

    <h2 className="mb-10 text-center text-3xl font-bold text-green-800">
      Explore Our School Sections
    </h2>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">

      <SchoolImageCard
        title="Nursery Section"
        description="A welcoming introduction to early childhood learning."
        image="/images/nursery-class.jpg"
      />

      <SchoolImageCard
        title="Primary Section"
        description="Supporting children's continued educational development."
        image="/images/primary-class.jpg"
      />

    </div>
  </div>
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

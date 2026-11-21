
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Page Hero */}
      <section className="bg-green-800 px-6 py-20 text-center text-white">
        <p className="mb-3 font-semibold uppercase tracking-widest text-yellow-300">
          Get to Know Us
        </p>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          About Our School
        </h1>

        <p className="text-lg text-green-100">
          MISAB NOOR ACADEMY JANI
        </p>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">

          <div>
            <h2 className="mb-5 text-3xl font-bold text-green-800">
              Who We Are
            </h2>

            <p className="mb-4 leading-8 text-gray-600">
              MISAB NOOR ACADEMY JANI is an educational institution
              offering Nursery and Primary education.
            </p>

            <p className="leading-8 text-gray-600">
              Our motto, Together We Grow, Together We Learn!,
              reflects our commitment to creating a positive
              learning environment for children.
            </p>
          </div>

          <div className="flex min-h-64 items-center justify-center rounded-2xl bg-green-100 p-10">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-800">
                MISAB NOOR
              </h3>

              <p className="mt-2 font-semibold text-green-700">
                ACADEMY JANI
              </p>

              <p className="mt-4 text-sm italic text-gray-600">
                Together We Grow, Together We Learn!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Our Mission and Vision */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <h2 className="mb-10 text-center text-3xl font-bold text-green-800">
            Our Mission and Vision
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-xl bg-white p-8 shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-green-700">
                Our Mission
              </h3>

              <p className="leading-8 text-gray-600">
                To provide a supportive learning environment
                that encourages children's educational growth
                and development.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-green-700">
                Our Vision
              </h3>

              <p className="leading-8 text-gray-600">
                To support children in developing knowledge,
                confidence and a positive attitude towards learning.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our School Sections */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="mb-10 text-center text-3xl font-bold text-green-800">
          Our Educational Sections
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-xl border border-green-100 p-8">
            <h3 className="mb-3 text-2xl font-bold text-green-700">
              Nursery Education
            </h3>

            <p className="leading-7 text-gray-600">
              Our Nursery section introduces children to
              early learning and the school environment.
            </p>
          </div>

          <div className="rounded-xl border border-green-100 p-8">
            <h3 className="mb-3 text-2xl font-bold text-green-700">
              Primary Education
            </h3>

            <p className="leading-7 text-gray-600">
              Our Primary section provides opportunities
              for children to continue their educational journey.
            </p>
          </div>

        </div>
      </section>

      {/* Motto */}
      <section className="bg-green-800 px-6 py-16 text-center text-white">

        <h2 className="mb-5 text-3xl font-bold">
          Our Motto
        </h2>

        <p className="text-2xl font-semibold text-yellow-300">
          Together We Grow, Together We Learn!
        </p>

      </section>

    </main>
  );
}

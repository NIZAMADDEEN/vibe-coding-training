
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-green-800 px-6 py-20 text-center text-white">
        <p className="mb-3 font-semibold uppercase tracking-widest text-yellow-300">
          Get in Touch
        </p>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Contact Us
        </h1>

        <p className="text-lg text-green-100">
          We would be happy to hear from you.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <h2 className="mb-10 text-center text-3xl font-bold text-green-800">
          Our Contact Information
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Address */}
          <div className="rounded-xl bg-gray-50 p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-green-700">
              School Address
            </h3>

            <p className="leading-8 text-gray-600">
              Kofar Yamma, Marna, Jani,
              Mani Local Government,
              Katsina State, Nigeria.
            </p>
          </div>

          {/* Email */}
          <div className="rounded-xl bg-gray-50 p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-green-700">
              Email Address
            </h3>

            <a
              href="mailto:misabnooracademy@gmail.com"
              className="break-all text-green-700 underline hover:text-green-900"
            >
              misabnooracademy@gmail.com
            </a>
          </div>

        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="bg-green-50 px-6 py-16 text-center">

        <h2 className="mb-4 text-3xl font-bold text-green-800">
          Have an Enquiry?
        </h2>

        <p className="mb-8 text-gray-600">
          Send us an email for information about our Nursery
          and Primary sections.
        </p>

        <a
          href="mailto:misabnooracademy@gmail.com"
          className="inline-block rounded-lg bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
        >
          Send an Email
        </a>

      </section>

    </main>
  );
}

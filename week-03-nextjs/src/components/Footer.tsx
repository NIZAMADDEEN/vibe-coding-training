
export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-10 text-center text-white">

      <h2 className="mb-3 text-xl font-bold">
        MISAB NOOR ACADEMY JANI
      </h2>

      <p className="text-sm text-gray-300">
        Together We Grow, Together We Learn!
      </p>

      <div className="mt-5 space-y-2 text-sm text-gray-400">
        <p>
          Kofar Yamma, Marna, Jani, Mani LGA,
          Katsina State, Nigeria.
        </p>

        <p>
          Email: misabnooracademy@gmail.com
        </p>
      </div>

      <div className="mt-6 border-t border-gray-700 pt-5">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} MISAB NOOR ACADEMY JANI.
          All rights reserved.
        </p>
      </div>

    </footer>
  );
}

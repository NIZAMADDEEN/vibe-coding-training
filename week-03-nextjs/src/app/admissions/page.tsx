
import AdmissionForm from "@/components/AdmissionForm";

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-green-800 px-6 py-20 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold">
          Admissions
        </h1>

        <p className="text-green-100">
          Welcome to MISAB NOOR ACADEMY JANI.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-4 text-center text-3xl font-bold text-green-800">
          Admission Enquiry Form
        </h2>

        <p className="mb-10 text-center text-gray-600">
          Complete this form to make an admission enquiry.
        </p>

        <AdmissionForm />
      </section>

    </main>
  );
}

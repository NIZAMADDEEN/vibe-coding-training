
"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Student = {
  id: number;
  student_name: string;
  section: string;
  admission_date: string | null;
};

export default function StudentManagement() {
  const [students, setStudents] = useState<Student[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchStudents() {
    setLoading(true);
    setMessage("");

    const supabase = createClient();

    const { data, error } = await supabase
      .from("students")
      .select("id, student_name, section, admission_date")
      .order("id", { ascending: false });

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setStudents(data ?? []);
      setMessage(`Found ${data.length} student records.`);
    }

    setLoading(false);
  }

  return (
    <section className="mt-8 rounded-xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold text-green-800">
        Student Management
      </h2>

      <button
        onClick={fetchStudents}
        disabled={loading}
        className="mt-5 rounded-lg bg-green-700 px-5 py-3 text-white hover:bg-green-800 disabled:opacity-50"
      >
        {loading ? "Loading..." : "View Students"}
      </button>

      {message && (
        <p className="mt-4 text-gray-700">{message}</p>
      )}

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">ID</th>
              <th className="border p-3">Student Name</th>
              <th className="border p-3">Section</th>
              <th className="border p-3">Admission Date</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border p-3">{student.id}</td>
                <td className="border p-3">{student.student_name}</td>
                <td className="border p-3">{student.section}</td>
                <td className="border p-3">
                  {student.admission_date ?? "Not provided"}
                </td>
              </tr>
            ))}

            {students.length === 0 && (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No student records to display.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

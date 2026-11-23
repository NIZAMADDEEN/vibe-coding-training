
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

  const [studentName, setStudentName] = useState("");
  const [section, setSection] = useState("Nursery");

  // Editing states
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editSection, setEditSection] = useState("Nursery");

  // READ: Fetch students
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

  // CREATE: Add student
  async function addStudent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const supabase = createClient();

    const { error } = await supabase
      .from("students")
      .insert({
        student_name: studentName,
        section: section,
      });

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("Student added successfully!");
      setStudentName("");
      setSection("Nursery");
      await fetchStudents();
    }
  }

  // DELETE: Remove student
  async function deleteStudent(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmed) return;

    const supabase = createClient();

    const { error } = await supabase
      .from("students")
      .delete()
      .eq("id", id);

    if (error) {
      setMessage("Error deleting student: " + error.message);
    } else {
      setMessage("Student deleted successfully!");
      await fetchStudents();
    }
  }

  // Start editing a student
  function startEditing(student: Student) {
    setEditingId(student.id);
    setEditName(student.student_name);
    setEditSection(student.section);
    setMessage("");
  }

  // UPDATE: Save student changes
  async function updateStudent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (editingId === null) return;

    const supabase = createClient();

    const { error } = await supabase
      .from("students")
      .update({
        student_name: editName,
        section: editSection,
      })
      .eq("id", editingId);

    if (error) {
      setMessage("Error updating student: " + error.message);
    } else {
      setMessage("Student updated successfully!");
      setEditingId(null);
      setEditName("");
      setEditSection("Nursery");
      await fetchStudents();
    }
  }

  return (
    <section className="mt-8 rounded-xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold text-green-800">
        Student Management
      </h2>

      {/* Add Student Form */}
      <form onSubmit={addStudent} className="mt-5 space-y-4">
        <input
          type="text"
          placeholder="Enter student name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
          className="w-full rounded-lg border p-3"
        />

        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="w-full rounded-lg border p-3"
        >
          <option value="Nursery">Nursery</option>
          <option value="Primary">Primary</option>
        </select>

        <button
          type="submit"
          className="rounded-lg bg-blue-700 px-5 py-3 text-white hover:bg-blue-800"
        >
          Add Student
        </button>
      </form>

      {/* View Students */}
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

      {/* Edit Student Form */}
      {editingId !== null && (
        <form
          onSubmit={updateStudent}
          className="mt-6 space-y-4 rounded-lg border border-blue-300 bg-blue-50 p-4"
        >
          <h3 className="text-lg font-bold text-blue-800">
            Edit Student
          </h3>

          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            required
            className="w-full rounded-lg border p-3"
          />

          <select
            value={editSection}
            onChange={(e) => setEditSection(e.target.value)}
            className="w-full rounded-lg border p-3"
          >
            <option value="Nursery">Nursery</option>
            <option value="Primary">Primary</option>
          </select>

          <div className="flex gap-3">
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-5 py-3 text-white hover:bg-blue-800"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={() => setEditingId(null)}
              className="rounded-lg bg-gray-500 px-5 py-3 text-white hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Student Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">ID</th>
              <th className="border p-3">Student Name</th>
              <th className="border p-3">Section</th>
              <th className="border p-3">Admission Date</th>
              <th className="border p-3">Action</th>
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
                <td className="border p-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEditing(student)}
                      className="rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteStudent(student.id)}
                      className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {students.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="p-4 text-center text-gray-500"
                >
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

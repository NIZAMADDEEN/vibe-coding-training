
"use client";

import { useState } from "react";

export default function AdmissionForm() {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [studentName, setStudentName] = useState("");
  const [section, setSection] = useState("Nursery");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage(
      `Thank you, ${parentName}. Your enquiry form has been completed successfully.`
    );

    setParentName("");
    setEmail("");
    setStudentName("");
    setSection("Nursery");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl space-y-5 rounded-xl bg-white p-8 shadow-lg"
    >
      <div>
        <label className="mb-2 block font-semibold">
          Parent/Guardian Name
        </label>
        <input
          type="text"
          required
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
          className="w-full rounded-lg border p-3"
          placeholder="Enter parent or guardian name"
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Email Address
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border p-3"
          placeholder="Enter email address"
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Student Name
        </label>
        <input
          type="text"
          required
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="w-full rounded-lg border p-3"
          placeholder="Enter student name"
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Section
        </label>
        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="w-full rounded-lg border p-3"
        >
          <option value="Nursery">Nursery</option>
          <option value="Primary">Primary</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-green-700 py-3 font-bold text-white hover:bg-green-800"
      >
        Submit Enquiry
      </button>

      {message && (
        <p className="rounded-lg bg-green-100 p-4 text-green-800">
          {message}
        </p>
      )}
    </form>
  );
}

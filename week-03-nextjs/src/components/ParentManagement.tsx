
"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Parent = {
  id: number;
  parent_name: string;
  email: string | null;
  phone: string | null;
};

export default function ParentManagement() {
  const [parents, setParents] = useState<Parent[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Registration form
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Editing form
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");

  // READ: Fetch parents
  async function fetchParents() {
    setLoading(true);
    setMessage("");

    const supabase = createClient();

    const { data, error } = await supabase
      .from("parents")
      .select("id, parent_name, email, phone")
      .order("id", { ascending: false });

    if (error) {
      setMessage("Error loading parents: " + error.message);
    } else {
      setParents(data ?? []);
      setMessage(`Found ${data.length} parent records.`);
    }

    setLoading(false);
  }

  // CREATE: Add parent
  async function addParent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const supabase = createClient();

    const { error } = await supabase
      .from("parents")
      .insert({
        parent_name: parentName,
        email: email || null,
        phone: phone || null,
      });

    if (error) {
      setMessage("Error registering parent: " + error.message);
    } else {
      setMessage("Parent registered successfully!");

      setParentName("");
      setEmail("");
      setPhone("");

      await fetchParents();
    }
  }

  // Start editing
  function startEditing(parent: Parent) {
    setEditingId(parent.id);
    setEditName(parent.parent_name);
    setEditEmail(parent.email ?? "");
    setEditPhone(parent.phone ?? "");
    setMessage("");
  }

  // UPDATE: Save changes
  async function updateParent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (editingId === null) return;

    const supabase = createClient();

    const { error } = await supabase
      .from("parents")
      .update({
        parent_name: editName,
        email: editEmail || null,
        phone: editPhone || null,
      })
      .eq("id", editingId);

    if (error) {
      setMessage("Error updating parent: " + error.message);
    } else {
      setMessage("Parent details updated successfully!");

      setEditingId(null);
      setEditName("");
      setEditEmail("");
      setEditPhone("");

      await fetchParents();
    }
  }

  // DELETE: Remove parent
  async function deleteParent(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this parent?"
    );

    if (!confirmed) return;

    const supabase = createClient();

    const { error } = await supabase
      .from("parents")
      .delete()
      .eq("id", id);

    if (error) {
      setMessage("Error deleting parent: " + error.message);
    } else {
      setMessage("Parent deleted successfully!");
      await fetchParents();
    }
  }

  return (
    <section className="mt-8 rounded-xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold text-green-800">
        Parent Management
      </h2>

      {/* Register Parent */}
      <form onSubmit={addParent} className="mt-5 space-y-4">
        <input
          type="text"
          placeholder="Enter parent name"
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
          required
          className="w-full rounded-lg border p-3"
        />

        <input
          type="email"
          placeholder="Enter email address (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <input
          type="tel"
          placeholder="Enter phone number (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-700 px-5 py-3 text-white hover:bg-blue-800"
        >
          Register Parent
        </button>
      </form>

      {/* View Parents */}
      <button
        onClick={fetchParents}
        disabled={loading}
        className="mt-5 rounded-lg bg-green-700 px-5 py-3 text-white hover:bg-green-800 disabled:opacity-50"
      >
        {loading ? "Loading..." : "View Parents"}
      </button>

      {message && (
        <p className="mt-4 text-gray-700">{message}</p>
      )}

      {/* Edit Parent */}
      {editingId !== null && (
        <form
          onSubmit={updateParent}
          className="mt-6 space-y-4 rounded-lg border border-blue-300 bg-blue-50 p-4"
        >
          <h3 className="text-lg font-bold text-blue-800">
            Edit Parent Details
          </h3>

          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            required
            className="w-full rounded-lg border p-3"
          />

          <input
            type="email"
            placeholder="Email address"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
            className="w-full rounded-lg border p-3"
          />

          <input
            type="tel"
            placeholder="Phone number"
            value={editPhone}
            onChange={(e) => setEditPhone(e.target.value)}
            className="w-full rounded-lg border p-3"
          />

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

      {/* Parent Records Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">ID</th>
              <th className="border p-3">Parent Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Phone</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {parents.map((parent) => (
              <tr key={parent.id}>
                <td className="border p-3">{parent.id}</td>
                <td className="border p-3">{parent.parent_name}</td>
                <td className="border p-3">
                  {parent.email ?? "Not provided"}
                </td>
                <td className="border p-3">
                  {parent.phone ?? "Not provided"}
                </td>
                <td className="border p-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEditing(parent)}
                      className="rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteParent(parent.id)}
                      className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {parents.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="p-4 text-center text-gray-500"
                >
                  No parent records to display.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

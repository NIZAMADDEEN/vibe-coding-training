
"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function DatabaseTest() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function testDatabase() {
    setLoading(true);
    setMessage("");

    const supabase = createClient();

    const { data, error } = await supabase
      .from("students")
      .select("id")
      .limit(5);

    if (error) {
      setMessage("Database access failed: " + error.message);
    } else {
      setMessage(
        `Database access successful! Records found: ${data.length}`
      );
    }

    setLoading(false);
  }

  return (
    <div className="mt-8 rounded-xl bg-green-50 p-6">
      <h2 className="text-xl font-bold text-green-800">
        Database Security Test
      </h2>

      <button
        onClick={testDatabase}
        disabled={loading}
        className="mt-4 rounded-lg bg-green-700 px-5 py-3 text-white disabled:opacity-50"
      >
        {loading ? "Testing..." : "Test Database Access"}
      </button>

      {message && (
        <p className="mt-4 text-gray-700">{message}</p>
      )}
    </div>
  );
}

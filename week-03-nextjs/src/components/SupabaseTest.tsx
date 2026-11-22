
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function SupabaseTest() {
  const [status, setStatus] = useState("Checking connection...");

  useEffect(() => {
    async function testConnection() {
      const { error } = await supabase.auth.getSession();

      if (error) {
        setStatus("Connection failed: " + error.message);
      } else {
        setStatus("Supabase connection successful!");
      }
    }

    testConnection();
  }, []);

  return (
    <div className="rounded-xl bg-green-50 p-6 text-center">
      <h2 className="mb-3 text-xl font-bold text-green-800">
        Supabase Connection Test
      </h2>

      <p className="text-gray-700">{status}</p>
    </div>
  );
}

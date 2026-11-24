
import ParentManagement from "@/components/ParentManagement";
import DatabaseTest from "@/components/DatabaseTest";
import StudentManagement from "@/components/StudentManagement";
import LogoutButton from "@/components/LogoutButton";
import { connection } from "next/server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
export const instant = false;
export default async function DashboardPage() {
  // Wait for the incoming request
  await connection();

  // Connect to Supabase
  const supabase = await createClient();

  // Verify the user's session
  const { data, error } = await supabase.auth.getClaims();

  // Redirect if the user is not authenticated
  if (error || !data?.claims) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-green-800">
          MISAB NOOR ACADEMY
        </h1>

        <h2 className="mt-4 text-2xl font-semibold">
          Administrator Dashboard
        </h2>

        <p className="mt-4 text-gray-600">
          Welcome! You are successfully authenticated.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Your administrator dashboard is ready.
        </p>
        

        <DatabaseTest />
        <StudentManagement />
        <ParentManagement />
        <LogoutButton />
      </div>
    </main>
  );
}


"use client";

import { useState } from "react";

export default function WelcomeButton() {
  const [message, setMessage] = useState("Welcome to our school!");

  return (
    <div className="text-center">
      <p className="mb-4 text-lg font-semibold text-green-800">
        {message}
      </p>

      <button
        onClick={() =>
          setMessage("Thank you for visiting MISAB NOOR ACADEMY!")
        }
        className="rounded-lg bg-green-700 px-6 py-3 font-bold text-white hover:bg-green-800"
      >
        Click Me
      </button>
    </div>
  );
}

// app/login/page.tsx
"use client";

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F5FF]">
      <SignIn
        appearance={{
          elements: {
            rootBox: "w-full max-w-md",
            card: "bg-white rounded-lg shadow-lg p-8",
            headerTitle: "text-2xl font-bold text-[#101750]",
            headerSubtitle: "text-gray-600",
            formFieldInput: "w-full p-2 border border-gray-300 rounded-md",
            formButtonPrimary: "bg-[#FB2E86] hover:bg-[#FB2E86]/90 text-white font-bold py-2 px-4 rounded",
            footerActionText: "text-gray-600",
            footerActionLink: "text-[#FB2E86] hover:underline",
          },
        }}
      />
    </div>
  );
}
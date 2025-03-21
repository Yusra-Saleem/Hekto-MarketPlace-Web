"use client";

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center mx-auto px-4 sm:px-6 md:px-8 bg-[#F6F5FF]">
      <div className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md">
        <SignIn
          routing="path"
          path="/login"
          afterSignInUrl="/dashboard"
          signUpUrl="/sign-up"
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-white rounded-lg shadow-lg p-6 sm:p-8",
              headerTitle: "text-2xl font-bold text-[#101750] text-center",
              headerSubtitle: "text-gray-600 text-center",
              formFieldInput: "w-full p-2 border border-gray-300 rounded-md",
              formButtonPrimary:
                "bg-[#FB2E86] hover:bg-[#FB2E86]/90 text-white font-bold py-2 px-4 rounded w-full",
              footerActionText: "text-gray-600 text-center",
              footerActionLink: "text-[#FB2E86] hover:underline",
            },
          }}
        />
      </div>
    </div>
  );
}

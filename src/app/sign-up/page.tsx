"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center  sm:px-6 md:px-8 bg-[#F6F5FF]">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
        <SignUp
          routing="path"
          path="/sign-up"
          afterSignUpUrl="/dashboard"
          signInUrl="/login"
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-white rounded-lg shadow-lg p-6 sm:p-8",
              headerTitle: "text-2xl font-bold text-[#101750] text-center",
              headerSubtitle: "text-gray-600 text-center",
              formFieldInput: "w-full p-2 border border-gray-300 rounded-md",
              formButtonPrimary:
                "bg-[#FB2E86] hover:bg-[#FB2E86]/90 text-white border-none outline-none font-bold py-2 px-4 rounded w-full",
              footerActionText: "text-gray-600 text-center",
              footerActionLink: "text-[#FB2E86] hover:underline",
            },
          }}
        />
      </div>
    </div>
  );
}

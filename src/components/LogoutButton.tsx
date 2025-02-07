import { useClerk } from "@clerk/nextjs";

const LogoutButton = () => {
  const { signOut } = useClerk();

  return (
    <div className="text-center">
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
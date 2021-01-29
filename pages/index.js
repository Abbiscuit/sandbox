import { useAuth } from '../lib/auth';

export default function Home() {
  const { user, signinWithGoogle, signout } = useAuth();

  return (
    <>
      <main className="flex flex-col min-h-screen bg-blue-50">
        <h2 className="text-4xl font-bold text-gray-900">CallOut</h2>
        <img
          className="w-10 h-10 object-cover rounded-full shadow-md"
          src={user?.photoURL} // Shorthand for user && user.photoURL
          alt={user?.name}
        />
        <p className="text-base text-gray-600">
          Current user: <code className="bg-gray-300">{user?.email}</code>
        </p>

        {user ? (
          <button
            onClick={signout}
            className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md"
          >
            Logout👋🏻
          </button>
        ) : (
          <button
            onClick={signinWithGoogle}
            className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md"
          >
            Register Now🚀
          </button>
        )}
      </main>
    </>
  );
}

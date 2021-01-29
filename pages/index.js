import Head from 'next/head';
import { useAuth } from '../lib/auth';

export default function Home() {
  const { user, signinWithGoogle, signout } = useAuth();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col min-h-screen bg-gray-50">
        {user ? (
          <section className="p-4 bg-white m-4 rounded-md shadow-sm">
            <h3 className="text-xl mb-4">Hi, {user.email}</h3>
            <button
              onClick={signout}
              className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md"
            >
              Logout👋🏻
            </button>
          </section>
        ) : (
          <section className="p-4 bg-white m-4 rounded-md shadow-sm">
            <h3 className="text-4xl mb-4">Hi, Somebody!</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet.
            </p>
            <button
              onClick={signinWithGoogle}
              className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md"
            >
              Register Now🚀
            </button>
          </section>
        )}
      </main>
    </div>
  );
}

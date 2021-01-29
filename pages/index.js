import Layout from '../components/Layout';
import { useAuth } from '../lib/auth';

export default function Home() {
  const { user, signinWithGoogle, signout } = useAuth();

  return (
    <>
      <Layout>
        <div className="mb-4">
          {/* <div className="text-sm text-gray-600"></div> */}
          <h3 className="text-xl font-medium">CallOut</h3>
          <p className="text-sm text-gray-600">
            Current user: <code className="bg-yellow-200">{user?.email}</code>
          </p>
        </div>
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
      </Layout>
    </>
  );
}

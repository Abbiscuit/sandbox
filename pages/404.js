import Link from 'next/link';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-start">
        <div className="text-sm text-gray-600 sm:text-base">404</div>
        <h3 className="text-xl font-medium sm:text-4xl sm:font-bold mb-4">
          Page is not found...
        </h3>
        <Link href="/">
          <a className="inline-block px-4 py-2 text-blue-800 font-medium text-lg">
            ← Go back to home
          </a>
        </Link>
      </div>
    </Layout>
  );
}

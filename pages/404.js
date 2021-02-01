import Link from 'next/link';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout notFound title="Not Found" subTitle="404">
      <Link href="/">
        <a className="inline-block px-4 py-2 text-blue-800 font-medium text-lg">
          ← Go back to home
        </a>
      </Link>
    </Layout>
  );
}

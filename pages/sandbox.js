import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default function Sandbox() {
  return (
    <>
      <Layout>
        <section>
          <div className="mb-4">
            <div className="text-sm text-gray-600">Sites</div>
            <h3 className="text-xl font-medium">My Sites</h3>
          </div>

          <div className="bg-white flex flex-col rounded-md overflow-hidden shadow-md">
            <div className="border-b border-gray-100 min-h-10"></div>
            <div className="p-4 h-full">
              <h4 className="text-xl font-medium text-center text-gray-900 mb-4">
                Get feedback on your site...
              </h4>
              <p className="text-base font-base text-center text-gray-600 mb-4">
                Start today!
              </p>
              <button
                className="text-center mxauto w-full px-4 py-2 bg-blue-600 text-white rounded-full"
                type="button"
              >
                Update to PRO 🕊
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

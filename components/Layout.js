import { useRouter } from 'next/router';
import { FiPlus } from 'react-icons/fi';
import { useAuth } from '../lib/auth';
import Header from './Header';

export default function Layout({ children, notFound, title, subTitle }) {
  const { user } = useAuth();
  const history = useRouter();

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-blue-50 p-4 sm:p-8">
        <div className="flex justify-between items-end mb-8">
          {!notFound ? (
            <div className="flex flex-col items-start">
              <div className="text-sm text-gray-600 sm:text-base">
                {subTitle}
              </div>
              <h3 className="text-xl font-medium sm:text-4xl sm:font-bold">
                {title}
              </h3>
            </div>
          ) : (
            <div className="flex flex-col items-start">
              <div className="text-sm text-gray-600 sm:text-base">
                {subTitle}
              </div>
              <h3 className="text-xl font-medium sm:text-4xl sm:font-bold">
                {title}
              </h3>
            </div>
          )}

          {!notFound && user && (
            <>
              <button
                onClick={() => history.push('/add-site')}
                className="px-4 py-2 bg-blue-600 text-white rounded-full flex items-center shadow-md"
              >
                <span className="mr-2">{<FiPlus />}</span>
                Add Site
              </button>
            </>
          )}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}

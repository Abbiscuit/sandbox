import Router from 'next/router';
import { FiPlus } from 'react-icons/fi';

export default function DashboardShell({ children }) {
  return (
    <>
      <div className="flex items-end justify-between mb-4 sm:mb-8">
        <div className="flex flex-col items-start">
          <div className="text-sm text-gray-600 sm:text-base">Sites</div>
          <h3 className="text-xl font-medium sm:text-4xl sm:font-bold">
            My Sites
          </h3>
        </div>

        <button
          onClick={() => Router.push('/add-site')}
          className="px-4 py-2 bg-blue-600 text-white rounded-full flex items-center shadow-sm"
        >
          <span className="mr-2">{<FiPlus />}</span>
          Add Site
        </button>
      </div>

      <div className="bg-white flex flex-col rounded-md overflow-hidden shadow-sm">
        <div className="p-4 h-full">{children}</div>
      </div>
    </>
  );
}

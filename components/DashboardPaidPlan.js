import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import DashboardShell from './DashboardShell';

export default function DashboardPaidPlan({ sites }) {
  // if (!sites.length > 0) {
  //   return (
  //     <>
  //       <h4 className="text-xl font-medium text-center  text-gray-900 mb-2">
  //         You haven't added any sites.
  //       </h4>
  //       <p className="text-base font-base text-center  text-gray-600 mb-2">
  //         Start now 🥰
  //       </p>
  //     </>
  //   );
  // }

  return (
    <DashboardShell>
      <table className="table-fixed w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left pb-2">Name</th>
            <th className="text-left pb-2">Site Link</th>
            <th className="text-left pb-2">Feedback Link</th>
            <th className="text-left pb-2">Date Added</th>
          </tr>
        </thead>
        <tbody>
          {sites.length > 0 ? (
            sites.map(site => (
              <tr key={site.id}>
                <td className="text-sm text-gray-900 pt-2 truncate font-medium">
                  {site.name}
                </td>
                <td className="text-sm text-gray-600 pt-2 truncate">
                  <a className="underline" href={site.link} target="_blank">
                    {site.link}
                  </a>
                </td>
                <td className="text-sm text-gray-600 pt-2 truncate pl-2">
                  View Feedback
                </td>
                <td className="text-sm text-gray-600 pt-2 truncate">
                  {format(parseISO(site.createdAt), 'PPpp')}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data to display...</td>
            </tr>
          )}
        </tbody>
      </table>
    </DashboardShell>
  );
}

DashboardShell.defaultProps = {
  sites: [],
};

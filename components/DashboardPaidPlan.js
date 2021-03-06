import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import DashboardShell from './DashboardShell';

export default function DashboardPaidPlan({ sites }) {
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
            sites.map(site => {
              return (
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
                    <Link href={`/p/${site.id}`}>View Feedback</Link>
                  </td>
                  <td className="text-sm text-gray-600 pt-2 truncate">
                    {format(parseISO(site.createdAt), 'PPpp')}
                  </td>
                </tr>
              );
            })
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

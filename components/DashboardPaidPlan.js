import DashboardShell from './DashboardShell';

export default function DashboardPaidPlan({ sites }) {
  return (
    <DashboardShell>
      {sites ? (
        <table className="table-auto w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left pb-2">Name</th>
              <th className="text-left pb-2">Site Link</th>
              <th className="text-left pb-2">Feedback Link</th>
              <th className="text-left pb-2">Date Added</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-sm text-gray-600 pt-2">
                https://localhost:3000
              </td>
              <td className="text-sm text-gray-600 pt-2">
                https://localhost:3000
              </td>
              <td className="text-sm text-gray-600 pt-2">
                https://localhost:3000
              </td>
              <td className="text-sm text-gray-600 pt-2">
                https://localhost:3000
              </td>
            </tr>
            <tr>
              <td className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet.
              </td>
              <td className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet.
              </td>
              <td className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet.
              </td>
              <td className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet.
              </td>
            </tr>
            <tr>
              <td className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet.
              </td>
              <td className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet.
              </td>
              <td className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet.
              </td>
              <td className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet.
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <>
          <h4 className="text-xl font-medium text-center  text-gray-900 mb-2">
            You haven't added any sites.
          </h4>
          <p className="text-base font-base text-center  text-gray-600 mb-2">
            Start now 🥰
          </p>
        </>
      )}
    </DashboardShell>
  );
}

import DashboardShell from './DashboardShell';

export default function DashboardPaidPlan() {
  return (
    <DashboardShell>
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
    </DashboardShell>
  );
}

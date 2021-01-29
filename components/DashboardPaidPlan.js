import DashboardShell from './DashboardShell';

export default function DashboardPaidPlan() {
  return (
    <DashboardShell>
      <h4 className="text-xl font-medium text-center text-gray-900 mb-4">
        You haven't added any sites.
      </h4>
      <p className="text-base font-base text-center text-gray-600 mb-4">
        Welcome👋🏻 Let's get started now!
      </p>
      <button
        className="text-center mxauto w-full px-4 py-2 bg-blue-600 text-white rounded-full"
        type="button"
      >
        Add Your First Site 🕊
      </button>
    </DashboardShell>
  );
}

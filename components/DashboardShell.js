export default function DashboardShell({ children }) {
  return (
    <>
      <div className="mb-4">
        <div className="text-sm text-gray-600">Sites</div>
        <h3 className="text-xl font-medium">My Sites</h3>
      </div>

      <div className="bg-white flex flex-col rounded-md overflow-hidden shadow-md">
        <div className="border-b border-gray-100 min-h-10 flex items-center flex-col"></div>
        <div className="p-4 h-full">{children}</div>
      </div>
    </>
  );
}

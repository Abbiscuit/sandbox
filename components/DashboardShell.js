export default function DashboardShell({ children }) {
  return (
    <>
      <div className="bg-white flex flex-col rounded-md overflow-hidden shadow-sm">
        <div className="p-4 h-full">{children}</div>
      </div>
    </>
  );
}

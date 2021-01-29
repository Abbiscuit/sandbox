import { useAuth } from '../lib/auth';
import DashboardShell from './DashboardShell';

export default function DashboardFreePlan() {
  const { user, signinWithGoogle, signout } = useAuth();

  return (
    <DashboardShell>
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
    </DashboardShell>
  );
}

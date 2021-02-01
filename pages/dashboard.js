import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

// import DashboardFreePlan from '../components/DashboardFreePlan';
import DashboardPaidPlan from '../components/DashboardPaidPlan';
import Layout from '../components/Layout';
import RoundedButton from '../components/RoundedButton';
import { useAuth } from '../lib/auth';
import { FiAlertCircle, FiClock } from 'react-icons/fi';

export default function Dashboard() {
  const { user, signinWithGoogle, signout, loading } = useAuth();
  const { data, error } = useSWR('/api/sites', fetcher);

  if (!user)
    return (
      <>
        <Layout title="My Sites" subTitle="site">
          <div className="mb-4">
            <h3 className="text-xl font-medium">
              {loading ? 'Loading...' : 'Welcome!'}
            </h3>
          </div>

          {!loading && (
            <RoundedButton
              onClick={signinWithGoogle}
              label={`Google Signin 🥰`}
              type="button"
            />
          )}
        </Layout>
      </>
    );
  return (
    <>
      <Layout title="My Sites" subTitle="site" feedback>
        {error && <ErrorMessage />}
        {!data ? <Message /> : <DashboardPaidPlan sites={data.sites} />}
      </Layout>
    </>
  );
}

/* Temp */
function ErrorMessage() {
  return (
    <div className="bg-red-400  text-gray-900 p-2 rounded-md flex flex-row items-center">
      <span className="mr-2">
        <FiAlertCircle />
      </span>
      Failed to load...
    </div>
  );
}

/* Temp */
function Message() {
  return (
    <div className="bg-green-400  text-gray-900 p-2 rounded-md flex flex-row items-center">
      <span className="mr-2">
        <FiClock />
      </span>
      Loading...
    </div>
  );
}

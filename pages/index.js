import DashboardFreePlan from '../components/DashboardFreePlan';
import Layout from '../components/Layout';
import { useAuth } from '../lib/auth';

export default function Home() {
  const { user, signinWithGoogle, signout } = useAuth();

  if (!user)
    return (
      <>
        <Layout>
          <div className="mb-4">
            <h3 className="text-xl font-medium">Loading</h3>
          </div>
        </Layout>
      </>
    );

  return (
    <>
      <Layout>
        <DashboardFreePlan />
      </Layout>
    </>
  );
}

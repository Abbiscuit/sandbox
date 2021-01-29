import Link from 'next/link';
import DashboardFreePlan from '../components/DashboardFreePlan';
import DashboardPaidPlan from '../components/DashboardPaidPlan';
import Layout from '../components/Layout';
import RoundedButton from '../components/RoundedButton';
import { useAuth } from '../lib/auth';

export default function Sandbox() {
  const { signout, signinWithGoogle } = useAuth();

  return (
    <>
      <Layout>
        <DashboardFreePlan />
        {/* <DashboardPaidPlan /> */}

        <RoundedButton
          onClick={signout}
          label={` Sign out 👋🏻`}
          type="button"
          outlined
        />
        <RoundedButton
          onClick={signinWithGoogle}
          label={`Google Auth 👋🏻`}
          type="button"
        />
      </Layout>
    </>
  );
}

import Link from 'next/link';
import DashboardFreePlan from '../components/DashboardFreePlan';
import DashboardPaidPlan from '../components/DashboardPaidPlan';
import Layout from '../components/Layout';
import RoundedButton from '../components/RoundedButton';
import { useAuth } from '../lib/auth';

export default function Sandbox() {
  const { signout, signinWithGoogle, user } = useAuth();

  return (
    <>
      <Layout title="Get started now" subTitle="welcome">
        {!user ? (
          <RoundedButton
            onClick={signinWithGoogle}
            label={`Google Auth 👋🏻`}
            type="button"
          />
        ) : (
          <RoundedButton
            onClick={signout}
            label={` Sign out 👋🏻`}
            type="button"
            outlined
          />
        )}
      </Layout>
    </>
  );
}

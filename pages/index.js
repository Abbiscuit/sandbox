import DashboardFreePlan from '../components/DashboardFreePlan';
import DashboardPaidPlan from '../components/DashboardPaidPlan';
import Layout from '../components/Layout';
import RoundedButton from '../components/RoundedButton';
import { useAuth } from '../lib/auth';

export default function Home() {
  const { user, signinWithGoogle, signout, loading } = useAuth();

  // if (loading)
  //   return (
  //     <>
  //       <Layout>
  //         <div className="mb-4">
  //           <h3 className="text-xl font-medium">Loading...</h3>
  //         </div>
  //       </Layout>
  //     </>
  //   );

  // if (!user)
  //   return (
  //     <>
  //       <Layout>
  //         <div className="mb-4">
  //           <h3 className="text-xl font-medium">
  //             {loading ? 'Loading...' : 'Welcome!'}
  //           </h3>
  //         </div>

  //         {!loading && (
  //           <RoundedButton
  //             onClick={signinWithGoogle}
  //             label={`Google Signin 🥰`}
  //             type="button"
  //           />
  //         )}
  //       </Layout>
  //     </>
  //   );

  return (
    <Layout>
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
  );
}

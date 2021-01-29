import Link from 'next/link';
import DashboardFreePlan from '../components/DashboardFreePlan';
import DashboardPaidPlan from '../components/DashboardPaidPlan';
import Layout from '../components/Layout';

export default function Sandbox() {
  return (
    <>
      <Layout>
        <DashboardFreePlan />
        {/* <DashboardPaidPlan /> */}
      </Layout>
    </>
  );
}

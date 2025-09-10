import { DashboardHome } from "@/components/dashboard/DashboardHome";

interface DashboardProps {
  userName: string;
  userRole: 'teacher' | 'parent' | 'admin';
}

const Dashboard = ({ userName, userRole }: DashboardProps) => {
  return (
    <div>
      <DashboardHome userName={userName} userRole={userRole} />
    </div>
  );
};

export default Dashboard;
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@/pages/Index";
import { Layout } from "./Layout";

interface AuthenticatedPageProps {
  children: ReactNode;
  onLogout?: () => void;
}

export const AuthenticatedPage = ({ children, onLogout }: AuthenticatedPageProps) => {
  const { user, setUser } = useUser();
  
  const handleLogout = () => {
    setUser(null);
    if (onLogout) onLogout();
  };

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout userName={user.name} userRole={user.role} onLogout={handleLogout}>
      {children}
    </Layout>
  );
};
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "./Layout";

interface PageWrapperProps {
  children: ReactNode;
  user: { name: string; role: 'teacher' | 'parent' | 'admin'; email: string } | null;
  onLogout: () => void;
}

export const PageWrapper = ({ children, user, onLogout }: PageWrapperProps) => {
  const location = useLocation();
  
  if (!user) {
    return <>{children}</>;
  }

  // Don't wrap login page
  if (location.pathname === "/" && !user) {
    return <>{children}</>;
  }

  return (
    <Layout userName={user.name} userRole={user.role} onLogout={onLogout}>
      {children}
    </Layout>
  );
};
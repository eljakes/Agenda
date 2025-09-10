import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
  userName: string;
  userRole: 'teacher' | 'parent' | 'admin';
  onLogout: () => void;
}

export const Layout = ({ children, userName, userRole, onLogout }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header userName={userName} userRole={userRole} onLogout={onLogout} />
      <div className="flex h-[calc(100vh-80px)]">
        <Sidebar userRole={userRole} />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
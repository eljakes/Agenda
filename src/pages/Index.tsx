import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import Login from "./Login";
import Dashboard from "./Dashboard";

// Mock user data - In real app, this would come from authentication
const mockUsers = {
  'teacher@school.edu': { name: 'Elvis Sekyere', role: 'teacher' as const },
  'parent@email.com': { name: 'John Parent', role: 'parent' as const },
  'admin@school.edu': { name: 'Admin User', role: 'admin' as const },
};

const Index = () => {
  const [user, setUser] = useState<{ name: string; role: 'teacher' | 'parent' | 'admin'; email: string } | null>(null);

  const handleLogin = (email: string, password: string, role: string) => {
    // Mock authentication - In real app, this would be handled by Supabase
    if (email in mockUsers && password === 'demo123') {
      const userData = mockUsers[email as keyof typeof mockUsers];
      if (userData.role === role) {
        setUser({ ...userData, email });
        return;
      }
    }
    throw new Error('Invalid credentials');
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Layout userName={user.name} userRole={user.role} onLogout={handleLogout}>
      <Dashboard userName={user.name} userRole={user.role} />
    </Layout>
  );
};

export default Index;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index, { UserContext } from "./pages/Index";
import Calendar from "./pages/Calendar";
import Agenda from "./pages/Agenda";
import Classes from "./pages/Classes";
import CreateAssignment from "./pages/CreateAssignment";
import StudentProgress from "./pages/Progress";
import Users from "./pages/Users";
import SchoolSettings from "./pages/SchoolSettings";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import { AuthenticatedPage } from "./components/layout/AuthenticatedPage";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<{ name: string; role: 'teacher' | 'parent' | 'admin'; email: string } | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <UserContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={
                <AuthenticatedPage>
                  <Index />
                </AuthenticatedPage>
              } />
              <Route path="/calendar" element={
                <AuthenticatedPage>
                  <Calendar userRole={user?.role || 'teacher'} />
                </AuthenticatedPage>
              } />
              <Route path="/agenda" element={
                <AuthenticatedPage>
                  <Agenda userRole={user?.role || 'teacher'} />
                </AuthenticatedPage>
              } />
              <Route path="/classes" element={
                <AuthenticatedPage>
                  <Classes />
                </AuthenticatedPage>
              } />
              <Route path="/create-assignment" element={
                <AuthenticatedPage>
                  <CreateAssignment />
                </AuthenticatedPage>
              } />
              <Route path="/progress" element={
                <AuthenticatedPage>
                  <StudentProgress />
                </AuthenticatedPage>
              } />
              <Route path="/users" element={
                <AuthenticatedPage>
                  <Users />
                </AuthenticatedPage>
              } />
              <Route path="/school-settings" element={
                <AuthenticatedPage>
                  <SchoolSettings />
                </AuthenticatedPage>
              } />
              <Route path="/help" element={
                <AuthenticatedPage>
                  <Help />
                </AuthenticatedPage>
              } />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

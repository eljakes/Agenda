import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  Calendar, 
  BookOpen, 
  FileText, 
  GraduationCap, 
  Users, 
  Settings,
  HelpCircle,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  userRole: 'teacher' | 'parent' | 'admin';
}

const getNavigationItems = (userRole: string) => {
  const baseItems = [
    { title: "Home", url: "/dashboard", icon: Home },
    { title: "Calendar", url: "/calendar", icon: Calendar },
    { title: "Agenda", url: "/agenda", icon: BookOpen },
  ];

  const roleSpecificItems = {
    teacher: [
      { title: "My Classes", url: "/classes", icon: GraduationCap },
      { title: "Create Assignment", url: "/create-assignment", icon: FileText },
    ],
    parent: [
      { title: "Student Progress", url: "/progress", icon: GraduationCap },
    ],
    admin: [
      { title: "Manage Users", url: "/users", icon: Users },
      { title: "School Settings", url: "/school-settings", icon: Settings },
    ],
  };

  return [
    ...baseItems,
    ...roleSpecificItems[userRole as keyof typeof roleSpecificItems] || [],
    { title: "Help Center", url: "/help", icon: HelpCircle },
  ];
};

export const Sidebar = ({ userRole }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const navigationItems = getNavigationItems(userRole);

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside 
      className={cn(
        "bg-white border-r border-border transition-all duration-300 ease-in-out flex flex-col",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-lg font-semibold text-primary">Navigation</h2>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-primary/10"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.url}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive(item.url)
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:bg-primary/10 hover:text-primary",
                  isCollapsed ? "justify-center" : ""
                )}
              >
                <item.icon className={cn("h-5 w-5", isCollapsed ? "mx-auto" : "")} />
                {!isCollapsed && <span>{item.title}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {!isCollapsed && (
        <div className="p-4 border-t border-border">
          <div className="text-xs text-muted-foreground text-center">
            eSchool Agenda v2.0
          </div>
        </div>
      )}
    </aside>
  );
};
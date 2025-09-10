import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, Users, TrendingUp, Plus, FileText } from "lucide-react";

interface DashboardHomeProps {
  userName: string;
  userRole: 'teacher' | 'parent' | 'admin';
}

export const DashboardHome = ({ userName, userRole }: DashboardHomeProps) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const getQuickActions = () => {
    switch (userRole) {
      case 'teacher':
        return [
          { title: "Create Homework", icon: Plus, description: "Add new assignment", color: "bg-primary" },
          { title: "Schedule Exam", icon: Calendar, description: "Set exam date", color: "bg-info" },
          { title: "View Classes", icon: Users, description: "Manage students", color: "bg-success" },
        ];
      case 'parent':
        return [
          { title: "View Homework", icon: BookOpen, description: "Check assignments", color: "bg-primary" },
          { title: "Exam Schedule", icon: Calendar, description: "Upcoming exams", color: "bg-warning" },
          { title: "Progress Report", icon: TrendingUp, description: "Student performance", color: "bg-info" },
        ];
      case 'admin':
        return [
          { title: "Manage Users", icon: Users, description: "Add/Edit users", color: "bg-primary" },
          { title: "School Reports", icon: FileText, description: "Generate reports", color: "bg-success" },
          { title: "System Settings", icon: Calendar, description: "Configure system", color: "bg-warning" },
        ];
      default:
        return [];
    }
  };

  const quickActions = getQuickActions();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-primary rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          {getGreeting()}, {userName.split(' ')[0]}!
        </h1>
        <p className="text-white/90">
          Welcome back to your {userRole} dashboard. Here's what's happening today.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <Card key={index} className="hover:shadow-card-custom transition-shadow cursor-pointer group">
            <CardHeader className="pb-3">
              <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <action.icon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">{action.title}</CardTitle>
              <CardDescription>{action.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Today's Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Today's Schedule</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {userRole === 'teacher' ? (
                <>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">Grade 4 English</p>
                      <p className="text-sm text-muted-foreground">9:00 AM - 10:00 AM</p>
                    </div>
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">Grade 5 Mathematics</p>
                      <p className="text-sm text-muted-foreground">11:00 AM - 12:00 PM</p>
                    </div>
                    <span className="text-xs bg-muted-foreground text-white px-2 py-1 rounded">Upcoming</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">Math Homework Due</p>
                      <p className="text-sm text-muted-foreground">Chapter 5 exercises</p>
                    </div>
                    <span className="text-xs bg-warning text-warning-foreground px-2 py-1 rounded">Due Today</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">Science Test</p>
                      <p className="text-sm text-muted-foreground">Tomorrow at 10:00 AM</p>
                    </div>
                    <span className="text-xs bg-info text-info-foreground px-2 py-1 rounded">Tomorrow</span>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-success" />
              <span>Quick Stats</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userRole === 'teacher' ? (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Students</span>
                    <span className="font-semibold text-lg">142</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Assignments</span>
                    <span className="font-semibold text-lg">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Pending Reviews</span>
                    <span className="font-semibold text-lg">23</span>
                  </div>
                </>
              ) : userRole === 'parent' ? (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Assignments This Week</span>
                    <span className="font-semibold text-lg">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Completed</span>
                    <span className="font-semibold text-lg text-success">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Average Grade</span>
                    <span className="font-semibold text-lg">87%</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Students</span>
                    <span className="font-semibold text-lg">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Teachers</span>
                    <span className="font-semibold text-lg">45</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">System Uptime</span>
                    <span className="font-semibold text-lg text-success">99.9%</span>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
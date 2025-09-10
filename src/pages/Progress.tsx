import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const StudentProgress = () => {
  const subjects = [
    { name: "Mathematics", grade: "A-", progress: 85, assignments: 12, completed: 10 },
    { name: "English", grade: "B+", progress: 78, assignments: 8, completed: 7 },
    { name: "Science", grade: "A", progress: 92, assignments: 10, completed: 10 },
    { name: "History", grade: "B", progress: 72, assignments: 6, completed: 5 },
    { name: "Geography", grade: "A-", progress: 88, assignments: 7, completed: 6 },
  ];

  const recentAssignments = [
    { title: "Math Chapter 5 Test", subject: "Mathematics", grade: "A", date: "Dec 8, 2024", status: "completed" },
    { title: "English Essay - Future Goals", subject: "English", grade: "B+", date: "Dec 10, 2024", status: "completed" },
    { title: "Science Lab Report", subject: "Science", grade: "Pending", date: "Dec 12, 2024", status: "submitted" },
    { title: "History Timeline Project", subject: "History", grade: "Pending", date: "Dec 15, 2024", status: "assigned" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500";
      case "submitted": return "bg-yellow-500";
      case "assigned": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Student Progress</h1>
        <p className="text-muted-foreground">Track your child's academic performance</p>
      </div>
      
      <div className="grid gap-6">
        {/* Overall Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Overall Performance</CardTitle>
            <CardDescription>Your child's progress across all subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {subjects.map((subject) => (
                <div key={subject.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium">{subject.name}</h3>
                      <Badge variant="secondary">{subject.grade}</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {subject.completed}/{subject.assignments} assignments
                    </span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">{subject.progress}% progress</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Assignments */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Assignments</CardTitle>
            <CardDescription>Latest assignment submissions and grades</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAssignments.map((assignment, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(assignment.status)}`} />
                    <div>
                      <h4 className="font-medium">{assignment.title}</h4>
                      <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{assignment.grade}</p>
                    <p className="text-xs text-muted-foreground">{assignment.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Attendance */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance Summary</CardTitle>
            <CardDescription>Monthly attendance record</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <h3 className="text-2xl font-bold text-green-600">96%</h3>
                <p className="text-sm text-muted-foreground">Overall Attendance</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600">22</h3>
                <p className="text-sm text-muted-foreground">Days Present</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentProgress;
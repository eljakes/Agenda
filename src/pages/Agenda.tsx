import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

interface AgendaProps {
  userRole: 'teacher' | 'parent' | 'admin';
}

const Agenda = ({ userRole }: AgendaProps) => {
  const [subject, setSubject] = useState("");
  const [homework, setHomework] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Homework Added",
      description: `${subject} homework has been added to the agenda.`,
    });

    // Reset form
    setSubject("");
    setHomework("");
    setDueDate("");
    setPriority("");
  };

  if (userRole === 'parent') {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Agenda</h1>
          <p className="text-muted-foreground">View your child's homework and assignments</p>
        </div>
        
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Mathematics - Chapter 5 Exercises</h4>
                    <p className="text-sm text-muted-foreground">Complete exercises 1-15</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-destructive">Due: Dec 12</span>
                    <p className="text-xs text-muted-foreground">High Priority</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">English - Essay Writing</h4>
                    <p className="text-sm text-muted-foreground">Write a 500-word essay on "My Future Goals"</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium">Due: Dec 14</span>
                    <p className="text-xs text-muted-foreground">Medium Priority</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Homework Agenda</h1>
        <p className="text-muted-foreground">Create and manage homework assignments</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Add New Homework</CardTitle>
          <CardDescription>Create homework assignments for students</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select value={subject} onValueChange={setSubject} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                    <SelectItem value="geography">Geography</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select value={priority} onValueChange={setPriority} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="homework">Homework Description</Label>
              <Textarea
                id="homework"
                value={homework}
                onChange={(e) => setHomework(e.target.value)}
                placeholder="Enter homework details..."
                rows={4}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
            </div>
            
            <Button type="submit" className="w-full">
              Add Homework
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Agenda;
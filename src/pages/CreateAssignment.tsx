import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

const CreateAssignment = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [classId, setClassId] = useState("");
  const [instructions, setInstructions] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [points, setPoints] = useState("");
  const [allowLateSubmission, setAllowLateSubmission] = useState(false);
  const [notifyParents, setNotifyParents] = useState(true);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Assignment Created",
      description: `"${title}" has been created and assigned to students.`,
    });

    // Reset form
    setTitle("");
    setSubject("");
    setClassId("");
    setInstructions("");
    setDueDate("");
    setDueTime("");
    setPoints("");
    setAllowLateSubmission(false);
    setNotifyParents(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Create Assignment</h1>
        <p className="text-muted-foreground">Create new assignments for your students</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Assignment Details</CardTitle>
          <CardDescription>Fill in the assignment information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Assignment Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter assignment title"
                  required
                />
              </div>
              
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
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="classId">Class</Label>
                <Select value={classId} onValueChange={setClassId} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="class-10a">Class 10-A</SelectItem>
                    <SelectItem value="class-10b">Class 10-B</SelectItem>
                    <SelectItem value="class-11a">Class 11-A</SelectItem>
                    <SelectItem value="class-11b">Class 11-B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="points">Points</Label>
                <Input
                  id="points"
                  type="number"
                  value={points}
                  onChange={(e) => setPoints(e.target.value)}
                  placeholder="Total points"
                  min="1"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="instructions">Assignment Instructions</Label>
              <Textarea
                id="instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Provide detailed instructions for the assignment..."
                rows={6}
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
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
              
              <div className="space-y-2">
                <Label htmlFor="dueTime">Due Time</Label>
                <Input
                  id="dueTime"
                  type="time"
                  value={dueTime}
                  onChange={(e) => setDueTime(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="lateSubmission">Allow Late Submission</Label>
                  <p className="text-sm text-muted-foreground">
                    Students can submit after the due date
                  </p>
                </div>
                <Switch
                  id="lateSubmission"
                  checked={allowLateSubmission}
                  onCheckedChange={setAllowLateSubmission}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifyParents">Notify Parents</Label>
                  <p className="text-sm text-muted-foreground">
                    Send notification to parents about this assignment
                  </p>
                </div>
                <Switch
                  id="notifyParents"
                  checked={notifyParents}
                  onCheckedChange={setNotifyParents}
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full">
              Create Assignment
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateAssignment;
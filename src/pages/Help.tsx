import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const Help = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Support Ticket Created",
      description: "Your support request has been submitted. We'll get back to you soon!",
    });

    setSubject("");
    setMessage("");
  };

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login page, enter your email address, and follow the instructions sent to your email."
    },
    {
      question: "How do teachers create assignments?",
      answer: "Teachers can create assignments by navigating to 'Create Assignment' in the sidebar, filling out the assignment details, and clicking 'Create Assignment'."
    },
    {
      question: "Can parents see all their child's assignments?",
      answer: "Yes, parents can view all their child's assignments, homework, and progress by logging into their parent account and visiting the 'Agenda' or 'Student Progress' sections."
    },
    {
      question: "How do I change notification settings?",
      answer: "Notification settings can be managed in your profile settings. Click on your name in the header and select 'Settings'."
    },
    {
      question: "What should I do if I can't access my account?",
      answer: "If you're having trouble accessing your account, contact the school administrator or use the support form below to get assistance."
    }
  ];

  const quickLinks = [
    { title: "User Guide", description: "Complete guide for using the system", status: "Available" },
    { title: "Video Tutorials", description: "Step-by-step video instructions", status: "Coming Soon" },
    { title: "System Status", description: "Check current system status", status: "Online" },
    { title: "Contact Support", description: "Direct contact information", status: "Available" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Help Center</h1>
        <p className="text-muted-foreground">Find answers to common questions or contact support</p>
      </div>
      
      <div className="grid gap-6">
        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>Common resources and tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{link.title}</h3>
                    <Badge variant={link.status === "Online" ? "default" : link.status === "Available" ? "secondary" : "outline"}>
                      {link.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Find answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Can't find what you're looking for? Send us a message</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Brief description of your issue"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your issue in detail..."
                  rows={6}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Support Request
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Support</CardTitle>
            <CardDescription>Other ways to get help</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground">support@school.edu</p>
                <p className="text-xs text-muted-foreground mt-1">Response within 24 hours</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Phone Support</h3>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-xs text-muted-foreground mt-1">Mon-Fri 8AM-5PM</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground">Main Office</p>
                <p className="text-xs text-muted-foreground mt-1">Mon-Fri 7:30AM-4:30PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;
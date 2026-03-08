import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const patients = [
  { id: 'OPD-001', name: 'Rahul Kumar', doctor: 'Dr. Sharma', dept: 'Cardiology', time: '09:00 AM', status: 'Completed' },
  { id: 'OPD-002', name: 'Priya Singh', doctor: 'Dr. Verma', dept: 'Neurology', time: '09:30 AM', status: 'In Progress' },
  { id: 'OPD-003', name: 'Amit Patel', doctor: 'Dr. Gupta', dept: 'Orthopedics', time: '10:00 AM', status: 'Waiting' },
  { id: 'OPD-004', name: 'Sneha Gupta', doctor: 'Dr. Sharma', dept: 'Cardiology', time: '10:30 AM', status: 'Scheduled' },
  { id: 'OPD-005', name: 'Vijay Sharma', doctor: 'Dr. Patel', dept: 'General', time: '11:00 AM', status: 'Scheduled' },
];

const OPDPage: React.FC = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">OPD Management</h1>
          <p className="text-muted-foreground">Out-Patient Department</p>
        </div>
        <Button><Plus className="w-4 h-4 mr-2" />New OPD Entry</Button>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search patients..." className="pl-9" />
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50 text-left text-muted-foreground">
                <th className="p-4 font-medium">OPD ID</th>
                <th className="p-4 font-medium">Patient</th>
                <th className="p-4 font-medium">Doctor</th>
                <th className="p-4 font-medium">Department</th>
                <th className="p-4 font-medium">Time</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-mono text-xs text-primary">{p.id}</td>
                  <td className="p-4 font-medium text-foreground">{p.name}</td>
                  <td className="p-4 text-muted-foreground">{p.doctor}</td>
                  <td className="p-4 text-muted-foreground">{p.dept}</td>
                  <td className="p-4 text-muted-foreground">{p.time}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      p.status === 'Completed' ? 'bg-success/10 text-success' :
                      p.status === 'In Progress' ? 'bg-primary/10 text-primary' :
                      p.status === 'Waiting' ? 'bg-warning/10 text-warning' :
                      'bg-muted text-muted-foreground'
                    }`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default OPDPage;

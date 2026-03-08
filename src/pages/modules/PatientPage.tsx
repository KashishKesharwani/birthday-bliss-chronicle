import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const patients = [
  { id: 'P-1001', name: 'Rahul Kumar', age: 45, gender: 'Male', phone: '+91 98765 43210', blood: 'O+', status: 'Active' },
  { id: 'P-1002', name: 'Priya Singh', age: 32, gender: 'Female', phone: '+91 87654 32109', blood: 'A+', status: 'Active' },
  { id: 'P-1003', name: 'Amit Patel', age: 58, gender: 'Male', phone: '+91 76543 21098', blood: 'B+', status: 'Discharged' },
  { id: 'P-1004', name: 'Sneha Gupta', age: 28, gender: 'Female', phone: '+91 65432 10987', blood: 'AB+', status: 'Active' },
  { id: 'P-1005', name: 'Vijay Sharma', age: 67, gender: 'Male', phone: '+91 54321 09876', blood: 'O-', status: 'Critical' },
];

const PatientPage: React.FC = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Patient Management</h1>
          <p className="text-muted-foreground">View and manage all patients</p>
        </div>
        <Button><Plus className="w-4 h-4 mr-2" />Register Patient</Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search patients..." className="pl-9" />
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50 text-left text-muted-foreground">
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Age</th>
                <th className="p-4 font-medium">Gender</th>
                <th className="p-4 font-medium">Phone</th>
                <th className="p-4 font-medium">Blood</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-mono text-xs text-primary">{p.id}</td>
                  <td className="p-4 font-medium text-foreground">{p.name}</td>
                  <td className="p-4 text-muted-foreground">{p.age}</td>
                  <td className="p-4 text-muted-foreground">{p.gender}</td>
                  <td className="p-4 text-muted-foreground">{p.phone}</td>
                  <td className="p-4"><span className="px-2 py-0.5 rounded bg-destructive/10 text-destructive text-xs font-medium">{p.blood}</span></td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      p.status === 'Active' ? 'bg-success/10 text-success' :
                      p.status === 'Critical' ? 'bg-destructive/10 text-destructive' :
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

export default PatientPage;

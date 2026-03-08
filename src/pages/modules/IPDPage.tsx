import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const admissions = [
  { id: 'IPD-001', name: 'Rahul Kumar', ward: 'Ward A', bed: 'Bed 3', doctor: 'Dr. Sharma', admitted: '05 Mar 2026', status: 'Active' },
  { id: 'IPD-002', name: 'Meera Joshi', ward: 'ICU', bed: 'Bed 1', doctor: 'Dr. Verma', admitted: '06 Mar 2026', status: 'Critical' },
  { id: 'IPD-003', name: 'Sanjay Verma', ward: 'Ward B', bed: 'Bed 7', doctor: 'Dr. Gupta', admitted: '07 Mar 2026', status: 'Active' },
  { id: 'IPD-004', name: 'Anita Das', ward: 'Ward A', bed: 'Bed 12', doctor: 'Dr. Patel', admitted: '04 Mar 2026', status: 'Discharged' },
];

const IPDPage: React.FC = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">IPD Management</h1>
          <p className="text-muted-foreground">In-Patient Department</p>
        </div>
        <Button><Plus className="w-4 h-4 mr-2" />New Admission</Button>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search admissions..." className="pl-9" />
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50 text-left text-muted-foreground">
                <th className="p-4 font-medium">IPD ID</th>
                <th className="p-4 font-medium">Patient</th>
                <th className="p-4 font-medium">Ward</th>
                <th className="p-4 font-medium">Bed</th>
                <th className="p-4 font-medium">Doctor</th>
                <th className="p-4 font-medium">Admitted</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map((a) => (
                <tr key={a.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-mono text-xs text-primary">{a.id}</td>
                  <td className="p-4 font-medium text-foreground">{a.name}</td>
                  <td className="p-4 text-muted-foreground">{a.ward}</td>
                  <td className="p-4 text-muted-foreground">{a.bed}</td>
                  <td className="p-4 text-muted-foreground">{a.doctor}</td>
                  <td className="p-4 text-muted-foreground">{a.admitted}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      a.status === 'Active' ? 'bg-success/10 text-success' :
                      a.status === 'Critical' ? 'bg-destructive/10 text-destructive' :
                      'bg-muted text-muted-foreground'
                    }`}>{a.status}</span>
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

export default IPDPage;

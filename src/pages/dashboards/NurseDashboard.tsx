import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/StatCard';
import { Users, Bed, Activity, AlertTriangle } from 'lucide-react';

const NurseDashboard: React.FC = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Nurse Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Assigned Patients" value="18" icon={Users} />
        <StatCard title="Beds Managed" value="32" icon={Bed} />
        <StatCard title="Vitals Pending" value="5" icon={Activity} trend="Due now" />
        <StatCard title="Critical Alerts" value="2" icon={AlertTriangle} trend="Needs attention" />
      </div>
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="font-semibold text-foreground mb-4">Patient Vitals - Pending</h3>
        <div className="space-y-3">
          {[
            { name: 'Rahul Kumar', bed: 'Ward A - Bed 3', time: 'Due now', priority: 'high' },
            { name: 'Priya Singh', bed: 'Ward B - Bed 7', time: 'Due in 15 min', priority: 'medium' },
            { name: 'Amit Patel', bed: 'ICU - Bed 2', time: 'Due in 30 min', priority: 'high' },
          ].map((p, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.bed}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                p.priority === 'high' ? 'bg-destructive/10 text-destructive' : 'bg-warning/10 text-warning'
              }`}>{p.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default NurseDashboard;

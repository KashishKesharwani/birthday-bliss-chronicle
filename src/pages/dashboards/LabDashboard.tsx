import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/StatCard';
import { FlaskConical, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const LabDashboard: React.FC = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Lab Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Tests Today" value="67" icon={FlaskConical} />
        <StatCard title="Pending" value="12" icon={Clock} trend="5 urgent" />
        <StatCard title="Completed" value="48" icon={CheckCircle} trend="72% completion" trendUp />
        <StatCard title="Critical Results" value="3" icon={AlertTriangle} />
      </div>
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="font-semibold text-foreground mb-4">Pending Lab Tests</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-3 font-medium">Patient</th>
                <th className="pb-3 font-medium">Test</th>
                <th className="pb-3 font-medium">Priority</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Rahul Kumar', test: 'CBC, Blood Sugar', priority: 'Urgent', status: 'Processing' },
                { name: 'Sneha Gupta', test: 'Thyroid Panel', priority: 'Normal', status: 'Pending' },
                { name: 'Vijay Sharma', test: 'Liver Function', priority: 'Urgent', status: 'Sample Collected' },
              ].map((t, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="py-3 font-medium text-foreground">{t.name}</td>
                  <td className="py-3 text-muted-foreground">{t.test}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      t.priority === 'Urgent' ? 'bg-destructive/10 text-destructive' : 'bg-muted text-muted-foreground'
                    }`}>{t.priority}</span>
                  </td>
                  <td className="py-3 text-muted-foreground">{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default LabDashboard;

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/StatCard';
import { Users, CalendarDays, UserCheck, Clock } from 'lucide-react';

const ReceptionistDashboard: React.FC = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Reception Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Today's Registrations" value="34" icon={Users} trendUp trend="12 more than yesterday" />
        <StatCard title="Appointments" value="56" icon={CalendarDays} />
        <StatCard title="Checked In" value="41" icon={UserCheck} />
        <StatCard title="Avg Wait Time" value="12 min" icon={Clock} trendUp trend="3 min less" />
      </div>
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="font-semibold text-foreground mb-4">Recent Registrations</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-3 font-medium">Patient</th>
                <th className="pb-3 font-medium">Phone</th>
                <th className="pb-3 font-medium">Department</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Rahul Kumar', phone: '+91 98765 43210', dept: 'Cardiology', status: 'Checked In' },
                { name: 'Meera Joshi', phone: '+91 87654 32109', dept: 'General', status: 'Waiting' },
                { name: 'Sanjay Verma', phone: '+91 76543 21098', dept: 'Orthopedics', status: 'Registered' },
              ].map((p, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="py-3 font-medium text-foreground">{p.name}</td>
                  <td className="py-3 text-muted-foreground">{p.phone}</td>
                  <td className="py-3 text-muted-foreground">{p.dept}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      p.status === 'Checked In' ? 'bg-success/10 text-success' :
                      p.status === 'Waiting' ? 'bg-warning/10 text-warning' :
                      'bg-primary/10 text-primary'
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

export default ReceptionistDashboard;

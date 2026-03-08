import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/StatCard';
import { Users, CalendarDays, FileText, Clock } from 'lucide-react';

const DoctorDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Doctor Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="My Patients" value="24" icon={Users} trend="3 new today" trendUp />
          <StatCard title="Today's OPD" value="12" icon={CalendarDays} trend="5 remaining" />
          <StatCard title="Prescriptions" value="8" icon={FileText} trend="Written today" />
          <StatCard title="Avg Wait Time" value="18 min" icon={Clock} trend="5 min less" trendUp />
        </div>

        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-semibold text-foreground mb-4">Today's Appointments</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="pb-3 font-medium">Patient</th>
                  <th className="pb-3 font-medium">Time</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Rahul Kumar', time: '09:00 AM', type: 'OPD', status: 'Completed' },
                  { name: 'Priya Singh', time: '09:30 AM', type: 'Follow-up', status: 'Completed' },
                  { name: 'Amit Patel', time: '10:00 AM', type: 'OPD', status: 'In Progress' },
                  { name: 'Sneha Gupta', time: '10:30 AM', type: 'OPD', status: 'Waiting' },
                  { name: 'Vijay Sharma', time: '11:00 AM', type: 'Follow-up', status: 'Scheduled' },
                ].map((apt, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-3 font-medium text-foreground">{apt.name}</td>
                    <td className="py-3 text-muted-foreground">{apt.time}</td>
                    <td className="py-3 text-muted-foreground">{apt.type}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        apt.status === 'Completed' ? 'bg-success/10 text-success' :
                        apt.status === 'In Progress' ? 'bg-primary/10 text-primary' :
                        apt.status === 'Waiting' ? 'bg-warning/10 text-warning' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {apt.status}
                      </span>
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
};

export default DoctorDashboard;

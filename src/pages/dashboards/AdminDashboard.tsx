import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/StatCard';
import { Users, Stethoscope, Bed, CalendarDays, Receipt, FlaskConical, Droplets, TrendingUp } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Hospital overview and management</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Patients" value="1,247" icon={Users} trend="12% this month" trendUp />
          <StatCard title="Doctors" value="48" icon={Stethoscope} trend="3 new this week" trendUp />
          <StatCard title="Beds Occupied" value="186/250" icon={Bed} trend="74% occupancy" />
          <StatCard title="Today's OPD" value="89" icon={CalendarDays} trend="15% vs yesterday" trendUp />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-foreground mb-4">Department Overview</h3>
            <div className="space-y-3">
              {[
                { dept: 'Cardiology', patients: 45, doctors: 8, color: 'bg-destructive' },
                { dept: 'Neurology', patients: 32, doctors: 6, color: 'bg-primary' },
                { dept: 'Orthopedics', patients: 28, doctors: 5, color: 'bg-secondary' },
                { dept: 'Pediatrics', patients: 52, doctors: 7, color: 'bg-accent' },
                { dept: 'General Medicine', patients: 67, doctors: 10, color: 'bg-info' },
              ].map((d) => (
                <div key={d.dept} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${d.color}`} />
                    <span className="text-sm font-medium text-foreground">{d.dept}</span>
                  </div>
                  <div className="flex gap-6 text-sm text-muted-foreground">
                    <span>{d.patients} patients</span>
                    <span>{d.doctors} doctors</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { text: 'New patient admitted - Rahul Kumar', time: '2 min ago', icon: Users },
                { text: 'Lab report generated - Patient #1234', time: '15 min ago', icon: FlaskConical },
                { text: 'Bill generated - ₹45,000', time: '1 hr ago', icon: Receipt },
                { text: 'Blood unit dispatched - O+', time: '2 hrs ago', icon: Droplets },
                { text: 'OPD appointment completed', time: '3 hrs ago', icon: CalendarDays },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{item.text}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard title="Today's Revenue" value="₹2,45,000" icon={TrendingUp} trend="8% vs yesterday" trendUp />
          <StatCard title="Lab Tests Today" value="67" icon={FlaskConical} trend="12 pending" />
          <StatCard title="Blood Units" value="342" icon={Droplets} trend="18 dispatched today" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;

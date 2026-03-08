import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/StatCard';
import { Droplets, Heart, AlertTriangle, TrendingUp } from 'lucide-react';

const bloodGroups = [
  { group: 'A+', units: 45, status: 'ok' },
  { group: 'A-', units: 12, status: 'low' },
  { group: 'B+', units: 52, status: 'ok' },
  { group: 'B-', units: 8, status: 'critical' },
  { group: 'O+', units: 67, status: 'ok' },
  { group: 'O-', units: 15, status: 'low' },
  { group: 'AB+', units: 23, status: 'ok' },
  { group: 'AB-', units: 5, status: 'critical' },
];

const BloodBankDashboard: React.FC = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Blood Bank Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Units" value="342" icon={Droplets} />
        <StatCard title="Donors Registered" value="1,890" icon={Heart} />
        <StatCard title="Critical Stock" value="2 groups" icon={AlertTriangle} />
        <StatCard title="Dispatched Today" value="18" icon={TrendingUp} />
      </div>
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="font-semibold text-foreground mb-4">Blood Stock by Group</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {bloodGroups.map((bg) => (
            <div key={bg.group} className={`rounded-xl border p-4 text-center ${
              bg.status === 'critical' ? 'border-destructive/30 bg-destructive/5' :
              bg.status === 'low' ? 'border-warning/30 bg-warning/5' :
              'border-border bg-card'
            }`}>
              <p className="text-2xl font-bold text-foreground">{bg.group}</p>
              <p className="text-lg font-semibold text-muted-foreground">{bg.units} units</p>
              <span className={`text-xs font-medium ${
                bg.status === 'critical' ? 'text-destructive' :
                bg.status === 'low' ? 'text-warning' : 'text-success'
              }`}>
                {bg.status === 'critical' ? '⚠ Critical' : bg.status === 'low' ? '⚡ Low' : '✓ OK'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default BloodBankDashboard;

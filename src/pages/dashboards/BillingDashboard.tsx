import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/StatCard';
import { Receipt, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const BillingDashboard: React.FC = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Billing Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Today's Revenue" value="₹2,45,000" icon={TrendingUp} trend="8% up" trendUp />
        <StatCard title="Bills Generated" value="34" icon={Receipt} />
        <StatCard title="Pending Payments" value="₹89,000" icon={Clock} />
        <StatCard title="Settled" value="28" icon={CheckCircle} />
      </div>
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="font-semibold text-foreground mb-4">Recent Bills</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-3 font-medium">Patient</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Rahul Kumar', amount: '₹15,000', type: 'IPD', status: 'Paid' },
                { name: 'Priya Singh', amount: '₹2,500', type: 'OPD', status: 'Pending' },
                { name: 'Amit Patel', amount: '₹45,000', type: 'Surgery', status: 'Partial' },
              ].map((b, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="py-3 font-medium text-foreground">{b.name}</td>
                  <td className="py-3 text-foreground font-semibold">{b.amount}</td>
                  <td className="py-3 text-muted-foreground">{b.type}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      b.status === 'Paid' ? 'bg-success/10 text-success' :
                      b.status === 'Pending' ? 'bg-warning/10 text-warning' :
                      'bg-primary/10 text-primary'
                    }`}>{b.status}</span>
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

export default BillingDashboard;

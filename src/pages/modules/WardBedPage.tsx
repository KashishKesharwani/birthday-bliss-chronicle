import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Bed } from 'lucide-react';

const wards = [
  {
    name: 'Ward A - General',
    total: 20,
    beds: Array.from({ length: 20 }, (_, i) => ({
      id: `A-${i + 1}`,
      status: i < 14 ? 'occupied' : i < 17 ? 'available' : 'maintenance',
      patient: i < 14 ? `Patient ${i + 1}` : null,
    })),
  },
  {
    name: 'Ward B - Surgical',
    total: 15,
    beds: Array.from({ length: 15 }, (_, i) => ({
      id: `B-${i + 1}`,
      status: i < 10 ? 'occupied' : i < 13 ? 'available' : 'maintenance',
      patient: i < 10 ? `Patient ${i + 20}` : null,
    })),
  },
  {
    name: 'ICU',
    total: 10,
    beds: Array.from({ length: 10 }, (_, i) => ({
      id: `ICU-${i + 1}`,
      status: i < 8 ? 'occupied' : 'available',
      patient: i < 8 ? `Patient ${i + 40}` : null,
    })),
  },
];

const WardBedPage: React.FC = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Ward & Bed Management</h1>

      <div className="flex gap-4 text-sm">
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-success" /> Available</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-destructive" /> Occupied</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-muted-foreground/30" /> Maintenance</span>
      </div>

      {wards.map((ward) => {
        const occupied = ward.beds.filter(b => b.status === 'occupied').length;
        const available = ward.beds.filter(b => b.status === 'available').length;
        return (
          <div key={ward.name} className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">{ward.name}</h3>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span className="text-success font-medium">{available} available</span>
                <span className="text-destructive font-medium">{occupied} occupied</span>
              </div>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {ward.beds.map((bed) => (
                <div
                  key={bed.id}
                  className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs cursor-pointer transition-colors ${
                    bed.status === 'occupied' ? 'bg-destructive/10 border border-destructive/20 text-destructive' :
                    bed.status === 'available' ? 'bg-success/10 border border-success/20 text-success hover:bg-success/20' :
                    'bg-muted border border-border text-muted-foreground'
                  }`}
                  title={bed.patient || bed.id}
                >
                  <Bed className="w-4 h-4 mb-0.5" />
                  <span className="font-medium">{bed.id}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </DashboardLayout>
);

export default WardBedPage;

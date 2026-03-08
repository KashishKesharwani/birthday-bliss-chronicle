import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Plus, FileText } from 'lucide-react';

const prescriptions = [
  { id: 'RX-001', patient: 'Rahul Kumar', doctor: 'Dr. Sharma', date: '08 Mar 2026', medicines: 3, status: 'Active' },
  { id: 'RX-002', patient: 'Priya Singh', doctor: 'Dr. Verma', date: '08 Mar 2026', medicines: 5, status: 'Active' },
  { id: 'RX-003', patient: 'Amit Patel', doctor: 'Dr. Gupta', date: '07 Mar 2026', medicines: 2, status: 'Completed' },
  { id: 'RX-004', patient: 'Sneha Gupta', doctor: 'Dr. Sharma', date: '07 Mar 2026', medicines: 4, status: 'Active' },
];

const PrescriptionPage: React.FC = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Prescriptions</h1>
          <p className="text-muted-foreground">Manage patient prescriptions</p>
        </div>
        <Button><Plus className="w-4 h-4 mr-2" />New Prescription</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prescriptions.map((rx) => (
          <div key={rx.id} className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{rx.patient}</p>
                  <p className="text-xs text-muted-foreground">{rx.id}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                rx.status === 'Active' ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
              }`}>{rx.status}</span>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Doctor: {rx.doctor}</p>
              <p>Date: {rx.date}</p>
              <p>Medicines: {rx.medicines} items</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default PrescriptionPage;

import React, { useState } from 'react';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Activity, Stethoscope, Users, FlaskConical, Receipt, Droplets, UserCheck, ShieldCheck } from 'lucide-react';

const roles: { role: UserRole; label: string; icon: React.ElementType; color: string }[] = [
  { role: 'admin', label: 'Admin', icon: ShieldCheck, color: 'bg-primary/10 text-primary border-primary/20' },
  { role: 'doctor', label: 'Doctor', icon: Stethoscope, color: 'bg-secondary/10 text-secondary border-secondary/20' },
  { role: 'nurse', label: 'Nurse', icon: Users, color: 'bg-accent/10 text-accent border-accent/20' },
  { role: 'lab', label: 'Lab Tech', icon: FlaskConical, color: 'bg-info/10 text-info border-info/20' },
  { role: 'billing', label: 'Billing', icon: Receipt, color: 'bg-warning/10 text-warning border-warning/20' },
  { role: 'blood_bank', label: 'Blood Bank', icon: Droplets, color: 'bg-destructive/10 text-destructive border-destructive/20' },
  { role: 'receptionist', label: 'Receptionist', icon: UserCheck, color: 'bg-success/10 text-success border-success/20' },
];

const roleDefaultPaths: Record<UserRole, string> = {
  admin: '/admin',
  doctor: '/doctor',
  nurse: '/nurse',
  lab: '/lab-dashboard',
  billing: '/billing-dashboard',
  blood_bank: '/blood-bank-dashboard',
  receptionist: '/receptionist',
};

const Login: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password, selectedRole);
    if (success) {
      navigate(roleDefaultPaths[selectedRole]);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-primary-foreground/20" />
          <div className="absolute bottom-32 right-16 w-60 h-60 rounded-full bg-primary-foreground/10" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-primary-foreground/15" />
        </div>
        <div className="relative z-10 text-center px-12">
          <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-8">
            <Activity className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">MediCare HMS</h1>
          <p className="text-primary-foreground/80 text-lg">Complete Hospital Management System</p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-primary-foreground/60 text-sm">
            <div className="bg-primary-foreground/10 rounded-lg p-3">OPD/IPD</div>
            <div className="bg-primary-foreground/10 rounded-lg p-3">Lab & Billing</div>
            <div className="bg-primary-foreground/10 rounded-lg p-3">Blood Bank</div>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">MediCare HMS</h1>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-1">Welcome back</h2>
          <p className="text-muted-foreground mb-6">Select your role and sign in to continue</p>

          {/* Role selector */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {roles.map(({ role, label, icon: Icon, color }) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all text-xs font-medium ${
                  selectedRole === role
                    ? 'border-primary bg-primary/5 text-primary shadow-sm'
                    : 'border-border hover:border-primary/30 text-muted-foreground'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input
                type="email"
                placeholder={`${selectedRole}@hospital.com`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <Input
                type="password"
                placeholder="Enter any password (demo)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11"
              />
            </div>
            <Button type="submit" className="w-full h-11 text-sm font-semibold">
              Sign in as {roles.find(r => r.role === selectedRole)?.label}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Demo mode — any email/password will work. Select a role above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

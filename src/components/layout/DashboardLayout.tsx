import React from 'react';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Stethoscope, FlaskConical, Receipt, Droplets, 
  UserCheck, Bed, ClipboardList, FileText, CalendarDays, LogOut, Menu, X,
  Heart, Activity, Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
}

const roleNavItems: Record<UserRole, NavItem[]> = {
  admin: [
    { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { label: 'Doctors', path: '/admin/doctors', icon: Stethoscope },
    { label: 'Patients', path: '/admin/patients', icon: Users },
    { label: 'OPD', path: '/opd', icon: CalendarDays },
    { label: 'IPD', path: '/ipd', icon: Building2 },
    { label: 'Wards & Beds', path: '/wards', icon: Bed },
    { label: 'Lab', path: '/lab', icon: FlaskConical },
    { label: 'Billing', path: '/billing', icon: Receipt },
    { label: 'Blood Bank', path: '/blood-bank', icon: Droplets },
  ],
  doctor: [
    { label: 'Dashboard', path: '/doctor', icon: LayoutDashboard },
    { label: 'My Patients', path: '/doctor/patients', icon: Users },
    { label: 'OPD', path: '/opd', icon: CalendarDays },
    { label: 'IPD', path: '/ipd', icon: Building2 },
    { label: 'Prescriptions', path: '/prescriptions', icon: FileText },
  ],
  nurse: [
    { label: 'Dashboard', path: '/nurse', icon: LayoutDashboard },
    { label: 'Patients', path: '/nurse/patients', icon: Users },
    { label: 'Wards & Beds', path: '/wards', icon: Bed },
    { label: 'IPD', path: '/ipd', icon: Building2 },
  ],
  lab: [
    { label: 'Dashboard', path: '/lab-dashboard', icon: LayoutDashboard },
    { label: 'Lab Tests', path: '/lab', icon: FlaskConical },
    { label: 'Reports', path: '/lab/reports', icon: ClipboardList },
  ],
  billing: [
    { label: 'Dashboard', path: '/billing-dashboard', icon: LayoutDashboard },
    { label: 'Billing', path: '/billing', icon: Receipt },
    { label: 'Patients', path: '/billing/patients', icon: Users },
  ],
  blood_bank: [
    { label: 'Dashboard', path: '/blood-bank-dashboard', icon: LayoutDashboard },
    { label: 'Blood Bank', path: '/blood-bank', icon: Droplets },
    { label: 'Donors', path: '/blood-bank/donors', icon: Heart },
  ],
  receptionist: [
    { label: 'Dashboard', path: '/receptionist', icon: LayoutDashboard },
    { label: 'Patients', path: '/receptionist/patients', icon: Users },
    { label: 'OPD', path: '/opd', icon: CalendarDays },
    { label: 'Appointments', path: '/receptionist/appointments', icon: UserCheck },
  ],
};

const roleTitles: Record<UserRole, string> = {
  admin: 'Admin Panel',
  doctor: 'Doctor Portal',
  nurse: 'Nurse Station',
  lab: 'Lab Management',
  billing: 'Billing Center',
  blood_bank: 'Blood Bank',
  receptionist: 'Reception Desk',
};

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  if (!user) return null;

  const navItems = roleNavItems[user.role];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar text-sidebar-foreground flex flex-col transition-transform duration-300 md:relative md:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-sidebar-border">
          <div className="w-9 h-9 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <Activity className="w-5 h-5 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-sm text-sidebar-primary-foreground">MediCare HMS</h1>
            <p className="text-xs text-sidebar-foreground/60">{roleTitles[user.role]}</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto md:hidden text-sidebar-foreground" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="w-4.5 h-4.5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-sidebar-accent flex items-center justify-center text-sm font-semibold text-sidebar-accent-foreground">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-primary-foreground truncate">{user.name}</p>
              <p className="text-xs text-sidebar-foreground/50 truncate">{user.email}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full justify-start text-sidebar-foreground/60 hover:text-destructive hover:bg-destructive/10" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 border-b border-border bg-card flex items-center px-4 gap-4 shrink-0">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </Button>
          <h2 className="text-lg font-semibold text-foreground">{roleTitles[user.role]}</h2>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

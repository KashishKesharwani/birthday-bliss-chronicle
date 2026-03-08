import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import DoctorDashboard from "./pages/dashboards/DoctorDashboard";
import NurseDashboard from "./pages/dashboards/NurseDashboard";
import LabDashboard from "./pages/dashboards/LabDashboard";
import BillingDashboard from "./pages/dashboards/BillingDashboard";
import BloodBankDashboard from "./pages/dashboards/BloodBankDashboard";
import ReceptionistDashboard from "./pages/dashboards/ReceptionistDashboard";
import OPDPage from "./pages/modules/OPDPage";
import IPDPage from "./pages/modules/IPDPage";
import PrescriptionPage from "./pages/modules/PrescriptionPage";
import WardBedPage from "./pages/modules/WardBedPage";
import PatientPage from "./pages/modules/PatientPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            
            {/* Dashboards */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/doctors" element={<AdminDashboard />} />
            <Route path="/admin/patients" element={<PatientPage />} />
            <Route path="/doctor" element={<DoctorDashboard />} />
            <Route path="/doctor/patients" element={<PatientPage />} />
            <Route path="/nurse" element={<NurseDashboard />} />
            <Route path="/nurse/patients" element={<PatientPage />} />
            <Route path="/lab-dashboard" element={<LabDashboard />} />
            <Route path="/billing-dashboard" element={<BillingDashboard />} />
            <Route path="/blood-bank-dashboard" element={<BloodBankDashboard />} />
            <Route path="/receptionist" element={<ReceptionistDashboard />} />
            <Route path="/receptionist/patients" element={<PatientPage />} />
            <Route path="/receptionist/appointments" element={<OPDPage />} />

            {/* Modules */}
            <Route path="/opd" element={<OPDPage />} />
            <Route path="/ipd" element={<IPDPage />} />
            <Route path="/prescriptions" element={<PrescriptionPage />} />
            <Route path="/wards" element={<WardBedPage />} />
            <Route path="/lab" element={<LabDashboard />} />
            <Route path="/lab/reports" element={<LabDashboard />} />
            <Route path="/billing" element={<BillingDashboard />} />
            <Route path="/billing/patients" element={<PatientPage />} />
            <Route path="/blood-bank" element={<BloodBankDashboard />} />
            <Route path="/blood-bank/donors" element={<BloodBankDashboard />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

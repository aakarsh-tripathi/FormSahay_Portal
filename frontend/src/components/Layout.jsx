import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Flag } from 'lucide-react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-slate-50 dark:bg-slate-950">
      
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      {/* 2. Official Utility Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-[#1e293b] text-slate-300 dark:bg-slate-950">
        
        {/* National Banner Line */}
        <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-white to-emerald-600"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs">
            
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2 text-white font-extrabold text-sm">
                <Flag className="w-4 h-4 text-amber-500" />
                <span>FormSahay Portal</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed max-w-sm">
                FormSahay is an independent civic utility portal. It provides automated OCR text extraction, citizen eligibility audits, and file verification reports to assist with document preparation.
              </p>
            </div>
            
            <div className="md:col-span-3 space-y-3">
              <h3 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
                Portal Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/dashboard" className="text-slate-400 hover:text-white transition-all">Citizen Dashboard</Link>
                </li>
                <li>
                  <Link to="/analyze" className="text-slate-400 hover:text-white transition-all">Analyze Form Notice</Link>
                </li>
                <li>
                  <Link to="/eligibility" className="text-slate-400 hover:text-white transition-all">Check Eligibility</Link>
                </li>
                <li>
                  <Link to="/verify" className="text-slate-400 hover:text-white transition-all">Verify Documents</Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <h3 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
                Disclaimer & Compliance
              </h3>
              <p className="text-[10px] text-slate-400 leading-normal">
                This website is not directly associated with the Ministry of Electronics and Information Technology (MeitY), National Informatics Centre (NIC), or any other administrative department of the Government of India. It is a utility tool designed to help citizens understand and audit applications.
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-800 dark:border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-400">
            <span>© {new Date().getFullYear()} FormSahay. Built for Indian Citizen Welfare Accessibility.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white flex items-center gap-1"><HelpCircle className="w-3 h-3" /> Citizen Helpdesk</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

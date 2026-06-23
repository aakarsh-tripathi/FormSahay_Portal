import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import {
  Sun,
  Moon,
  Menu,
  X,
  FileText,
  LayoutDashboard,
  UserCheck,
  ShieldCheck,
  FileCheck,
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Analyze Notice', path: '/analyze', icon: FileText },
  { name: 'Check Eligibility', path: '/eligibility', icon: UserCheck },
  { name: 'Verify Documents', path: '/verify', icon: ShieldCheck },
];

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeAnimating, setThemeAnimating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const handleThemeToggle = () => {
    setThemeAnimating(true);
    toggleTheme();
    setTimeout(() => setThemeAnimating(false), 300);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/70 shadow-[0_1px_8px_rgba(15,23,42,0.06)] dark:shadow-[0_1px_8px_rgba(0,0,0,0.18)]'
            : 'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm'
        }`}
      >
      {/* National Banner Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-white to-emerald-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Branding */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <FileCheck className="w-5 h-5 text-blue-900 dark:text-slate-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                  FormSahay
                </span>
                <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                  National Citizen Form & Welfare Audit Portal
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center h-full gap-1 lg:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-5 lg:px-6 h-16 text-xs font-bold border-b-2 transition-all duration-250 ${
                    active
                      ? 'border-blue-800 text-blue-900 dark:text-blue-400 dark:border-blue-400 font-extrabold'
                      : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Utilities */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={handleThemeToggle}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`relative flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 active:scale-95 transition-all duration-250 ${
                themeAnimating ? 'scale-90 rotate-12' : 'scale-100 rotate-0'
              }`}
            >
              <span className="relative w-4 h-4">
                <Sun
                  className={`absolute inset-0 w-4 h-4 text-amber-500 transition-all duration-300 ${
                    darkMode
                      ? 'opacity-100 rotate-0 scale-100'
                      : 'opacity-0 rotate-90 scale-50'
                  }`}
                />
                <Moon
                  className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${
                    darkMode
                      ? 'opacity-0 -rotate-90 scale-50'
                      : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
              </span>
            </button>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="flex items-center justify-center w-9 h-9 rounded-lg md:hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-all duration-250"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-xs font-bold rounded transition-all duration-250 ${
                    active
                      ? 'bg-slate-50 dark:bg-slate-800 text-blue-900 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-[18px] h-[18px] flex-shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
      </header>

      {/* Reserve space so fixed navbar doesn't overlap page content */}
      <div className="h-[68px] shrink-0" aria-hidden="true" />
    </>
  );
};

export default Navbar;

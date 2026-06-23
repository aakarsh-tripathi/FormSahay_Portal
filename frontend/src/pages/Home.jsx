import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  UserCheck, 
  ShieldCheck, 
  HelpCircle, 
  Calendar, 
  Compass, 
  ArrowRight, 
  Users, 
  FileCheck, 
  Clock 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    {
      icon: FileText,
      title: "AI Notice Analysis",
      desc: "Upload official circular files or images to extract eligibility rules, required certificates, and application deadlines using AI.",
      path: "/analyze",
      color: "text-slate-700 border-slate-200"
    },
    {
      icon: UserCheck,
      title: "AI Eligibility Engine",
      desc: "Evaluate compatibility across public schemes instantly with our AI reasoning engine based on your profile metrics.",
      path: "/eligibility",
      color: "text-slate-700 border-slate-200"
    },
    {
      icon: ShieldCheck,
      title: "AI Document Validator",
      desc: "Analyze certificate scans (Aadhaar, Income, Domicile) to audit accuracy, name consistency, and expiration validity using AI OCR.",
      path: "/verify",
      color: "text-slate-700 border-slate-200"
    },
    {
      icon: HelpCircle,
      title: "AI Explanation Engine",
      desc: "Convert complex administrative phrasing and legal clauses from official notices into clear, plain-language directives using AI.",
      path: "/analyze",
      color: "text-slate-700 border-slate-200"
    },
    {
      icon: Clock,
      title: "AI Deadline Tracking",
      desc: "Track upcoming deadlines and certificate renewals with AI-powered alerts and automated notifications.",
      path: "/dashboard",
      color: "text-slate-700 border-slate-200"
    },
    {
      icon: Compass,
      title: "AI Scheme Discovery",
      desc: "Discover tailored educational scholarships and public welfare support schemes matching your profile with AI.",
      path: "/eligibility",
      color: "text-slate-700 border-slate-200"
    }
  ];

  const problems = [
    {
      title: "UP Scholarship Applications",
      desc: "Instantly checks state domicile rules, OBC/SC/ST category criteria, and income ceilings against latest notifications."
    },
    {
      title: "NSP Scholarship Verification",
      desc: "Audits required marksheets and coordinates class percentiles against central sector scholarship criteria."
    },
    {
      title: "Income Certificate Validation",
      desc: "Extracts issuance dates and checks if the certificate matches local Tehsildar authority guidelines."
    },
    {
      title: "Domicile Certificate Checks",
      desc: "Compares state residence proof records against the application criteria to prevent residency mismatches."
    },
    {
      title: "Caste Certificate Requirements",
      desc: "Validates certificate fields and cross-references names against central and state government list updates."
    },
    {
      title: "Government Welfare Scheme Eligibility",
      desc: "Calculates match percentages for farmers, students, and citizens based on age, category, and income ceilings."
    }
  ];

  const workflowSteps = [
    {
      number: '1',
      title: 'Upload Notice Document',
      desc: 'Upload the official scholarship notice circular or form rules image file to let the portal scan details.',
    },
    {
      number: '2',
      title: 'Extract Policy Guidelines',
      desc: 'The portal extracts eligibility limits, lists required documents, and highlights deadline dates.',
    },
    {
      number: '3',
      title: 'Verify Applicant Certificates',
      desc: 'Upload certificate scans (Aadhaar, income proof) to identify name spelling conflicts or expired dates.',
    },
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* 1. Hero Section (Grounded Civic Intro with AI Demo) */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative py-8 px-6 sm:py-10 sm:px-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-slate-800 dark:text-slate-100 overflow-hidden"
      >
        
        {/* Subtle Patriotic Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-500 via-transparent to-emerald-600"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-center relative z-10">
          
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 space-y-3.5 lg:pr-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
              AI-Powered Citizen Support Portal
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              India's AI Assistant for Government Forms, Scholarships & Welfare Schemes
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Upload Any Government Notice and Get Eligibility, Required Documents, Deadlines and Verification Insights in Seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link to="/analyze" className="w-full sm:w-auto btn-primary text-xs py-3 px-6 transition-transform duration-300 hover:scale-[1.02]">
                AI Notice Analysis <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/eligibility" className="w-full sm:w-auto btn-secondary text-xs py-3 px-6 transition-transform duration-300 hover:scale-[1.02]">
                AI Eligibility Engine
              </Link>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-slate-400" />
                <span>AI-powered checks for citizen welfare schemes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-slate-400" />
                <span>AI Document Validator for certificate scans</span>
              </div>
            </div>
          </div>

          {/* Right Column (Visual AI Demo Panel) */}
          <div className="lg:col-span-5 w-full lg:flex lg:justify-end lg:items-center">
            <div className="w-full lg:max-w-[420px] bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-card p-6 space-y-5 text-xs shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md dark:hover:shadow-black/20">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-red-100 dark:bg-red-950/30 text-red-600 rounded">
                    <FileText className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-bold text-slate-700 dark:text-slate-200 truncate max-w-[150px] sm:max-w-[200px]">
                    UP_Scholarship_Notice.pdf
                  </span>
                </div>
                <span className="text-[9px] bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  Analyzed
                </span>
              </div>
              
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 font-extrabold text-sm">✓</span>
                  <span>Eligibility Detected: <strong className="text-slate-800 dark:text-slate-100 font-semibold">OBC/SC/ST Matched</strong></span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 font-extrabold text-sm">✓</span>
                  <span>Last Date Found: <strong className="text-slate-800 dark:text-slate-100 font-semibold">Dec 15, 2026</strong></span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 font-extrabold text-sm">✓</span>
                  <span>Required Documents: <strong className="text-slate-800 dark:text-slate-100 font-semibold">5 Extracted</strong></span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 font-extrabold text-sm">✓</span>
                  <span>Missing Documents: <strong className="text-slate-800 dark:text-slate-100 font-semibold">Income Certificate</strong></span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 font-extrabold text-sm">✓</span>
                  <span>AI Summary: <strong className="text-slate-800 dark:text-slate-100 font-semibold">Generated successfully</strong></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* 2. Available Services Section */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
            Available Citizen Services
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Access specific audit tools to check guidelines and coordinate forms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-6 rounded-card border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-sm transition-all"
              >
                <div className="space-y-3">
                  <div className="inline-flex p-2.5 rounded bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <Icon className="w-5 h-5 text-blue-900 dark:text-slate-300" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link 
                    to={feat.path} 
                    className="inline-flex items-center gap-1 text-[11px] font-extrabold text-blue-800 dark:text-blue-400 hover:underline"
                  >
                    Open Service Module <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. How it Works */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-xl border border-slate-200 dark:border-slate-800 space-y-8"
      >
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white uppercase">
            Form Preparation Workflow
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Standard procedure to review requirements and verify records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {workflowSteps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Mobile vertical connector */}
              {index > 0 && (
                <div aria-hidden="true" className="md:hidden flex justify-center py-2">
                  <div className="w-px h-5 border-l border-dashed border-slate-300 dark:border-slate-600" />
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                className="relative flex-1 p-5 sm:p-6 rounded-card border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md dark:hover:shadow-black/20"
              >
                <div className="space-y-3">
                  <div className="text-xs font-bold text-blue-900 dark:text-blue-400 flex items-center gap-3">
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 ring-2 ring-blue-900/10 dark:ring-blue-400/20 flex items-center justify-center font-mono text-sm font-extrabold text-blue-900 dark:text-blue-400 shrink-0">
                      {step.number}
                    </span>
                    {step.title}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-11 sm:pl-12">
                    {step.desc}
                  </p>
                </div>
              </motion.div>

              {/* Desktop horizontal connector */}
              {index < workflowSteps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:flex absolute top-9 left-full w-8 items-center pointer-events-none z-10 -translate-y-1/2"
                >
                  <div className="flex-1 border-t border-dashed border-slate-300 dark:border-slate-600" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0 ml-0.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. Common Problems FormSahay Solves */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
            Common Problems FormSahay Solves
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            How FormSahay helps citizens prevent form rejection and ensure document eligibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-card border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="font-bold text-xs text-blue-900 dark:text-blue-400 flex items-center gap-2">
                <span className="text-emerald-500 font-extrabold text-sm">✓</span>
                {prob.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {prob.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SAMPLE_JOBS } from '@/data/jobs';

export default function CandidateHub() {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [showSalaryResult, setShowSalaryResult] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

  const handleSalaryCalculation = () => {
    if (!selectedRole || !selectedLocation || !selectedExperience) {
      return;
    }
    setIsCalculating(true);
    // Simulate API call
    setTimeout(() => {
      setIsCalculating(false);
      setShowSalaryResult(true);
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Land Your Dream Tech Role in 2024
          </h1>
          <p className="text-xl text-white text-center max-w-2xl mx-auto mb-8">
            Join thousands of tech professionals who've found their perfect role through us. Get matched with top employers and secure an average 25% salary increase.
          </p>
          <div className="max-w-xl mx-auto">
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="What role are you looking for? (e.g., Senior React Developer)"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                Find Jobs
              </button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-white/30 transition-colors">
                Senior Developer
              </span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-white/30 transition-colors">
                Tech Lead
              </span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-white/30 transition-colors">
                Product Manager
              </span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-white/30 transition-colors">
                Remote First
              </span>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/90 text-center mb-6">
                Ready to accelerate your career? Upload your CV now and get matched with your next role within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Upload CV - Get Matched in 48h
                </button>
                <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect LinkedIn - Instant Profile Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-3">10,000+</div>
              <div className="text-lg text-slate-600">Successful Placements</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-3">15+</div>
              <div className="text-lg text-slate-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-3">98%</div>
              <div className="text-lg text-slate-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-3">500+</div>
              <div className="text-lg text-slate-600">Partner Companies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
            Your Success is Our Priority - 95% of Our Candidates Land Their Dream Role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Industry Expertise</h3>
              <p className="text-lg text-slate-600 leading-relaxed">Our deep sector knowledge and understanding of your industry sets us apart from ordinary hiring challenges.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Personalized Approach</h3>
              <p className="text-lg text-slate-600 leading-relaxed">We take time to understand your skills and career goals to find the perfect match.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Global Network</h3>
              <p className="text-lg text-slate-600 leading-relaxed">Access opportunities across the globe with our extensive employer relationships.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Jobs Section */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Latest Opportunities</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover high-paying tech roles with leading companies - Updated daily
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {SAMPLE_JOBS.slice(0, 3).map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                        <span className="text-sm font-semibold text-purple-600">
                          {job.company.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900">{job.title}</h3>
                    </div>
                    <p className="text-lg text-slate-600">{job.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    {job.isNew && (
                      <span className="bg-purple-100 text-purple-600 px-4 py-1.5 rounded-full text-sm font-medium">
                        New
                      </span>
                    )}
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>{job.applications} applied</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-slate-600 mb-6">{job.salary}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {job.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-base text-slate-500">{job.location}</span>
                    {job.isRemote && (
                      <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm">
                        Remote
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-sm text-slate-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      <span>{job.companyRating}/5</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-base text-slate-500">Posted {job.postedDate}</span>
                    {job.isUrgent && (
                      <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm">
                        Urgent
                      </span>
                    )}
                  </div>
                  <Link 
                    href={`/opportunities?job=${job.id}`}
                    className="text-lg text-purple-600 hover:text-purple-700 font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/opportunities"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              View All Opportunities
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Job Search Process Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Your Path to Success in 5 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/20"></div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold absolute -top-4 left-1/2 transform -translate-x-1/2">1</div>
              <div className="mt-2">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">
                  Initial Consultation
                </h3>
                <p className="text-slate-600 text-sm mb-2">
                  We begin with a one-on-one consultation to understand your career aspirations and qualifications.
                </p>
                <span className="text-sm text-purple-600">~30 minutes</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold absolute -top-4 left-1/2 transform -translate-x-1/2">2</div>
              <div className="mt-2">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">
                  Resume Review
                </h3>
                <p className="text-slate-600 text-sm mb-2">
                  Our experts review your CV to ensure it highlights your strengths and achievements.
                </p>
                <span className="text-sm text-purple-600">1-2 business days</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold absolute -top-4 left-1/2 transform -translate-x-1/2">3</div>
              <div className="mt-2">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">
                  Job Matching
                </h3>
                <p className="text-slate-600 text-sm mb-2">
                  We match you with suitable opportunities from our extensive network.
                </p>
                <span className="text-sm text-purple-600">3-5 business days</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold absolute -top-4 left-1/2 transform -translate-x-1/2">4</div>
              <div className="mt-2">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">
                  Interview Preparation
                </h3>
                <p className="text-slate-600 text-sm mb-2">
                  Comprehensive interview coaching and preparation support.
                </p>
                <span className="text-sm text-purple-600">1-2 sessions</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold absolute -top-4 left-1/2 transform -translate-x-1/2">5</div>
              <div className="mt-2">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">
                  Ongoing Support
                </h3>
                <p className="text-slate-600 text-sm mb-2">
                  Continued support through onboarding and beyond.
                </p>
                <span className="text-sm text-purple-600">First 90 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Advice Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Career Insights & Expert Tips</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stay ahead with our latest insights on tech careers, salaries, and industry trends
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                id: 1,
                title: "Interview Tips for Tech Professionals",
                excerpt: "A guide to acing technical interviews and showcasing your skills effectively.",
                date: "March 3, 2024",
                readTime: "5 min read",
                category: "Career Advice",
                image: "/blog/interview-tips.jpg"
              },
              {
                id: 2,
                title: "Top Programming Languages for 2024",
                excerpt: "A comprehensive guide to the most in-demand programming languages and frameworks for the year ahead.",
                date: "March 12, 2024",
                readTime: "7 min read",
                category: "Tech Trends",
                image: "/blog/programming-languages.jpg"
              },
              {
                id: 3,
                title: "Tech Salary Trends in East Anglia",
                excerpt: "An analysis of current salary trends and compensation packages in the region.",
                date: "February 24, 2024",
                readTime: "4 min read",
                category: "Salary Insights",
                image: "/blog/salary-trends.jpg"
              }
            ].map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <span className="text-2xl">{post.category === 'Career Advice' ? '💼' : post.category === 'Tech Trends' ? '💻' : '💰'}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-medium text-blue-600">{post.category}</span>
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{post.date}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              View All Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Real Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join thousands of tech professionals who've transformed their careers with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah Chen",
                role: "Senior Frontend Developer",
                company: "TechCorp Solutions",
                image: "/testimonials/sarah.jpg",
                quote: "The personalized approach and industry expertise helped me find the perfect role that matched my skills and career goals.",
                timeToPlacement: "2 weeks",
                salaryIncrease: "25%",
                previousRole: "Mid-Level Developer at StartupX",
                newSalary: "£85,000",
                companyLogo: "/logos/techcorp.svg",
                videoTestimonial: "/testimonials/sarah-video.mp4"
              },
              {
                name: "Michael Rodriguez",
                role: "Full Stack Developer",
                company: "Digital Innovations Ltd",
                image: "/testimonials/michael.jpg",
                quote: "The technical interview preparation was invaluable. I felt confident and well-prepared for every interview.",
                timeToPlacement: "3 weeks",
                salaryIncrease: "30%",
                previousRole: "Junior Developer at Local Agency",
                newSalary: "£75,000",
                companyLogo: "/logos/digital-innovations.svg",
                videoTestimonial: "/testimonials/michael-video.mp4"
              },
              {
                name: "Emma Thompson",
                role: "Product Manager",
                company: "StartUpX",
                image: "/testimonials/emma.jpg",
                quote: "Their understanding of the tech industry and ability to match me with the right company culture was outstanding.",
                timeToPlacement: "4 weeks",
                salaryIncrease: "35%",
                previousRole: "Project Manager at Enterprise Corp",
                newSalary: "£95,000",
                companyLogo: "/logos/startupx.svg",
                videoTestimonial: "/testimonials/emma-video.mp4"
              }
            ].map((story) => (
              <div 
                key={story.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-semibold text-purple-600">
                        {story.name.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{story.name}</h3>
                      <p className="text-lg text-slate-600 mb-3">{story.role}</p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                          <span className="text-sm font-semibold text-purple-600">
                            {story.company.split(' ').map(word => word[0]).join('')}
                          </span>
                        </div>
                        <p className="text-lg text-purple-600 font-medium">{story.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-6 mb-8">
                    <p className="text-lg text-slate-600 italic leading-relaxed">"{story.quote}"</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between text-base">
                      <div className="flex items-center gap-3 text-slate-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Placed in {story.timeToPlacement}</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-600 font-medium">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span>+{story.salaryIncrease} salary</span>
                      </div>
                    </div>
                    <div className="text-base text-slate-600">
                      <span className="font-medium">Previous Role:</span> {story.previousRole}
                    </div>
                    <div className="text-base text-slate-600">
                      <span className="font-medium">New Salary:</span> {story.newSalary}
                    </div>
                  </div>

                  <button className="w-full bg-purple-50 text-purple-600 px-6 py-3 rounded-xl text-base font-medium hover:bg-purple-100 transition-colors flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch Video Testimonial
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/success-stories"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              View More Success Stories
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Free Career Resources</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Download our proven templates and guides to accelerate your job search
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                id: 1,
                title: "CV Template Pack",
                description: "Professional CV templates tailored for tech roles, including ATS-friendly formats.",
                type: "PDF",
                size: "2.4 MB",
                downloads: "1.2k",
                icon: (
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                id: 2,
                title: "Technical Interview Guide",
                description: "Comprehensive guide covering common technical interview questions and best practices.",
                type: "PDF",
                size: "3.1 MB",
                downloads: "856",
                icon: (
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                id: 3,
                title: "Portfolio Builder Guide",
                description: "Step-by-step guide to creating an impressive tech portfolio that stands out.",
                type: "PDF",
                size: "1.8 MB",
                downloads: "642",
                icon: (
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              }
            ].map((resource) => (
              <div 
                key={resource.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-sm">
                        <span className="text-2xl">{resource.title.includes('CV') ? '📄' : resource.title.includes('Interview') ? '🎯' : '📚'}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-blue-600">{resource.type}</span>
                      <span className="text-sm text-slate-500 ml-2">• {resource.size}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{resource.downloads} downloads</span>
                    <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                      Download
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/resources"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              View All Resources
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Skills Assessment Section */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Skills Assessment</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get a personalized career roadmap and identify your next growth opportunity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Your Skill Profile</h3>
              <div className="space-y-6">
                {[
                  { skill: "Technical Skills", level: 85, details: "React, TypeScript, Node.js" },
                  { skill: "Problem Solving", level: 90, details: "Algorithm design, System architecture" },
                  { skill: "Communication", level: 75, details: "Team collaboration, Client interaction" },
                  { skill: "Project Management", level: 80, details: "Agile methodologies, Sprint planning" },
                  { skill: "Code Quality", level: 85, details: "Clean code, Testing, Documentation" }
                ].map((skill) => (
                  <div key={skill.skill}>
                    <div className="flex justify-between mb-2">
                      <div>
                        <span className="font-medium text-slate-900">{skill.skill}</span>
                        <p className="text-sm text-slate-600">{skill.details}</p>
                      </div>
                      <span className="text-slate-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full">
                      <div 
                        className="h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Recommended Learning Path</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Advanced React Patterns",
                    description: "Master modern React patterns and best practices",
                    duration: "4 weeks",
                    level: "Intermediate",
                    topics: ["Hooks", "Context API", "Performance Optimization"]
                  },
                  {
                    title: "TypeScript Deep Dive",
                    description: "Comprehensive TypeScript course for advanced developers",
                    duration: "3 weeks",
                    level: "Advanced",
                    topics: ["Generics", "Decorators", "Type System"]
                  },
                  {
                    title: "System Design",
                    description: "Learn to design scalable and maintainable systems",
                    duration: "6 weeks",
                    level: "Advanced",
                    topics: ["Architecture", "Scalability", "Performance"]
                  }
                ].map((course) => (
                  <div key={course.title} className="border-b border-slate-200 pb-4 last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900">{course.title}</h4>
                      <span className="text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                        {course.level}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">{course.description}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        {course.topics.join(", ")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center">
                  Get Personalized Learning Plan
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Salary Checker Section */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Know Your Market Value</h2>
              <p className="text-lg text-slate-600 mb-8">
                Get instant access to real-time salary data and ensure you're not leaving money on the table
              </p>
              <div className="space-y-6">
                <div>
                  <label htmlFor="jobRole" className="block text-sm font-medium text-slate-700 mb-2">
                    Job Role
                  </label>
                  <select
                    id="jobRole"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Full Stack Developer</option>
                    <option value="devops">DevOps Engineer</option>
                    <option value="data">Data Scientist</option>
                    <option value="product">Product Manager</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                    Location
                  </label>
                  <select
                    id="location"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select location</option>
                    <option value="london">London</option>
                    <option value="manchester">Manchester</option>
                    <option value="birmingham">Birmingham</option>
                    <option value="leeds">Leeds</option>
                    <option value="remote">Remote - UK</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-2">
                    Years of Experience
                  </label>
                  <select
                    id="experience"
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-8">5-8 years</option>
                    <option value="8+">8+ years</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-slate-700 mb-2">
                    Key Skills
                  </label>
                  <div className="flex flex-wrap gap-2 p-3 border border-slate-200 rounded-lg">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                      React
                      <button className="ml-2 hover:text-purple-800">×</button>
                    </span>
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                      TypeScript
                      <button className="ml-2 hover:text-purple-800">×</button>
                    </span>
                    <input
                      type="text"
                      placeholder="Add a skill..."
                      className="border-0 bg-transparent focus:ring-0 text-sm flex-1 min-w-[120px]"
                    />
                  </div>
                </div>

                <button 
                  onClick={handleSalaryCalculation}
                  disabled={isCalculating || !selectedRole || !selectedLocation || !selectedExperience}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCalculating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Calculating...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Calculate Salary Range
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Average Salary Range</h3>
                <p className="text-slate-600">Based on market data and recent placements</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-600">Entry Level</span>
                  <span className="text-slate-900 font-semibold">£25,000 - £35,000</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full mb-6">
                  <div className="h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" style={{ width: '30%' }}></div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-600">Mid Level</span>
                  <span className="text-slate-900 font-semibold">£35,000 - £55,000</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full mb-6">
                  <div className="h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" style={{ width: '60%' }}></div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-600">Senior Level</span>
                  <span className="text-slate-900 font-semibold">£55,000 - £85,000+</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full">
                  <div className="h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900 mb-4">Market Insights</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <p className="text-sm text-slate-600">Salaries for this role have increased by 8% in the last 12 months</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-slate-600">High demand for professionals with React and TypeScript skills</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 text-sm text-slate-500">
                <span>💡 Updated monthly based on market data</span>
                <button className="text-purple-600 hover:text-purple-700 font-medium">
                  View full report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Alerts Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Never Miss Your Dream Role</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get notified instantly when roles matching your criteria are posted
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Job Preferences
                  </label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm flex items-center">
                      Frontend Development
                      <button className="ml-2 hover:text-purple-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm flex items-center">
                      React
                      <button className="ml-2 hover:text-purple-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm flex items-center">
                      TypeScript
                      <button className="ml-2 hover:text-purple-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                    <input
                      type="text"
                      placeholder="Add a skill..."
                      className="border-0 bg-transparent focus:ring-0 text-sm flex-1 min-w-[120px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Location Preferences
                  </label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm flex items-center">
                      London
                      <button className="ml-2 hover:text-purple-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm flex items-center">
                      Remote
                      <button className="ml-2 hover:text-purple-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                    <input
                      type="text"
                      placeholder="Add a location..."
                      className="border-0 bg-transparent focus:ring-0 text-sm flex-1 min-w-[120px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" id="privacy" className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" />
                  <label htmlFor="privacy">
                    I agree to receive job alerts and accept the{" "}
                    <a href="#" className="text-purple-600 hover:text-purple-700">Privacy Policy</a>
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  Set Up Job Alerts
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.531c0 .895-.356 1.754-.988 2.386l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Questions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to know about our proven recruitment process
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How long does the recruitment process typically take?",
                answer: "The recruitment process typically takes 2-4 weeks from initial contact to job offer, depending on the role and company requirements. We work efficiently to ensure a smooth and timely process for both candidates and employers."
              },
              {
                question: "What kind of support do you provide during the interview process?",
                answer: "We provide comprehensive interview preparation support, including technical interview coaching, mock interviews, and feedback sessions. Our team also helps you prepare for behavioral interviews and provides guidance on presenting your experience effectively."
              },
              {
                question: "Do you offer remote job opportunities?",
                answer: "Yes, we work with companies offering both remote and hybrid work arrangements. We understand the importance of flexibility and work-life balance, and we match candidates with opportunities that align with their preferred working arrangements."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We specialize in technology and digital industries, including software development, data science, product management, and digital transformation. Our expertise in these areas allows us to provide targeted support and match candidates with relevant opportunities."
              },
              {
                question: "How do you ensure the quality of job opportunities?",
                answer: "We thoroughly vet all companies and opportunities before presenting them to candidates. This includes verifying company credentials, reviewing job requirements, and ensuring competitive compensation packages. We maintain long-term relationships with our client companies to ensure quality placements."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button 
                  className="w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                    <svg 
                      className={`w-5 h-5 text-slate-500 transform transition-transform duration-200 ${
                        expandedFaqs.includes(index) ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-200 ${
                    expandedFaqs.includes(index) ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              View All FAQs
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
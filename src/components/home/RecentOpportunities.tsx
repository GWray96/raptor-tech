"use client";

import Link from 'next/link';
import { JobListing } from '../jobs/JobListing';
import { useState, useEffect } from 'react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  postedDate: string;
  skills: string[];
}

// Sample data - in a real app, this would come from an API
const SAMPLE_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'London, UK',
    salary: '£65,000 - £85,000',
    type: 'Full-time',
    postedDate: '2 days ago',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'Remote',
    salary: '£55,000 - £75,000',
    type: 'Full-time',
    postedDate: '1 day ago',
    skills: ['Agile', 'Product Strategy', 'User Research'],
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'Cloud Solutions',
    location: 'Manchester, UK',
    salary: '£60,000 - £80,000',
    type: 'Contract',
    postedDate: '3 days ago',
    skills: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    id: '4',
    title: 'UX Designer',
    company: 'Creative Agency',
    location: 'London, UK',
    salary: '£45,000 - £60,000',
    type: 'Part-time',
    postedDate: '5 days ago',
    skills: ['Figma', 'User Research', 'Prototyping'],
  },
  {
    id: '5',
    title: 'Backend Developer',
    company: 'FinTech Solutions',
    location: 'Remote',
    salary: '£70,000 - £90,000',
    type: 'Full-time',
    postedDate: '1 day ago',
    skills: ['Node.js', 'Python', 'PostgreSQL'],
  },
  {
    id: '6',
    title: 'Data Scientist',
    company: 'AI Research Ltd',
    location: 'Cambridge, UK',
    salary: '£65,000 - £85,000',
    type: 'Full-time',
    postedDate: '4 days ago',
    skills: ['Python', 'Machine Learning', 'TensorFlow'],
  },
  {
    id: '7',
    title: 'Technical Project Manager',
    company: 'Digital Ventures',
    location: 'Remote',
    salary: '£60,000 - £80,000',
    type: 'Contract',
    postedDate: '2 days ago',
    skills: ['Agile', 'Scrum', 'JIRA'],
  },
  {
    id: '8',
    title: 'Mobile Developer',
    company: 'App Factory',
    location: 'Bristol, UK',
    salary: '£50,000 - £70,000',
    type: 'Full-time',
    postedDate: '3 days ago',
    skills: ['React Native', 'iOS', 'Android'],
  },
  {
    id: '9',
    title: 'QA Engineer',
    company: 'Quality First',
    location: 'Manchester, UK',
    salary: '£40,000 - £55,000',
    type: 'Full-time',
    postedDate: '1 day ago',
    skills: ['Selenium', 'Jest', 'Cypress'],
  },
  {
    id: '10',
    title: 'Solutions Architect',
    company: 'Enterprise Systems',
    location: 'London, UK',
    salary: '£85,000 - £110,000',
    type: 'Full-time',
    postedDate: '2 days ago',
    skills: ['AWS', 'System Design', 'Microservices'],
  },
];

export default function RecentOpportunities() {
  const [recentJobs, setRecentJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Sort jobs by posted date and take the 6 most recent
    const sortedJobs = [...SAMPLE_JOBS].sort((a, b) => {
      const aDays = parseInt(a.postedDate);
      const bDays = parseInt(b.postedDate);
      return aDays - bDays;
    }).slice(0, 6);
    
    setRecentJobs(sortedJobs);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Recent Opportunities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover the latest job opportunities in tech. From remote positions to on-site roles, find your next career move.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <span className="text-xl font-semibold text-purple-600">{job.company[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-slate-900">{job.title}</h3>
                    <p className="text-slate-600">{job.company}</p>
                  </div>
                </div>
                <span className="px-3 py-1 text-white text-sm rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                  {job.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-y-2 text-slate-600 mb-4">
                <div className="flex items-center gap-1 w-1/2">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1 w-1/2">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">{job.salary}</span>
                </div>
                <div className="flex items-center gap-1 w-1/2">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{job.postedDate}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 text-sm rounded-full border border-purple-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex justify-end">
                <Link
                  href="/opportunities"
                  className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center gap-1"
                >
                  View Details
                  <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
          >
            View All Opportunities
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 
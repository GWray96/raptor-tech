"use client";

import React from 'react';

const testimonials = [
  {
    quote: "RaptorTech helped us find the perfect candidate for our senior developer role. Their understanding of our technical requirements was exceptional.",
    author: "Sarah Chen",
    role: "CTO at TechCorp",
    rating: 5,
    image: "/placeholder-profile.jpg"
  },
  {
    quote: "The team's dedication to finding the right fit for both candidates and companies is impressive. They really understand the tech industry.",
    author: "Michael Rodriguez",
    role: "Engineering Manager at Innovate Inc",
    rating: 5,
    image: "/placeholder-profile.jpg"
  },
  {
    quote: "I found my dream job through RaptorTech. Their personalized approach and industry knowledge made all the difference.",
    author: "David Thompson",
    role: "Senior Software Engineer",
    rating: 5,
    image: "/placeholder-profile.jpg"
  }
];

const stats = [
  { label: "Successful Placements", value: "500+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Average Time to Hire", value: "2 weeks" },
  { label: "Technical Roles Filled", value: "200+" }
];

export default function SocialProofWidget() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Trusted by Tech Professionals
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join hundreds of successful placements and satisfied clients who have found their perfect match through RaptorTech.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-medium text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
            {/* Tech Corp Logo */}
            <svg className="h-10 w-auto text-slate-300" viewBox="0 0 120 40" fill="currentColor">
              <rect x="10" y="10" width="30" height="20" rx="2"/>
              <text x="45" y="25" fontSize="14">TECH</text>
            </svg>

            {/* Innovate Inc Logo */}
            <svg className="h-10 w-auto text-slate-300" viewBox="0 0 120 40" fill="currentColor">
              <circle cx="25" cy="20" r="12"/>
              <text x="45" y="25" fontSize="14">INNOVATE</text>
            </svg>

            {/* Digital Solutions Logo */}
            <svg className="h-10 w-auto text-slate-300" viewBox="0 0 120 40" fill="currentColor">
              <polygon points="20,10 30,30 10,30"/>
              <text x="35" y="25" fontSize="14">DIGITAL</text>
            </svg>

            {/* Future Systems Logo */}
            <svg className="h-10 w-auto text-slate-300" viewBox="0 0 120 40" fill="currentColor">
              <path d="M10,20 Q25,5 40,20"/>
              <text x="45" y="25" fontSize="14">FUTURE</text>
            </svg>

            {/* Data Co Logo */}
            <svg className="h-10 w-auto text-slate-300" viewBox="0 0 120 40" fill="currentColor">
              <rect x="10" y="10" width="20" height="20" transform="rotate(45 20 20)"/>
              <text x="35" y="25" fontSize="14">DATA</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
} 
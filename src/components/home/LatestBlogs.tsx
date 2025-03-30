"use client";

import React from 'react';
import Link from 'next/link';

const latestPosts = [
  {
    id: 1,
    title: "The Future of Tech Recruitment: AI and Automation",
    excerpt: "Explore how artificial intelligence and automation are transforming the recruitment landscape in the tech industry.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Industry Insights",
    image: "/blog/ai-recruitment.jpg"
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
    title: "Building a Strong Tech Team Culture",
    excerpt: "Learn how to foster innovation and collaboration within your technical team.",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Team Building",
    image: "/blog/team-culture.jpg"
  }
];

export default function LatestBlogs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay updated with our latest articles on tech recruitment, industry trends, and career development.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-blue-600">{post.category}</span>
                  <span className="text-sm text-slate-500">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                
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

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300"
          >
            View All Articles
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 
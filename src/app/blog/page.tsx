"use client";

import React from 'react';
import Link from 'next/link';

const blogPosts = [
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
  },
  {
    id: 4,
    title: "Remote Work: Best Practices for Tech Teams",
    excerpt: "Essential tips and tools for maintaining productivity in distributed tech teams.",
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Remote Work",
    image: "/blog/remote-work.jpg"
  },
  {
    id: 5,
    title: "The Rise of DevOps and Cloud Computing",
    excerpt: "Understanding the growing importance of DevOps practices and cloud infrastructure.",
    date: "March 5, 2024",
    readTime: "8 min read",
    category: "Cloud Computing",
    image: "/blog/devops-cloud.jpg"
  },
  {
    id: 6,
    title: "Interview Tips for Tech Professionals",
    excerpt: "A guide to acing technical interviews and showcasing your skills effectively.",
    date: "March 3, 2024",
    readTime: "5 min read",
    category: "Career Advice",
    image: "/blog/interview-tips.jpg"
  },
  {
    id: 7,
    title: "The Impact of Cybersecurity on Tech Recruitment",
    excerpt: "How the growing importance of cybersecurity is shaping tech talent acquisition.",
    date: "March 1, 2024",
    readTime: "6 min read",
    category: "Cybersecurity",
    image: "/blog/cybersecurity.jpg"
  },
  {
    id: 8,
    title: "Diversity in Tech: Building Inclusive Teams",
    excerpt: "Strategies for creating and maintaining diverse technical teams.",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Diversity & Inclusion",
    image: "/blog/diversity-tech.jpg"
  },
  {
    id: 9,
    title: "The Evolution of Frontend Development",
    excerpt: "Exploring modern frontend frameworks and development practices.",
    date: "February 26, 2024",
    readTime: "5 min read",
    category: "Frontend",
    image: "/blog/frontend-dev.jpg"
  },
  {
    id: 10,
    title: "Tech Salary Trends in East Anglia",
    excerpt: "An analysis of current salary trends and compensation packages in the region.",
    date: "February 24, 2024",
    readTime: "4 min read",
    category: "Salary Insights",
    image: "/blog/salary-trends.jpg"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Tech Insights & Industry Updates</h1>
          <p className="text-xl text-white/90">Stay informed with the latest trends, tips, and insights from the tech recruitment world.</p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
      </div>
    </div>
  );
} 
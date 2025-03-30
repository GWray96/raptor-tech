export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  salary: string;
  location: string;
  skills: string[];
  isNew: boolean;
  applications: number;
  isRemote: boolean;
  companyRating: number;
  postedDate: string;
  isUrgent: boolean;
}

export const SAMPLE_JOBS: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    companyLogo: "/logos/techcorp.svg",
    salary: "£65,000 - £85,000",
    location: "London",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    isNew: true,
    applications: 24,
    isRemote: false,
    companyRating: 4.8,
    postedDate: "2 days ago",
    isUrgent: true
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd",
    companyLogo: "/logos/digital-innovations.svg",
    salary: "£55,000 - £75,000",
    location: "Remote",
    skills: ["Node.js", "React", "MongoDB", "AWS"],
    isNew: true,
    applications: 18,
    isRemote: true,
    companyRating: 4.6,
    postedDate: "3 days ago",
    isUrgent: false
  },
  {
    id: "3",
    title: "Product Manager",
    company: "StartUpX",
    companyLogo: "/logos/startupx.svg",
    salary: "£70,000 - £90,000",
    location: "Manchester",
    skills: ["Product Strategy", "Agile", "User Research", "Data Analysis"],
    isNew: false,
    applications: 32,
    isRemote: false,
    companyRating: 4.7,
    postedDate: "5 days ago",
    isUrgent: true
  },
  {
    id: "4",
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    salary: "$140,000 - $180,000",
    type: "Full-time",
    postedDate: "2024-03-15",
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    description: "We are seeking an experienced Full Stack Developer to join our dynamic team. You will be responsible for developing and maintaining web applications using modern technologies and best practices.",
    requirements: [
      "5+ years of experience in full-stack development",
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (preferably AWS)",
      "Bachelor's degree in Computer Science or related field",
      "Excellent problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Unlimited PTO",
      "Remote work options",
      "Professional development budget"
    ],
    responsibilities: [
      "Design and implement new features for our web applications",
      "Write clean, maintainable, and efficient code",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Participate in code reviews and technical discussions"
    ],
    workHours: "Flexible hours, core hours 10 AM - 4 PM PST",
    workEnvironment: "Hybrid (2 days in office, 3 days remote)",
    teamSize: "8-10 developers",
    reportingStructure: "Reports to Technical Lead",
    growthOpportunities: [
      "Path to Technical Lead or Architecture roles",
      "Leadership training programs",
      "Conference speaking opportunities",
      "Open source contribution opportunities"
    ],
    companyCulture: "We foster a collaborative, innovative environment where creativity and initiative are valued. Our team believes in work-life balance and continuous learning.",
    applicationProcess: [
      "Initial application review",
      "Technical screening call",
      "Coding assessment",
      "Technical interview",
      "Culture fit interview",
      "Final team interview"
    ],
    isNew: true,
    isUrgent: false
  },
  {
    id: "5",
    title: "Machine Learning Engineer",
    company: "AI Research Labs",
    location: "Boston, MA",
    salary: "$130,000 - $170,000",
    type: "Full-time",
    postedDate: "2024-03-14",
    skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP"],
    description: "Join our cutting-edge AI research team to develop and implement machine learning solutions for real-world problems. You'll work on innovative projects in computer vision and natural language processing.",
    requirements: [
      "Master's or PhD in Computer Science, Machine Learning, or related field",
      "Strong programming skills in Python",
      "Experience with deep learning frameworks",
      "Published research papers (preferred)",
      "Strong mathematical background"
    ],
    benefits: [
      "Competitive salary",
      "Research publication opportunities",
      "Conference attendance budget",
      "Health and wellness benefits",
      "Flexible work arrangements",
      "Education reimbursement"
    ],
    responsibilities: [
      "Develop and implement machine learning models",
      "Conduct research in AI/ML",
      "Write technical documentation",
      "Collaborate with research teams",
      "Present findings to stakeholders"
    ],
    workHours: "9 AM - 5 PM EST, flexible",
    workEnvironment: "Modern research facility with state-of-the-art computing resources",
    teamSize: "15 researchers",
    reportingStructure: "Reports to Research Director",
    growthOpportunities: [
      "Lead Researcher position",
      "Patent development",
      "Research paper publications",
      "Industry conference presentations"
    ],
    companyCulture: "Our culture emphasizes academic excellence, innovation, and collaboration. We encourage exploration of new ideas and methodologies.",
    applicationProcess: [
      "Resume and research paper review",
      "Initial technical interview",
      "Research presentation",
      "Team fit interview",
      "Final interview with director"
    ],
    isNew: true,
    isUrgent: true
  },
  {
    id: "6",
    title: "UI/UX Designer",
    company: "Creative Digital Studio",
    location: "New York, NY",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    postedDate: "2024-03-13",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
    description: "Join our creative team to design beautiful and intuitive user interfaces for web and mobile applications. You'll work closely with developers and stakeholders to create exceptional user experiences.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Strong portfolio demonstrating web and mobile design",
      "Proficiency in modern design tools",
      "Experience with user research and testing",
      "Excellent communication skills"
    ],
    benefits: [
      "Competitive salary",
      "Health and dental coverage",
      "Creative workspace",
      "Design conference allowance",
      "Flexible work hours",
      "Annual learning budget"
    ],
    responsibilities: [
      "Create user-centered designs",
      "Develop and maintain design systems",
      "Conduct user research and testing",
      "Collaborate with development team",
      "Present designs to stakeholders"
    ],
    workHours: "9 AM - 5 PM EST, flexible",
    workEnvironment: "Modern design studio in downtown NYC",
    teamSize: "12 designers",
    reportingStructure: "Reports to Design Director",
    growthOpportunities: [
      "Senior Designer path",
      "Design leadership opportunities",
      "Mentorship program",
      "Industry speaking engagements"
    ],
    companyCulture: "We believe in design-led thinking and fostering creativity. Our studio environment encourages collaboration and experimentation.",
    applicationProcess: [
      "Portfolio review",
      "Initial design interview",
      "Design challenge",
      "Team fit interview",
      "Final presentation"
    ],
    isNew: true,
    isUrgent: false
  },
  {
    id: "7",
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Remote",
    salary: "$120,000 - $160,000",
    type: "Full-time",
    postedDate: "2024-03-12",
    skills: ["Kubernetes", "AWS", "Docker", "Terraform", "CI/CD"],
    description: "We're looking for a skilled DevOps Engineer to help us build and maintain our cloud infrastructure. You'll be responsible for automation, deployment, and monitoring of our systems.",
    requirements: [
      "4+ years of DevOps experience",
      "Strong knowledge of cloud platforms (AWS/Azure/GCP)",
      "Experience with containerization and orchestration",
      "Infrastructure as Code expertise",
      "Strong scripting abilities"
    ],
    benefits: [
      "Competitive salary",
      "Remote work setup allowance",
      "Health and wellness benefits",
      "Stock options",
      "Learning and certification budget",
      "Home office stipend"
    ],
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure",
      "Optimize system performance",
      "Implement security best practices",
      "Provide on-call support"
    ],
    workHours: "Flexible with some overlap with EST",
    workEnvironment: "100% Remote",
    teamSize: "6 DevOps engineers",
    reportingStructure: "Reports to Infrastructure Lead",
    growthOpportunities: [
      "Lead DevOps Engineer role",
      "Cloud architecture path",
      "Technical training program",
      "Conference speaking opportunities"
    ],
    companyCulture: "We embrace remote work and believe in work-life balance. Our team values automation, continuous improvement, and knowledge sharing.",
    applicationProcess: [
      "Initial screening",
      "Technical assessment",
      "System design interview",
      "Team collaboration interview",
      "Final discussion"
    ],
    isNew: false,
    isUrgent: true
  },
  {
    id: "8",
    title: "Product Manager",
    company: "Innovation Tech",
    location: "Austin, TX",
    salary: "$130,000 - $170,000",
    type: "Full-time",
    postedDate: "2024-03-11",
    skills: ["Product Strategy", "Agile", "Data Analysis", "User Stories", "Roadmapping"],
    description: "Lead the development of innovative products from conception to launch. You'll work with cross-functional teams to define product strategy and deliver exceptional user experiences.",
    requirements: [
      "5+ years of product management experience",
      "Track record of successful product launches",
      "Strong analytical and strategic thinking",
      "Excellent stakeholder management",
      "Technical background preferred"
    ],
    benefits: [
      "Competitive base salary + bonus",
      "Comprehensive healthcare",
      "401(k) with matching",
      "Stock options",
      "Professional development",
      "Gym membership"
    ],
    responsibilities: [
      "Define product vision and strategy",
      "Manage product roadmap",
      "Lead cross-functional teams",
      "Conduct market research",
      "Drive product launches"
    ],
    workHours: "9 AM - 5 PM CST",
    workEnvironment: "Modern office in downtown Austin",
    teamSize: "Product team of 8",
    reportingStructure: "Reports to VP of Product",
    growthOpportunities: [
      "Senior PM track",
      "Leadership development",
      "Product strategy workshops",
      "Industry networking events"
    ],
    companyCulture: "We're a fast-paced, data-driven company that values innovation and customer-centric thinking. Our team thrives on challenges and creative problem-solving.",
    applicationProcess: [
      "Resume review",
      "Initial screening",
      "Product challenge",
      "Team interviews",
      "Final presentation"
    ],
    isNew: false,
    isUrgent: false
  },
  {
    id: "9",
    title: "Data Scientist",
    company: "DataDriven Analytics",
    location: "Seattle, WA",
    salary: "$125,000 - $165,000",
    type: "Full-time",
    postedDate: "2024-03-10",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization", "Statistics"],
    description: "Join our data science team to solve complex problems using advanced analytics and machine learning. You'll work with large datasets to derive insights and build predictive models.",
    requirements: [
      "MS/PhD in Data Science, Statistics, or related field",
      "Strong programming skills in Python",
      "Experience with ML frameworks",
      "Statistical analysis expertise",
      "Communication skills"
    ],
    benefits: [
      "Competitive salary",
      "Health and dental",
      "401(k) matching",
      "Education assistance",
      "Remote work options",
      "Conference budget"
    ],
    responsibilities: [
      "Develop ML models",
      "Analyze complex datasets",
      "Create data visualizations",
      "Present findings to stakeholders",
      "Collaborate with engineering team"
    ],
    workHours: "Flexible schedule",
    workEnvironment: "Hybrid (3 days remote)",
    teamSize: "10 data scientists",
    reportingStructure: "Reports to Head of Data Science",
    growthOpportunities: [
      "Senior Data Scientist path",
      "Research opportunities",
      "Leadership roles",
      "Publication support"
    ],
    companyCulture: "We're passionate about data-driven decision making and innovation. Our team values intellectual curiosity and collaborative problem-solving.",
    applicationProcess: [
      "Initial screening",
      "Technical assessment",
      "Data challenge",
      "Team interviews",
      "Final presentation"
    ],
    isNew: false,
    isUrgent: true
  },
  {
    id: "10",
    title: "Frontend Developer",
    company: "WebCraft Studios",
    location: "Los Angeles, CA",
    salary: "$100,000 - $140,000",
    type: "Full-time",
    postedDate: "2024-03-09",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    description: "Join our frontend team to build beautiful, performant web applications. You'll work on cutting-edge projects using modern web technologies and best practices.",
    requirements: [
      "3+ years of frontend development experience",
      "Strong proficiency in React and TypeScript",
      "Experience with modern build tools and frameworks",
      "Understanding of web performance optimization",
      "Excellent UI/UX sensibility"
    ],
    benefits: [
      "Competitive salary",
      "Health and dental insurance",
      "401(k) matching",
      "Remote work options",
      "Learning and development budget",
      "Team events and outings"
    ],
    responsibilities: [
      "Build responsive and accessible web applications",
      "Optimize application performance",
      "Collaborate with design team",
      "Write clean, maintainable code",
      "Participate in code reviews"
    ],
    workHours: "Flexible schedule",
    workEnvironment: "Modern office in downtown LA",
    teamSize: "5 frontend developers",
    reportingStructure: "Reports to Frontend Lead",
    growthOpportunities: [
      "Senior Developer path",
      "Technical leadership opportunities",
      "Conference speaking engagements",
      "Open source contributions"
    ],
    companyCulture: "We're a creative, collaborative team that values innovation and continuous learning. Our office culture promotes work-life balance and personal growth.",
    applicationProcess: [
      "Initial screening",
      "Technical assessment",
      "Code review discussion",
      "Team fit interview",
      "Final presentation"
    ],
    isNew: true,
    isUrgent: false
  },
  {
    id: "11",
    title: "Backend Engineer",
    company: "DataFlow Systems",
    location: "Chicago, IL",
    salary: "$110,000 - $150,000",
    type: "Full-time",
    postedDate: "2024-03-08",
    skills: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Kafka"],
    description: "We're looking for a Backend Engineer to help us build scalable, high-performance systems. You'll work on our core platform and help design robust APIs.",
    requirements: [
      "4+ years of backend development experience",
      "Strong Java programming skills",
      "Experience with distributed systems",
      "Knowledge of database design and optimization",
      "Understanding of microservices architecture"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive health benefits",
      "401(k) with matching",
      "Stock options",
      "Professional development",
      "Gym membership"
    ],
    responsibilities: [
      "Design and implement backend services",
      "Build and maintain APIs",
      "Optimize database performance",
      "Implement security best practices",
      "Write technical documentation"
    ],
    workHours: "9 AM - 5 PM CST",
    workEnvironment: "Modern office in Chicago Loop",
    teamSize: "8 backend engineers",
    reportingStructure: "Reports to Backend Lead",
    growthOpportunities: [
      "Senior Engineer track",
      "Architecture role path",
      "Technical training program",
      "Conference attendance"
    ],
    companyCulture: "We value technical excellence and innovation. Our team is passionate about building reliable, scalable systems and sharing knowledge.",
    applicationProcess: [
      "Resume review",
      "Technical screening",
      "System design interview",
      "Team collaboration interview",
      "Final discussion"
    ],
    isNew: false,
    isUrgent: true
  },
  {
    id: "12",
    title: "Mobile Developer",
    company: "AppInnovate",
    location: "Miami, FL",
    salary: "$95,000 - $135,000",
    type: "Full-time",
    postedDate: "2024-03-07",
    skills: ["React Native", "iOS", "Android", "TypeScript", "Redux"],
    description: "Join our mobile team to create engaging, user-friendly mobile applications. You'll work on both iOS and Android platforms using React Native.",
    requirements: [
      "3+ years of mobile development experience",
      "Strong React Native skills",
      "Experience with native iOS/Android development",
      "Understanding of mobile UI/UX best practices",
      "Performance optimization experience"
    ],
    benefits: [
      "Competitive salary",
      "Health and dental coverage",
      "401(k) matching",
      "Remote work options",
      "Device allowance",
      "Learning budget"
    ],
    responsibilities: [
      "Develop cross-platform mobile applications",
      "Optimize app performance",
      "Implement new features",
      "Work with design team",
      "Maintain app store presence"
    ],
    workHours: "Flexible schedule",
    workEnvironment: "Modern office in downtown Miami",
    teamSize: "6 mobile developers",
    reportingStructure: "Reports to Mobile Lead",
    growthOpportunities: [
      "Senior Mobile Developer path",
      "Mobile architecture role",
      "Technical leadership opportunities",
      "Conference speaking"
    ],
    companyCulture: "We're a fast-paced, innovative team that values creativity and technical excellence. Our office culture promotes collaboration and continuous learning.",
    applicationProcess: [
      "Initial screening",
      "Technical assessment",
      "Code review discussion",
      "Team fit interview",
      "Final presentation"
    ],
    isNew: true,
    isUrgent: false
  },
  {
    id: "13",
    title: "Security Engineer",
    company: "SecureTech Solutions",
    location: "Denver, CO",
    salary: "$130,000 - $170,000",
    type: "Full-time",
    postedDate: "2024-03-06",
    skills: ["Security", "Penetration Testing", "Cloud Security", "SIEM", "Compliance"],
    description: "Join our security team to protect our systems and data. You'll work on implementing security measures and conducting security assessments.",
    requirements: [
      "5+ years of security experience",
      "Strong knowledge of security best practices",
      "Experience with penetration testing",
      "Cloud security expertise",
      "Security certifications preferred"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive health benefits",
      "401(k) with matching",
      "Stock options",
      "Security training budget",
      "Conference attendance"
    ],
    responsibilities: [
      "Conduct security assessments",
      "Implement security measures",
      "Monitor security systems",
      "Respond to security incidents",
      "Develop security policies"
    ],
    workHours: "Flexible schedule",
    workEnvironment: "Modern office in downtown Denver",
    teamSize: "4 security engineers",
    reportingStructure: "Reports to Security Lead",
    growthOpportunities: [
      "Senior Security Engineer path",
      "Security architecture role",
      "Leadership opportunities",
      "Industry certifications"
    ],
    companyCulture: "We're committed to maintaining the highest security standards. Our team values continuous learning and staying ahead of security threats.",
    applicationProcess: [
      "Initial screening",
      "Technical assessment",
      "Security challenge",
      "Team fit interview",
      "Final discussion"
    ],
    isNew: false,
    isUrgent: true
  },
  {
    id: "14",
    title: "QA Engineer",
    company: "QualityFirst Tech",
    location: "Portland, OR",
    salary: "$85,000 - $120,000",
    type: "Full-time",
    postedDate: "2024-03-05",
    skills: ["Testing", "Automation", "Selenium", "Jest", "CI/CD"],
    description: "Join our QA team to ensure the quality of our products. You'll work on implementing automated tests and improving our testing processes.",
    requirements: [
      "3+ years of QA experience",
      "Strong automation testing skills",
      "Experience with test frameworks",
      "Understanding of CI/CD",
      "Excellent attention to detail"
    ],
    benefits: [
      "Competitive salary",
      "Health and dental coverage",
      "401(k) matching",
      "Remote work options",
      "Learning budget",
      "Team events"
    ],
    responsibilities: [
      "Develop automated tests",
      "Perform manual testing",
      "Create test plans",
      "Report and track bugs",
      "Improve testing processes"
    ],
    workHours: "Flexible schedule",
    workEnvironment: "Modern office in downtown Portland",
    teamSize: "5 QA engineers",
    reportingStructure: "Reports to QA Lead",
    growthOpportunities: [
      "Senior QA Engineer path",
      "Test automation lead role",
      "Technical leadership opportunities",
      "Conference attendance"
    ],
    companyCulture: "We value quality and attention to detail. Our team is passionate about delivering bug-free products and improving testing processes.",
    applicationProcess: [
      "Initial screening",
      "Technical assessment",
      "Testing challenge",
      "Team fit interview",
      "Final discussion"
    ],
    isNew: false,
    isUrgent: false
  },
  {
    id: "15",
    title: "Technical Writer",
    company: "DocTech Solutions",
    location: "Remote",
    salary: "$80,000 - $110,000",
    type: "Full-time",
    postedDate: "2024-03-04",
    skills: ["Technical Writing", "Documentation", "API Documentation", "Markdown", "Git"],
    description: "Join our documentation team to create clear, comprehensive technical documentation. You'll work on API documentation, user guides, and developer resources.",
    requirements: [
      "3+ years of technical writing experience",
      "Strong writing and editing skills",
      "Experience with API documentation",
      "Understanding of technical concepts",
      "Experience with documentation tools"
    ],
    benefits: [
      "Competitive salary",
      "Health and dental coverage",
      "401(k) matching",
      "Remote work setup allowance",
      "Learning budget",
      "Home office stipend"
    ],
    responsibilities: [
      "Create technical documentation",
      "Write API documentation",
      "Develop user guides",
      "Maintain documentation",
      "Review and edit content"
    ],
    workHours: "Flexible schedule",
    workEnvironment: "100% Remote",
    teamSize: "4 technical writers",
    reportingStructure: "Reports to Documentation Lead",
    growthOpportunities: [
      "Senior Technical Writer path",
      "Documentation lead role",
      "Content strategy opportunities",
      "Conference speaking"
    ],
    companyCulture: "We value clear communication and user-friendly documentation. Our team is passionate about making complex technical concepts accessible.",
    applicationProcess: [
      "Initial screening",
      "Writing assessment",
      "Technical knowledge review",
      "Team fit interview",
      "Final discussion"
    ],
    isNew: true,
    isUrgent: false
  }
]; 
interface JobDetailsProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    postedDate: string;
    skills: string[];
    description: string;
    requirements: string[];
    benefits: string[];
    responsibilities: string[];
    workHours: string;
    workEnvironment: string;
    teamSize: string;
    reportingStructure: string;
    growthOpportunities: string[];
    companyCulture: string;
    applicationProcess: string[];
  };
  onApply: (jobId: string) => void;
  onCompare: (job: any) => void;
  isInComparison: boolean;
}

export function JobDetails({ job, onApply, onCompare, isInComparison }: JobDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6 flex flex-col h-[calc(100vh-12rem)]">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pr-4">
        {/* Header with Apply Button */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h2>
            <div className="flex items-center gap-4 text-slate-600">
              <span>{job.company}</span>
              <span>•</span>
              <span>{job.location}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onCompare(job)}
              className={`px-4 py-2 rounded-lg border ${
                isInComparison
                  ? 'bg-purple-50 text-purple-600 border-purple-200'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {isInComparison ? 'Remove from Compare' : 'Add to Compare'}
            </button>
            <button
              onClick={() => onApply(job.id)}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Job Info */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 text-slate-600">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{job.postedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{job.type}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 text-sm rounded-full border border-purple-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Job Description</h3>
          <p className="text-slate-600 whitespace-pre-line">{job.description}</p>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Requirements</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Benefits</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Responsibilities</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        {/* Work Hours & Environment */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Work Hours & Environment</h3>
          <div className="space-y-2 text-slate-600">
            <p><strong>Hours:</strong> {job.workHours}</p>
            <p><strong>Environment:</strong> {job.workEnvironment}</p>
            <p><strong>Team Size:</strong> {job.teamSize}</p>
            <p><strong>Reporting Structure:</strong> {job.reportingStructure}</p>
          </div>
        </div>

        {/* Growth Opportunities */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Growth Opportunities</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            {job.growthOpportunities.map((opportunity, index) => (
              <li key={index}>{opportunity}</li>
            ))}
          </ul>
        </div>

        {/* Company Culture */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Company Culture</h3>
          <p className="text-slate-600">{job.companyCulture}</p>
        </div>

        {/* Application Process */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Application Process</h3>
          <ol className="list-decimal list-inside text-slate-600 space-y-2">
            {job.applicationProcess.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Apply Button at Bottom */}
      <div className="sticky bottom-0 left-0 right-0 bg-white pt-4">
        <button
          onClick={() => onApply(job.id)}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
        >
          Apply for this Position
        </button>
      </div>
    </div>
  );
} 
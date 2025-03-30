import { JobSearch } from '@/components/jobs/JobSearch';
import { JobFilters } from '@/components/jobs/JobFilters';
import { JobListing } from '@/components/jobs/JobListing';
import { useState, useCallback, useEffect } from 'react';

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

interface FilterState {
  datePosted: string;
  jobTypes: string[];
  salaryRange: [number, number];
  experienceLevels: string[];
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
];

export default function JobsPage() {
  const [sortBy, setSortBy] = useState('relevance');
  const [filters, setFilters] = useState<FilterState>({
    datePosted: '',
    jobTypes: [],
    salaryRange: [30000, 100000],
    experienceLevels: [],
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(SAMPLE_JOBS);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const handleFiltersChange = useCallback((newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when search changes
  }, []);

  // Apply filters and search
  useEffect(() => {
    let result = [...SAMPLE_JOBS];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Apply filters
    if (filters.jobTypes.length > 0) {
      result = result.filter(job => 
        filters.jobTypes.includes(job.type.toLowerCase())
      );
    }

    // Apply salary filter
    result = result.filter(job => {
      const [minSalary] = job.salary.match(/\d+/g)?.map(Number) || [0];
      return minSalary >= filters.salaryRange[0] && minSalary <= filters.salaryRange[1];
    });

    // Apply sorting
    switch (sortBy) {
      case 'recent':
        result.sort((a, b) => 
          parseInt(a.postedDate) - parseInt(b.postedDate)
        );
        break;
      case 'salary-high':
        result.sort((a, b) => {
          const [aMin] = a.salary.match(/\d+/g)?.map(Number) || [0];
          const [bMin] = b.salary.match(/\d+/g)?.map(Number) || [0];
          return bMin - aMin;
        });
        break;
      case 'salary-low':
        result.sort((a, b) => {
          const [aMin] = a.salary.match(/\d+/g)?.map(Number) || [0];
          const [bMin] = b.salary.match(/\d+/g)?.map(Number) || [0];
          return aMin - bMin;
        });
        break;
      // 'relevance' is default, no sorting needed
    }

    setFilteredJobs(result);
  }, [searchQuery, filters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <JobSearch onSearch={handleSearch} />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-20 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <JobFilters onFiltersChange={handleFiltersChange} />
          </div>
          
          {/* Job Listings */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex items-center justify-between">
                <p className="text-slate-600">
                  <span className="font-semibold text-slate-900">{filteredJobs.length}</span> jobs found
                </p>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-slate-600">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="relevance">Most Relevant</option>
                    <option value="recent">Most Recent</option>
                    <option value="salary-high">Highest Salary</option>
                    <option value="salary-low">Lowest Salary</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Job Listings Grid */}
            <div className="space-y-4">
              {paginatedJobs.map((job) => (
                <JobListing key={job.id} {...job} />
              ))}
              
              {filteredJobs.length === 0 && (
                <div className="text-center py-8">
                  <h3 className="text-lg font-medium text-slate-900 mb-2">No jobs found</h3>
                  <p className="text-slate-600">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {filteredJobs.length > 0 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm font-medium text-slate-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg ${
                        page === currentPage
                          ? 'bg-purple-600 text-white'
                          : 'text-slate-600 bg-white border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-sm font-medium text-slate-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 
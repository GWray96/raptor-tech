import React, { useState } from 'react';

interface JobFiltersProps {
  onFiltersChange: (filters: {
    jobTypes: string[];
    salaryRange: [number, number];
    mustHave: string[];
    dontShow: string[];
  }) => void;
}

export function JobFilters({ onFiltersChange }: JobFiltersProps) {
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([0, 200000]);
  const [mustHave, setMustHave] = useState<string[]>([]);
  const [dontShow, setDontShow] = useState<string[]>([]);

  const handleJobTypeChange = (type: string) => {
    const newJobTypes = jobTypes.includes(type)
      ? jobTypes.filter(t => t !== type)
      : [...jobTypes, type];
    setJobTypes(newJobTypes);
    updateFilters(newJobTypes, salaryRange, mustHave, dontShow);
  };

  const handleMustHaveChange = (item: string) => {
    const newMustHave = mustHave.includes(item)
      ? mustHave.filter(i => i !== item)
      : [...mustHave, item];
    setMustHave(newMustHave);
    updateFilters(jobTypes, salaryRange, newMustHave, dontShow);
  };

  const handleDontShowChange = (item: string) => {
    const newDontShow = dontShow.includes(item)
      ? dontShow.filter(i => i !== item)
      : [...dontShow, item];
    setDontShow(newDontShow);
    updateFilters(jobTypes, salaryRange, mustHave, newDontShow);
  };

  const updateFilters = (
    types: string[],
    salary: [number, number],
    must: string[],
    dont: string[]
  ) => {
    onFiltersChange({
      jobTypes: types,
      salaryRange: salary,
      mustHave: must,
      dontShow: dont
    });
  };

  const handleClear = () => {
    setJobTypes([]);
    setSalaryRange([0, 200000]);
    setMustHave([]);
    setDontShow([]);
    updateFilters([], [0, 200000], [], []);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Job Types */}
          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-3">Job Type</h3>
            <div className="space-y-2">
              {['Full-time', 'Part-time', 'Contract', 'Remote', 'Hybrid'].map(type => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={jobTypes.includes(type)}
                    onChange={() => handleJobTypeChange(type)}
                    className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-slate-600">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Must Haves */}
          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-3">Must Haves</h3>
            <div className="space-y-2">
              {['Healthcare', 'Stock Options', '401k', 'Training', 'Flexible Hours'].map(item => (
                <label key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={mustHave.includes(item)}
                    onChange={() => handleMustHaveChange(item)}
                    className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-slate-600">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Salary Range */}
          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-3">Salary Range</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-600">Min Salary</label>
                <select
                  value={salaryRange[0]}
                  onChange={(e) => {
                    const newRange: [number, number] = [Number(e.target.value), salaryRange[1]];
                    setSalaryRange(newRange);
                    updateFilters(jobTypes, newRange, mustHave, dontShow);
                  }}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 rounded-md"
                >
                  {[0, 30000, 50000, 70000, 90000, 120000].map(value => (
                    <option key={value} value={value}>
                      ${value.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-600">Max Salary</label>
                <select
                  value={salaryRange[1]}
                  onChange={(e) => {
                    const newRange: [number, number] = [salaryRange[0], Number(e.target.value)];
                    setSalaryRange(newRange);
                    updateFilters(jobTypes, newRange, mustHave, dontShow);
                  }}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 rounded-md"
                >
                  {[50000, 70000, 90000, 120000, 150000, 200000].map(value => (
                    <option key={value} value={value}>
                      ${value.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Don't Show */}
          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-3">Don't Show</h3>
            <div className="space-y-2">
              {['Entry Level', 'Senior Level', 'Manager', 'Internship'].map(item => (
                <label key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={dontShow.includes(item)}
                    onChange={() => handleDontShowChange(item)}
                    className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-slate-600">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200">
        <button
          onClick={handleClear}
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          Clear
        </button>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-600">
            {jobTypes.length + mustHave.length + (dontShow.length > 0 ? 1 : 0)} filters applied
          </span>
          <button
            onClick={() => onFiltersChange({ jobTypes, salaryRange, mustHave, dontShow })}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
} 
import React from 'react'
import { JobCard } from './JobCard'
import { ChevronDown, LayoutGrid, List } from 'lucide-react'
export const JobListings = () => {
  const jobListings = [
    {
      id: 1,
      title: 'UI/UX Designer',
      company: 'Pixelz Studio',
      location: 'Yogyakarta',
      logo: 'https://placehold.co/200x200/222222/FFFFFF?text=P',
      jobType: ['Fulltime', 'Hybrid'],
      experience: '2-4 Years',
      posted: '2 day ago',
      applicants: 140,
      salary: 1000,
      currency: '$',
    },
    {
      id: 2,
      title: 'Product Designer',
      company: 'Traveloka',
      location: 'Jakarta, Indonesia',
      logo: 'https://placehold.co/200x200/1da1f2/FFFFFF?text=T',
      jobType: ['Fulltime', 'Onsite'],
      experience: '2-4 Years',
      posted: 'an hour ago',
      applicants: 140,
      salary: 1500,
      currency: '$',
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'Tokopedia',
      location: 'Jakarta, Indonesia',
      logo: 'https://placehold.co/200x200/00aa5b/FFFFFF?text=T',
      jobType: ['Fulltime', 'Remote'],
      experience: '2-4 Years',
      posted: '2 day ago',
      applicants: 140,
      salary: 1000,
      currency: '$',
    },
    {
      id: 4,
      title: 'Interaction Designer',
      company: 'GoPay',
      location: 'Jakarta, Indonesia',
      logo: 'https://placehold.co/200x200/00aacc/FFFFFF?text=G',
      jobType: ['Fulltime', 'Onsite'],
      experience: '2-4 Years',
      posted: '2 day ago',
      applicants: 140,
      salary: 1000,
      currency: '$',
    },
    {
      id: 5,
      title: 'UI Designer',
      company: 'Gojek',
      location: 'Jakarta, Indonesia',
      logo: 'https://placehold.co/200x200/00aa5b/FFFFFF?text=G',
      jobType: ['Fulltime', 'Onsite'],
      experience: '0-2 Years',
      posted: '2 day ago',
      applicants: 521,
      salary: 900,
      currency: '$',
    },
    {
      id: 6,
      title: 'Sr. UI/UX Designer',
      company: 'Shopee',
      location: 'Jakarta, Indonesia',
      logo: 'https://placehold.co/200x200/ee4d2d/FFFFFF?text=S',
      jobType: ['Fulltime', 'Hybrid'],
      experience: '2-4 Years',
      posted: '2 day ago',
      applicants: 140,
      salary: 1000,
      currency: '$',
    },
    {
      id: 7,
      title: 'UX Writer',
      company: 'OVO',
      location: 'Jakarta, Indonesia',
      logo: 'https://placehold.co/200x200/4a148c/FFFFFF?text=O',
      jobType: ['Fulltime', 'Hybrid'],
      experience: '2-4 Years',
      posted: '2 day ago',
      applicants: 140,
      salary: 1000,
      currency: '$',
    },
    {
      id: 8,
      title: 'UX Researcher',
      company: 'Dana',
      location: 'Jakarta, Indonesia',
      logo: 'https://placehold.co/200x200/1da1f2/FFFFFF?text=D',
      jobType: ['Fulltime', 'Hybrid'],
      experience: '2-4 Years',
      posted: '2 day ago',
      applicants: 140,
      salary: 1000,
      currency: '$',
    },
    {
      id: 9,
      title: 'UI Engineer',
      company: 'GoPay',
      location: 'Jakarta, Indonesia',
      logo: 'https://placehold.co/200x200/00aa5b/FFFFFF?text=G',
      jobType: ['Fulltime', 'Hybrid'],
      experience: '2-4 Years',
      posted: '2 day ago',
      applicants: 140,
      salary: 1000,
      currency: '$',
    },
  ]
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div className="text-gray-500 mb-4 sm:mb-0">
          Showing <span className="font-bold text-gray-900">150</span> Jobs{' '}
          <span className="font-bold text-gray-900">UI/UX Designer</span> in{' '}
          <span className="font-bold text-gray-900">Indonesia</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Sort by</span>
            <button className="flex items-center gap-1 text-gray-900 font-medium">
              Relevancy <ChevronDown size={16} />
            </button>
          </div>
          <div className="flex bg-gray-100 p-1 rounded-md">
            <button className="p-1 bg-white rounded-md shadow-sm">
              <LayoutGrid size={20} />
            </button>
            <button className="p-1 text-gray-400">
              <List size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {jobListings.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}

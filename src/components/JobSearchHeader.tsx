import React from 'react'
import { Search, MapPin, ChevronDown } from 'lucide-react'
export const JobSearchHeader = () => {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-grow">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="UI/UX Designer"
            className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative md:w-48">
          <select className="w-full appearance-none pl-3 pr-10 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Indonesia</option>
            <option>Sri Lanka</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <div className="relative md:w-48">
          <MapPin
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <select className="w-full appearance-none pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All City</option>
          </select>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
          Search
        </button>
      </div>
    </div>
  )
}

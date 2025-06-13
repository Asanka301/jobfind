import { JobListings } from '@/components/JobListings'
import { JobSearchHeader } from '@/components/JobSearchHeader'
import React from 'react'

// export function App() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-6 max-w-7xl">
//         <JobSearchHeader />
//         <JobListings />
//       </div>
//     </div>
//   )
// }




const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
         <div className="mx-auto px-4 py-6 w-full">
           <JobSearchHeader />
           <JobListings />
         </div>
       </div>
  )
}

export default page
// "use client"
// import Image from "next/image";
// import React from "react";
// import { Calendar } from "lucide-react";
// import { useRouter } from "next/navigation";
// //import  formatDates  from "@/lib/utils";


// const JobCard = ({ job, route  }) => {
//   const router = useRouter();

//   const jobTypeBg = (type : any) => {
//     switch (type) {
//       case "Full Time":
//         return "bg-green-500/20 text-green-600";
//       case "Part Time":
//         return "bg-purple-500/20 text-purple-600";
//       case "Contract":
//         return "bg-red-500/20 text-red-600";
//       case "Internship":
//         return "bg-indigo-500/20 text-indigo-600";
//       default:
//         return "bg-gray-500/20 text-gray-600";
//     }
//   };

//   return (
//     <div className="p-8 rounded-xl flex flex-col gap-5 bg-white shadow-md hover:shadow-lg border transition">
//       <div className="flex justify-between items-center">
//         <div
//           className="group flex gap-3 items-center cursor-pointer"
//           onClick={() => router.push(`/${route}/${job.id}`)}
//         >
//           <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
//             <Image
//               src={job?.companyLogo || "/default-logo.png"}
//               alt={job?.companyName || "Company"}
//               width={40}
//               height={40}
//               className="rounded-md object-cover"
//             />
//           </div>

//           <div className="flex flex-col">
//             <h4 className="font-bold text-lg text-gray-800">{job.title}</h4>
//             <p className="text-sm text-gray-500">{job.location}</p>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center gap-2">
//         {job.jobType?.map((type : any, index : any) => (
//           <span
//             key={index}
//             className={`py-1 px-3 text-xs font-medium rounded-md border ${jobTypeBg(
//               type
//             )}`}
//           >
//             {type}
//           </span>
//         ))}
//       </div>

//       <p className="text-sm text-gray-600">
//         {job.description?.length > 100
//           ? `${job.description.substring(0, 100)}...`
//           : job.description}
//       </p>

    

//       <div className="flex justify-between items-center">
//         <p className="text-lg font-semibold text-gray-700">
//           ${job.salary} <span className="text-gray-500 text-sm">/{job.salaryType}</span>
//         </p>
//         <p className="flex items-center gap-2 text-sm text-gray-400">
//           <Calendar size={16} />
//           Posted: {(job.createdAt)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default JobCard;


"use client"
import React from 'react'
import { Bookmark } from 'lucide-react'
import { useRouter } from "next/navigation";

interface JobProps {
  job: {
    id: number
    title: string
    company: string
    location: string
    logo: string
    jobType: string[]
    experience: string
    posted: string
    applicants: number
    salary: number
    currency: string
  }
}
export const JobCard = ({ job }: JobProps) => {
  const router = useRouter();


  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 relative">
      <div className="absolute top-5 right-5">
        <button className="text-gray-400 hover:text-gray-600">
          <Bookmark size={20} />
        </button>
      </div>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
          <img
            src={job.logo}
            alt={job.company}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium text-lg text-gray-900">{job.title}</h3>
          <p className="text-gray-600 text-sm">
            {job.company} • {job.location}
          </p>
        </div>
      </div>
      <p className="text-gray-500 text-sm mb-3">Match with your profile</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {job.jobType.map((type, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
          >
            {type}
          </span>
        ))}
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
          {job.experience}
        </span>
      </div>
      <div className="text-xs text-gray-500 mb-4">
        {job.posted} • {job.applicants} Applicants
      </div>
      <div className="flex items-center justify-between">
        <div className="text-blue-500 font-bold">
          {job.currency}
          {job.salary}
          <span className="text-gray-400 font-normal">/m</span>
        </div>
        <button onClick={() => router.push(`/health/${job.id}`)} className="text-blue-500 font-medium hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  )
}

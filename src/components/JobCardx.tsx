"use client";
import Image from "next/image";
import React from "react";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

// Define the Job type
interface Job {
  id: number | string;
  title: string;
  location: string;
  description: string;
  salary: number;
  salaryType: string;
  companyLogo?: string;
  companyName?: string;
  createdAt: string;
  jobType: string[];
}

// Define the component props type
interface JobCardProps {
  job: Job;
  route: string;
}

const JobCard: React.FC<JobCardProps> = ({ job, route }) => {
  const router = useRouter();

  const jobTypeBg = (type: string) => {
    switch (type) {
      case "Full Time":
        return "bg-green-500/20 text-green-600";
      case "Part Time":
        return "bg-purple-500/20 text-purple-600";
      case "Contract":
        return "bg-red-500/20 text-red-600";
      case "Internship":
        return "bg-indigo-500/20 text-indigo-600";
      default:
        return "bg-gray-500/20 text-gray-600";
    }
  };

  return (
    <div className="p-8 rounded-xl flex flex-col gap-5 bg-white shadow-md hover:shadow-lg border transition">
      <div className="flex justify-between items-center">
        <div
          className="group flex gap-3 items-center cursor-pointer"
          onClick={() => router.push(`/${route}/${job.id}`)}
        >
          <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
            <Image
              src={job.companyLogo || "/default-logo.png"}
              alt={job.companyName || "Company"}
              width={40}
              height={40}
              className="rounded-md object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-lg text-gray-800">{job.title}</h4>
            <p className="text-sm text-gray-500">{job.location}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {job.jobType.map((type, index) => (
          <span
            key={index}
            className={`py-1 px-3 text-xs font-medium rounded-md border ${jobTypeBg(
              type
            )}`}
          >
            {type}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-600">
        {job.description.length > 100
          ? `${job.description.substring(0, 100)}...`
          : job.description}
      </p>

      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold text-gray-700">
          ${job.salary} <span className="text-gray-500 text-sm">/{job.salaryType}</span>
        </p>
        <p className="flex items-center gap-2 text-sm text-gray-400">
          <Calendar size={16} />
          Posted: {job.createdAt}
        </p>
      </div>
    </div>
  );
};

export default JobCard;

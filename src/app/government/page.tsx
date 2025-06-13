"use client"
import React from "react";
import JobCardx from "@/components/JobCardx"; 
import dummyJobs from "@/lib/data";
import { useRouter } from "next/navigation";

// const dummyJobs = [
//   {
//     id: "1",
//     title: "Frontend Developer",
//     salaryType: "Yearly",
//     salary: 60000,
//     createdBy: {
//       name: "Tech Corp",
//       profilePicture: "/images/company1.png",
//     },
//     applicants: [{ id: "101" }, { id: "102" }],
//     jobType: ["Full Time"],
//     createdAt: "2024-03-10",
//     likes: [],
//   },
//   {
//     id: "2",
//     title: "Backend Engineer",
//     salaryType: "Monthly",
//     salary: 5000,
//     createdBy: {
//       name: "Innovate Ltd",
//       profilePicture: "/images/company2.png",
//     },
//     applicants: [{ id: "103" }],
//     jobType: ["Part Time"],
//     createdAt: "2024-03-08",
//     likes: [],
//   },
// ];

function Page() {

  const router = useRouter();
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Job Listings</h1>
      <div className="grid gap-6">
        {dummyJobs.map((job) => (
          <JobCardx key={job.id} job={job} route="government"/>
        ))}
      </div>
    </div>
  );
}

export default Page;

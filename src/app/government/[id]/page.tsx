"use client";

import { useGlobalContext } from "@/context/globalContext";
import { useJobsContext } from "@/context/jobsContext";
import { Job } from "@/types/types";
//import formatMoney from "@/utils/formatMoney";
//import { formatDates } from "@/utils/fotmatDates";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
//import toast from "react-hot-toast";
//import { bookmark, bookmarkEmpty } from "@/utils/Icons";

import dummyJobs from "@/lib/data";

function Page() {
  //const { jobs, likeJob, applyToJob } = useJobsContext();
 // const { userProfile, isAuthenticated } = useGlobalContext();
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const [isLiked, setIsLiked] = React.useState(false);
  const [isApplied, setIsApplied] = React.useState(false);

  const job = dummyJobs.find((job) => job.id === id);
  const otherJobs = dummyJobs.filter((job) => job.id !== id);

//   useEffect(() => {
//     if (job) {
//       setIsApplied(job.applicants.includes(userProfile._id));
//     }
//   }, [job, userProfile.id]);

//   useEffect(() => {
//     if (job) {
//       setIsLiked(job.likes.includes(userProfile._id));
//     }
//   }, [job, userProfile.id]);

  if (!job) return null;

  const {
    title,
    location,
    description,
    salary,
    createdBy,
    applicants,
    jobType,
    createdAt,
    salaryType,
    negotiable,
  } = job;

  //const { name, profilePicture } = createdBy;

//   const handleLike = (id: string) => {
//     setIsLiked((prev) => !prev);
//     likeJob(id);
//   };

  return (
    <main>
      {/* <Header /> */}

      <div className="p-8 mb-8 mx-auto w-[90%] rounded-md flex gap-8">
        {/* <div className="w-[26%] flex flex-col gap-8">
          <JobCard activeJob job={job} />

          {otherJobs.map((job: Job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div> */}

        <div className="flex-1 bg-white p-6 rounded-md">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
       
              {/* <button
                className={`text-2xl  ${
                  isLiked ? "text-[#7263f3]" : "text-gray-400"
                }`}
                onClick={() => {
                  isAuthenticated
                    ? handleLike(job.id)
                    : router.push("https://jobfindr-q1cl.onrender.com/login");
                }}
              >
                {isLiked ? bookmark : bookmarkEmpty}
              </button> */}
            </div>

            <h1 className="text-2xl font-semibold">{title}</h1>
            <div className="flex gap-4 items-center">
              <p className="text-gray-500">{location}</p>
            </div>

            <div className="mt-2 flex gap-4 justify-between items-center">
              <p className="flex-1 py-2 px-4 flex flex-col items-center justify-center gap-1 bg-green-500/20 rounded-xl">
                <span className="text-sm">Salary</span>

                <span>
                  <span className="font-semibold">
                    {salary}
                   </span>
                  <span className="font-medium text-gray-500 text-lg">
                    /
                    {salaryType
                      ? `${
                          salaryType === "Yearly"
                            ? "pa"
                            : salaryType === "Monthly"
                            ? "pcm"
                            : salaryType === "Weekly"
                            ? "pw"
                            : "ph"
                        }`
                      : ""}
                  </span>
                </span>
              </p>

              <p className="flex-1 py-2 px-4 flex flex-col items-center justify-center gap-1 bg-purple-500/20 rounded-xl">
                <span className="text-sm">Posted</span>
                <span className="font-semibold">{createdAt}</span>
              </p>

              <p className="flex-1 py-2 px-4 flex flex-col items-center justify-center gap-1 bg-blue-500/20 rounded-xl">
                <span className="text-sm">Applicants</span>
                <span className="font-bold">{applicants.length}</span>
              </p>

              <p className="flex-1 py-2 px-4 flex flex-col items-center justify-center gap-1 bg-yellow-500/20 rounded-xl">
                <span className="text-sm">Job Type</span>
                <span className="font-bold">{jobType[0]}</span>
              </p>
            </div>

            <h2 className="font-bold text-2xl mt-2">Job Description</h2>
          </div>

          <div>
         <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
         <div className="mx-auto max-w-screen-xl  ">
           <div className="mx-auto max-w-5xl">
             {/* <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Product description</h2> */}
             {/* <div className="my-8 xl:mb-16 xl:mt-12">
               <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-showcase.svg" alt="" />
               <img className="hidden w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-showcase-dark.svg" alt="" />
             </div> */}
             <div className="mx-auto max-w-2xl space-y-6">
               <p className="text-base font-normal text-gray-500 dark:text-gray-400">The iMac  8-Core CPU/8-Core GPU/4 USB-C Shaped Ports (2021) model features a 5-nm Apple M1 processor with 8 cores (4 performance cores and 4 efficiency cores), an 8-core GPU, a 16-core Neural Engine, 8 GB of onboard RAM, and a 1 TB onboard SSD.</p>
       
               <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                 This all is housed in a wafer thin aluminum case with flat edges that includes a 4480x2520, 218 PPI, LED-backlit,True Ton widescreen Retina 4.5 display mounted on a svelte aluminum stand. This specific model is offered in the a two-tone Blue color. It also has an integrated 1080p FaceTime HD camera, a studio-quality three-mic array and a high-fidelity six-speaker system that supports Spatial Audio with Dolby Atmos.
               </p>
       
               <p className="text-base font-semibold text-gray-900 dark:text-white">Key Features and Benefits:</p>
               <ul className="list-outside list-disc space-y-4 pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
                 <li>
                   <span className="font-semibold text-gray-900 dark:text-white"> Brilliant 4.5K Retina display: </span>
                   see the big picture and all the detailsSee it all in sharp, glorious detail onthe immersive 24-inch 4.5K Retina display. The P3 wide color gamut brings what youre watching to life in over a billion colors. Images shine with a brilliant 500 nits of brightness. Industry-leading anti-reflective coating delivers greater comfort and readability. And True Tone technology automatically adjusts the color temperature of your display to the ambient light of your
                   environment, for a more natural viewing experience. So whether youre editing photos, working on presentations, or watching your favorite shows and movies, everything looks incredible on iMac.
                 </li>
                 <li>
                   <span className="font-semibold text-gray-900 dark:text-white"> 1080p FaceTime HD camera: </span>
                   ready for your close-upIts the best camera system ever in a Mac. Double the resolution for higher-quality video calls. A larger sensor that captures more light. And the advanced image signal processor (ISP) of M1 greatly improves image quality. So from collaborating with coworkers to catching up with friends and family, youll always look your best.
                 </li>
       
                 <li>
                   <span className="font-semibold text-gray-900 dark:text-white"> Studio-quality mics for high-quality conversations: </span>
                   whether youre on a video call with a friend, cutting a track, or recording a podcast, the microphones on iMac make sure you come through loud, crisp, and clear. The studio-quality three-mic array is designed to reduce feedback, so conversations flow more naturally and you interrupt each other less. And beamforming technology helps the mics ignore background noise. Which means everyone hears you - not whats going on around you.
                 </li>
       
                 <li>
                   <span className="font-semibold text-gray-900 dark:text-white"> Six-speaker sound system: audio that really fills a room: </span>
                   the sound system on iMac brings incredible, room-filling audio to any space. Two pairs of force-canceling woofers create rich, deep bass without unwanted vibrations. And each pair is balanced with a high-performance tweeter. The result is a massive, detailed soundstage that takes your movies, music, and more to the next level.
                 </li>
       
                 <li>
                   <span className="font-semibold text-gray-900 dark:text-white"> M1 chip: with great power comes great capability: </span>
                   M1 is the most powerful chip Apple has ever made. macOS Big Sur is an advanced desktop operating system. Combined, they take iMac to entirely new levels of performance, efficiency, and security. iMac wakes from sleep almost instantly, apps launch in a flash, and the whole system feels fluid, smooth, and snappy. With up to 85 percent faster CPU performance and up to two times faster graphics performance than standard 21.5-inch iMac models, you can use apps like
                   Xcode and Affinity Photo to compile code in a fraction of the time or edit photos in real time. And it runs cool and quiet even while tackling these intense workloads. Thats the power of hardware, software, and silicon - all designed together.
                 </li>
               </ul>
             </div>
           
             <div className="mx-auto mb-6 max-w-3xl space-y-6 md:mb-12">
               <p className="text-base font-normal text-gray-500 dark:text-gray-400">Connectivity includes two Thunderbolt / USB 4 ports and two USB 3 ports (all with a USB-C connector), a 3.5 mm headphone jack conveniently mounted on the left edge of the display, Wi-Fi 6 (802.11ax), and Bluetooth 5.0.</p>
       
               <p className="text-base font-normal text-gray-500 dark:text-gray-400">A-Grade/CR: iMacs are in 9/10 Cosmetic Condition and are 100% Fully Functional. iMacs will be shipped in generic packaging and will contain generic accessories. 90 Days Seller Warranty Included. iMacs may show signs of wear like scratches, scuffs and minor dents.</p>
             </div>
             <div className="text-center">
               <a href="#" className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more...</a>
             </div>
           </div>
         </div>
       </section>
          </div>
        </div>

        <div className="w-[26%] flex flex-col gap-8">
          {/* <button
            className={`text-white py-4 rounded-full hover:bg-[#7263f3]/90 hover:text-white ${
              isApplied ? "bg-green-500" : "bg-[#7263f3]"
            }`}
            onClick={() => {
              if (isAuthenticated) {
                if (!isApplied) {
                  applyToJob(job._id);
                  setIsApplied(true);
                } else {
                  toast.error("You have already applied to this job");
                }
              } else {
                router.push("https://jobfindr-q1cl.onrender.com/login");
              }
            }}
          >
            {isApplied ? "Applied" : "Apply Now"}
          </button> */}

          <div className="p-6 flex flex-col gap-2 bg-white rounded-md">
            <h3 className="text-lg font-semibold">Other Information</h3>

            <div className="flex flex-col gap-2">
              {/* <p>
                <span className="font-bold">Posted:</span>{" "}
                {formatDates(createdAt)}
              </p> */}

              <p>
                <span className="font-bold">Salary negotiable: </span>
                <span
                  className={`${
                    negotiable ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {negotiable ? "Yes" : "No"}
                </span>
              </p>

              <p>
                <span className="font-bold">Location:</span> {location}
              </p>

              <p>
                <span className="font-bold">Job Type:</span> {jobType[0]}
              </p>
            </div>
          </div>

          <div className="p-6 flex flex-col gap-2 bg-white rounded-md">
            <h3 className="text-lg font-semibold">Tags</h3>
            <p>Other relevant tags for the job position.</p>

            <div className="flex flex-wrap gap-4">
              {job.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-1 rounded-full text-sm font-medium flex items-center bg-red-500/20 text-red-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 flex flex-col gap-2 bg-white rounded-md">
            <h3 className="text-lg font-semibold">Skills</h3>
            <p>
              This is a full-time position. The successful candidate will be
              responsible for the following:
            </p>

            <div className="flex flex-wrap gap-4">
              {job.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-1 rounded-full text-sm font-medium flex items-center bg-indigo-500/20 text-[#7263f3]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </main>
  );
}

export default Page;

import React from 'react'
import { HeartIcon, ShareIcon, ChevronDownIcon } from 'lucide-react'
const JobDetailsPage = () => {
  return (
    <div className=" mx-auto bg-white shadow-sm rounded-lg p-6">
      <div className="text-sm text-gray-500 mb-4">Preview</div>
      {/* Job Header */}
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">UI Designer</h1>
            <div className="text-green-600 flex items-center gap-1 mt-1">
              Ibn Sina Hospital{' '}
              <span className="inline-block w-4 h-4 bg-green-600 rounded-full ml-1 text-white flex items-center justify-center text-xs">
                ✓
              </span>
            </div>
            <div className="flex items-center text-gray-500 mt-1">
              <span>New York, USA</span>
              <span className="mx-2">•</span>
              <span>Onsite</span>
            </div>
            <div className="text-gray-500 mt-1">
              Posted 3 days ago <span className="mx-2">•</span> 34 Applicants
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <button className="border flex gap-1 items-center border-gray-300 rounded-md px-2 py-1 hover:bg-gray-50">
                Save<HeartIcon size={16} className="text-gray-600 " />
              </button>
              <button className="border flex gap-1 border-gray-300 rounded-md px-2 py-1 items-center hover:bg-gray-50">
              Share  <ShareIcon size={16} className="text-gray-600" />
              </button>
            </div>
            <button className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 w-full">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      {/* Job Details */}
      <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-1  gap-4 border-t border-b py-4 mb-6">
        <div className='bg-gray-100 p-2 rounded-xl'>
          <div className="text-gray-500 text-sm">Experience</div>
          <div className="font-medium">Minimum 1 year</div>
        </div>
        <div className='bg-gray-100 p-2 rounded-xl'>
          <div className="text-gray-500 text-sm">Work Level</div>
          <div className="font-medium">Senior Level</div>
        </div>
        <div className='bg-gray-100 p-2 rounded-xl'>
          <div className="text-gray-500 text-sm">Employee Type</div>
          <div className="font-medium">Full Time</div>
        </div>
        <div className='bg-gray-100 p-2 rounded-xl'>
          <div className="text-gray-500 text-sm">Offer Salary</div>
          <div className="font-medium">$2000/month</div>
        </div>
      </div>
      {/* Overview */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">Overview</h2>
        <p className="mb-3 text-gray-700">
          We are looking for a Medical Biller to join our medical facilitys
          administrative team to process patient billing information.
        </p>
        <p className="mb-3 text-gray-700">
          A Medical Billers responsibilities include tasks that require data
          analysis and sound judgment to help our patients throughout the
          billing process. In addition, the best candidate for this position
          will be experienced with billing software and medical insurance
          policies.
        </p>
        <p className="mb-3 text-gray-700">
          Ultimately, you will demonstrate excellent written and verbal
          communication skills, which are necessary when interacting with
          patients or agents who regularly deal in these matters.
        </p>
      </div>
      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">Responsibilities</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            Generate revenue by making payment arrangements, collecting accounts
            and monitoring and pursuing delinquent accounts.
          </li>
          <li>
            Collect delinquent accounts by establishing payment arrangements
            with patients, monitoring payments and following up with patients
            when payment lapses occur.
          </li>
          <li>
            Utilize collection agencies and small claims courts to collect
            accounts by evaluating and selecting collection agencies,
            determining the appropriateness of pursuing legal remedies and
            testifies in court cases, when necessary.
          </li>
          <li>Complete Medicare bad-debt cost report.</li>
          <li>Secure outstanding balance payments for care of employees.</li>
        </ul>
      </div>
      {/* Requirements and skills */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">Requirements and skills</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Previous work experience as a Medical Biller or similar role.</li>
          <li>
            Solid understanding of billing software and electronic medical
            records.
          </li>
          <li>Proven ability to multitask and manage time effectively.</li>
          <li>Excellent written and verbal communication skills.</li>
          <li>Outstanding problem-solving and organizational abilities.</li>
          <li>
            A relevant degree in business, health care administration,
            accounting or related field is preferred.
          </li>
        </ul>
      </div>
      {/* FAQ */}
      <div>
        <h2 className="text-xl font-bold mb-3">Frequently Asked Questions</h2>
        <div className="border-t">
          <button className="flex justify-between items-center w-full py-3 text-left font-medium">
            <span>What does a Medical Biller do?</span>
            <ChevronDownIcon size={20} />
          </button>
        </div>
        <div className="border-t">
          <button className="flex justify-between items-center w-full py-3 text-left font-medium">
            <span>
              What are the duties and responsibilities of a Medical Biller?
            </span>
            <ChevronDownIcon size={20} className="transform rotate-180" />
          </button>
          <div className="pb-3 text-gray-700">
            <p className="mb-2">
              A Medical Biller is in charge of calculating and collecting
              payments for services like procedures, tests or surgeries. They
              work closely with patients to create a payment plan that works
              best with their budget while also providing an invoice after each
              visit so they can collect payment promptly.
            </p>
          </div>
        </div>
        <div className="border-t">
          <button className="flex justify-between items-center w-full py-3 text-left font-medium">
            <span>What makes a good Medical Biller?</span>
            <ChevronDownIcon size={20} />
          </button>
        </div>
        <div className="border-t border-b">
          <button className="flex justify-between items-center w-full py-3 text-left font-medium">
            <span>Who does a Medical Biller work with?</span>
            <ChevronDownIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
export default JobDetailsPage

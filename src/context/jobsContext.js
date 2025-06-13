import React, { createContext, useContext, useEffect, useState } from "react";
import { useGlobalContext } from "./globalContext";
import { useRouter } from "next/navigation";
import dummyJobs from "@/lib/data";

const JobsContext = createContext();

export const JobsContextProvider = ({ children }) => {
  const { userProfile, getUserProfile } = useGlobalContext();
  const router = useRouter();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState({
    tags: "",
    location: "",
    title: "",
  });

  // Filters
  const [filters, setFilters] = useState({
    fullTime: false,
    partTime: false,
    internship: false,
    contract: false,
    fullStack: false,
    backend: false,
    devOps: false,
    uiux: false,
  });

  const [minSalary, setMinSalary] = useState(30000);
  const [maxSalary, setMaxSalary] = useState(120000);

  // Load dummy jobs instead of API call
  const getJobs = () => {
    setLoading(true);
    setTimeout(() => {
      setJobs(dummyJobs); // Use the hardcoded data
      setLoading(false);
    }, 500); // Simulating API delay
  };

  // Search jobs locally in dummy data
  const searchJobs = (tags, location, title) => {
    setLoading(true);
    setTimeout(() => {
      const filteredJobs = dummyJobs.filter((job) => {
        return (
          (tags
            ? job.tags.some((tag) =>
                tag.toLowerCase().includes(tags.toLowerCase())
              )
            : true) &&
          (location
            ? job.location.toLowerCase().includes(location.toLowerCase())
            : true) &&
          (title ? job.title.toLowerCase().includes(title.toLowerCase()) : true)
        );
      });
      setJobs(filteredJobs);
      setLoading(false);
    }, 500);
  };

  // Get job by ID
  const getJobById = (id) => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const job = dummyJobs.find((job) => job._id === id);
        setLoading(false);
        resolve(job);
      }, 500);
    });
  };

  const handleSearchChange = (searchName, value) => {
    setSearchQuery((prev) => ({ ...prev, [searchName]: value }));
  };

  const handleFilterChange = (filterName) => {
    setFilters((prev) => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <JobsContext.Provider
      value={{
        jobs,
        loading,
        searchJobs,
        getJobById,
        handleSearchChange,
        searchQuery,
        setSearchQuery,
        handleFilterChange,
        filters,
        minSalary,
        setMinSalary,
        maxSalary,
        setMaxSalary,
        setFilters,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export const useJobsContext = () => {
  return useContext(JobsContext);
};

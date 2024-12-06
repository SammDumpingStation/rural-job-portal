import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

// Safely get Supabase credentials
const supabaseUrl = import.meta.env && import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey =
  import.meta.env && import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Start with base query
        let query = supabase.from("jobs").select("*");

        // If isHome is true, limit to 3 jobs
        if (isHome) {
          query = query.limit(3);
        }

        // Execute the query
        const { data, error } = await query;

        if (error) {
          throw error;
        }

        // Set jobs data
        setJobs(data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  // Handle loading state
  if (loading) {
    return <Spinner loading={loading} />;
  }

  // Handle error state
  if (error) {
    return (
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-6">
            Error Loading Jobs
          </h2>
          <p className="text-red-600">{error.message}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>

        {jobs.length === 0 && (
          <p className="text-center text-gray-500">No jobs found</p>
        )}
      </div>
    </section>
  );
};

export default JobListings;

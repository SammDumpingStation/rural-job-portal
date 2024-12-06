import { createClient } from "@supabase/supabase-js";
import { jobs } from "../scripts/jobs.js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

async function importJobs() {
  try {
    // Prepare the jobs data for insertion
    // We'll split the job and company data since they have nested structures
    const jobsToInsert = jobs.map((job) => ({
      id: job.id,
      title: job.title,
      type: job.type,
      location: job.location,
      description: job.description,
      salary: job.salary,
      company_name: job.company.name,
      company_description: job.company.description,
      contact_email: job.company.contactEmail,
      contact_phone: job.company.contactPhone,
    }));

    // Insert jobs into Supabase
    const { data, error } = await supabase
      .from("jobs") // Replace 'jobs' with your actual table name
      .upsert(jobsToInsert, {
        onConflict: "id",
        returning: "minimal",
      });

    if (error) throw error;

    console.log(`Successfully imported ${jobsToInsert.length} jobs`);
  } catch (error) {
    console.error("Error importing jobs:", error);
  }
}

// Run the import
importJobs();

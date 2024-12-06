import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    const { data, error } = await supabase.from("jobs").insert([
      {
        title: newJob.title,
        type: newJob.type,
        location: newJob.location,
        description: newJob.description,
        salary: newJob.salary,
        company_name: newJob.companyName,
        company_description: newJob.companyDescription,
        contact_email: newJob.companyContactEmail,
        contact_phone: newJob.companyContactPhone,
      },
    ]);

    if (error) {
      console.error("Error adding job:", error);
      throw error;
    }

    return data;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const { error } = await supabase.from("jobs").delete().eq("id", id);

    if (error) {
      console.error("Error deleting job:", error);
      throw error;
    }

    return;
  };

  // Update Job
  const updateJob = async (job) => {
    const { data, error } = await supabase
      .from("jobs")
      .update({
        title: job.title,
        type: job.type,
        location: job.location,
        description: job.description,
        salary: job.salary,
        company_name: job.company.name,
        company_description: job.company.description,
        contact_email: job.company.contactEmail,
        contact_phone: job.company.contactPhone,
      })
      .eq("id", job.id);

    if (error) {
      console.error("Error updating job:", error);
      throw error;
    }

    return data;
  };

  // Custom job loader for React Router
  const supabaseJobLoader = async ({ params }) => {
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("id", params.id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={supabaseJobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={supabaseJobLoader}
        />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;

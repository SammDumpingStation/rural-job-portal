import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: false,
    },
  }
);
// Job listings data
const jobListings = [
  {
    recruiter_id: "user_2q205lKcoDvsuIEEIzachbkBVk3",
    title: "Organic Farm Manager",
    company_id: 2,
    description:
      "Oversee operations on an organic farm, ensuring adherence to sustainable farming practices.",
    location: "Banaue, Ifugao, Philippines",
    requirements:
      "Degree in Agriculture or related field; Experience in organic farming; Strong leadership skills.",
    isOpen: true,
  },
  {
    recruiter_id: "user_2q205lKcoDvsuIEEIzachbkBVk3",
    title: "Remote Education Specialist",
    company_id: 4,
    description:
      "Develop and deliver online learning programs for rural students with limited access to education.",
    location: "Sagada, Mountain Province, Philippines",
    requirements:
      "Degree in Education or related field; Proficiency in digital teaching tools; Strong communication skills.",
    isOpen: true,
  },
  {
    recruiter_id: "user_2q205lKcoDvsuIEEIzachbkBVk3",
    title: "Livestock Nutrition Consultant",
    company_id: 3,
    description:
      "Advise farmers on optimal nutrition plans for livestock to improve health and productivity.",
    location: "San Jose, Antique, Philippines",
    requirements:
      "Background in Animal Science or Veterinary Medicine; Knowledge of livestock nutrition; Excellent interpersonal skills.",
    isOpen: true,
  },
  {
    recruiter_id: "user_2q205lKcoDvsuIEEIzachbkBVk3",
    title: "Rural Infrastructure Planner",
    company_id: 7,
    description:
      "Plan and oversee the development of essential infrastructure in rural communities, such as roads and water systems.",
    location: "Boac, Marinduque, Philippines",
    requirements:
      "Degree in Civil Engineering or Urban Planning; Experience in rural development projects; Strong organizational skills.",
    isOpen: true,
  },
  {
    recruiter_id: "user_2q205lKcoDvsuIEEIzachbkBVk3",
    title: "Community Development Officer",
    company_id: 6,
    description:
      "Facilitate programs aimed at improving the quality of life in rural areas, focusing on education, health, and livelihood.",
    location: "Guihulngan, Negros Oriental, Philippines",
    requirements:
      "Experience in community development; Strong project management skills; Ability to engage effectively with local communities.",
    isOpen: true,
  },
  {
    recruiter_id: "user_2q205lKcoDvsuIEEIzachbkBVk3",
    title: "Renewable Energy Technician",
    company_id: 1,
    description:
      "Install and maintain renewable energy systems, such as solar panels, in off-grid rural areas.",
    location: "Kalilangan, Bukidnon, Philippines",
    requirements:
      "Certification in renewable energy technology; Experience with solar power systems; Strong technical problem-solving skills.",
    isOpen: true,
  },
  {
    recruiter_id: "user_2q205lKcoDvsuIEEIzachbkBVk3",
    title: "Wildlife Conservation Specialist",
    company_id: 5,
    description:
      "Work on projects to protect wildlife and their habitats in rural and forested areas.",
    location: "Brooke's Point, Palawan, Philippines",
    requirements:
      "Degree in Environmental Science or related field; Passion for wildlife conservation; Fieldwork experience.",
    isOpen: true,
  },
  {
    recruiter_id: "user_2q205lKcoDvsuIEEIzachbkBVk3",
    title: "Handicraft Training Coordinator",
    company_id: 8,
    description:
      "Organize training sessions to teach rural residents traditional and modern handicraft skills for income generation.",
    location: "Virac, Catanduanes, Philippines",
    requirements:
      "Experience in arts and crafts; Strong training and facilitation skills; Knowledge of local culture and traditions.",
    isOpen: true,
  },
  {
    recruiter_id: "user_2q205lKcoDvsuIEEIzachbkBVk3",
    title: "Rural Healthcare Advocate",
    company_id: 2,
    description:
      "Advocate for improved healthcare services in rural areas by engaging with policymakers and local communities.",
    location: "Tandag, Surigao del Sur, Philippines",
    requirements:
      "Background in Public Health or Advocacy; Strong communication and networking skills; Passion for rural healthcare improvement.",
    isOpen: true,
  },
  {
    recruiter_id: "user_2q205lKcoDvsuIEEIzachbkBVk3",
    title: "Soil and Crop Scientist",
    company_id: 4,
    description:
      "Conduct research and provide advice on improving soil health and crop yields in rural agricultural areas.",
    location: "San Fernando, Bukidnon, Philippines",
    requirements:
      "Degree in Soil Science or Agronomy; Research experience; Practical knowledge of sustainable agriculture.",
    isOpen: true,
  },
];

// Function to insert jobs
async function insertJobs() {
  try {
    // Insert jobs and handle the response
    const { data, error } = await supabase.from("jobs").insert(jobListings);

    if (error) {
      console.error("Error inserting jobs:", error);
      return;
    }

    console.log("Successfully inserted jobs:", data);
  } catch (catchError) {
    console.error("Unexpected error:", catchError);
  }
}

// Run the insertion
insertJobs();

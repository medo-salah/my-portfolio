import { z } from "zod";

export const profileData = {
  name: "Mohamed Sameh",
  roles: ["Data Scientist", "Data Analyst", "Aspiring Data Engineer"],
  location: "Egypt",
  contact: {
    email: "smedo4407@gmail.com",
    github: "https://github.com/medo-salah",
    linkedin: "https://www.linkedin.com/in/mohamed-sameh-4614a925b/",
  },
  summary:
    "Data Scientist with a strong foundation in data analysis, machine learning, and database systems. Experienced in transforming raw data into actionable insights and building data-driven solutions to solve real-world problems. Skilled in Python, SQL, and data visualization, with hands-on experience developing machine learning models, ETL workflows, and analytical dashboards. Strong analytical thinking, attention to detail, fast learner. Fluent in English and French — effective across diverse teams and international environments.",
  objective:
    "Seeking an opportunity in Data Science, Data Engineering, or Analytics to apply technical expertise in solving real-world problems, contribute to data-driven decision-making, and grow within a dynamic and innovative environment.",
  languages: [
    { name: "Arabic", proficiency: "Native" },
    { name: "English", proficiency: "Professional Proficiency" },
    { name: "French", proficiency: "Fluent" },
  ],
};

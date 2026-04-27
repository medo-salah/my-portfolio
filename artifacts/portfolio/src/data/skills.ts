export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    category: "Programming & Data Tools",
    skills: ["Python (Pandas, NumPy, Scikit-learn)", "SQL (MySQL, SQL Server)", "Power BI", "Microsoft Excel (Advanced)", "Git & GitHub"],
  },
  {
    category: "Data Science & ML",
    skills: ["Supervised Learning", "Regression & Classification", "Model Evaluation & Tuning", "Feature Engineering", "Data Cleaning & Preprocessing"],
  },
  {
    category: "Data Engineering",
    skills: ["ETL Pipeline Development", "Data Transformation", "Data Processing", "Database Design & Optimization"],
  },
  {
    category: "Core Competencies",
    skills: ["Analytical Thinking", "Problem Solving", "Data-Driven Decision Making", "Communication", "Attention to Detail"],
  },
];

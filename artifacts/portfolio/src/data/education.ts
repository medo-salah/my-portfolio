export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  details: string;
};

export const educationData: EducationEntry[] = [
  {
    id: "bachelors",
    degree: "Bachelor's Degree",
    institution: "Computer Science or Related Discipline",
    details: "In Progress / Completed",
  },
  {
    id: "training-program",
    degree: "Data Science Training Program",
    institution: "Petrochemical Industry (Egypt)",
    details: "Hands-on with real-world industrial datasets; ML and data analysis in practical scenarios; business-driven data solutions.",
  },
  {
    id: "ml-coursework",
    degree: "Machine Learning Coursework",
    institution: "Advanced Study",
    details: "Linear Regression, Logistic Regression, Gradient Descent Optimization, Supervised Learning Techniques.",
  },
];

export const experienceHighlights = [
  "Developed end-to-end data solutions from ingestion to visualization",
  "Built and optimized Machine Learning models",
  "Designed structured queries and managed relational databases",
  "Created interactive dashboards for business insights",
];

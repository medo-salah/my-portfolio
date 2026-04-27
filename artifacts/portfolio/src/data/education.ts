export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  details: string;
  period?: string;
};

export const educationData: EducationEntry[] = [
  {
    id: "bsc-cs-ds",
    degree: "B.S. Computer Science — Data Science",
    institution: "Faculty of Computer & Data Science, Alexandria University",
    details: "GPA: 3.38 / 4.0. Coursework: OOP, Linear Algebra, Calculus, Data Structures, Algorithms, Databases, AI, Cloud Computing, Machine Learning, Web Programming, Operating Systems, Data Mining.",
    period: "Sep 2022 – Jun 2026 (Expected)",
  },
  {
    id: "field-training-iot",
    degree: "Field Training — IoT",
    institution: "Alexandria, Egypt",
    details: "Designed and implemented a Smart Garage System using ESP32 and Arduino. Built a Flutter mobile app for real-time monitoring and activity logs. Integrated MQTT and Firebase for cloud communication and data storage.",
    period: "Jul 2024 – Sep 2024",
  },
  {
    id: "datacamp-understanding-ds",
    degree: "Understanding Data Science",
    institution: "DataCamp Certification",
    details: "Mastered the data lifecycle from collection to visualization. Applied ML concepts and statistical analysis with Python.",
    period: "Mar 2025",
  },
  {
    id: "coursera-supervised-ml",
    degree: "Supervised Machine Learning: Regression and Classification",
    institution: "DeepLearning.AI — Coursera",
    details: "Core regression and classification algorithms and their real-world applications.",
    period: "Nov 2024",
  },
  {
    id: "datacamp-eda",
    degree: "Exploratory Data Analysis in Python",
    institution: "DataCamp Certification",
    details: "Practical skills in data cleaning, visualization, and interpretation using Python.",
    period: "Jul 2024",
  },
  {
    id: "orange-software-eng",
    degree: "Software Engineering — Level 1",
    institution: "Orange Digital Center",
    details: "Foundational training in software engineering concepts and practices.",
    period: "Aug 2024",
  },
];

export const experienceHighlights = [
  "Developed end-to-end data solutions from ingestion to visualization",
  "Built and optimized Machine Learning models for real-world prediction tasks",
  "Designed structured queries and managed relational databases",
  "Created interactive dashboards for business insights",
  "Built backend services with Node.js, Express, and MongoDB",
  "Trained Transformer and LSTM models with PyTorch on financial time-series data",
];

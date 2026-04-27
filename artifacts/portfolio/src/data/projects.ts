export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  iconType: "ml" | "chart" | "ocr" | "desktop" | "optimization";
};

export const projectsData: Project[] = [
  {
    id: "titanic",
    title: "Titanic Survival Prediction",
    description: "End-to-End ML Project. Cleaned and preprocessed raw dataset; performed EDA to identify key survival factors; built and evaluated classification models; improved performance through feature selection and tuning.",
    techStack: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    iconType: "ml",
  },
  {
    id: "crypto",
    title: "Cryptocurrency Data Analysis & Insights",
    description: "Analyzed historical crypto data to identify trends and volatility; evaluated risk vs return; developed visual reports to guide investment decisions.",
    techStack: ["Python", "Pandas", "Data Visualization"],
    iconType: "chart",
  },
  {
    id: "passport-ocr",
    title: "Passport OCR System",
    description: "OCR-based system to extract structured data from passport images; parses MRZ and non-MRZ fields (name, nationality, address) through an interactive web interface.",
    techStack: ["Python", "OCR", "Streamlit"],
    iconType: "ocr",
  },
  {
    id: "company-classifier",
    title: "Company Classification Tool",
    description: "Desktop GUI application to classify company names based on dataset lookup and file-based search methodologies.",
    techStack: ["Python", "Tkinter"],
    iconType: "desktop",
  },
  {
    id: "ml-optimization",
    title: "Machine Learning Model Optimization",
    description: "Applied regularization techniques to reduce overfitting; performed hyperparameter tuning and comprehensive model evaluation.",
    techStack: ["Python", "Scikit-learn"],
    iconType: "optimization",
  },
];

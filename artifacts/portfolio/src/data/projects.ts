export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  iconType: "trading" | "segmentation" | "ocr" | "auth";
  githubUrl: string;
};

export const projectsData: Project[] = [
  {
    id: "ai-candlestick-trader",
    title: "AI Candlestick Trader",
    description:
      "Deep-learning candlestick pattern recognition and price prediction for EGX (Egypt) and Tadawul (Saudi Arabia) stocks. Detects 18 candlestick patterns with 22 engineered technical features, trains a Pre-LN Transformer with CLS token alongside a Bidirectional LSTM with attention, and ensembles K=5 models with inverse-variance weighting. Includes Optuna hyperparameter search, walk-forward backtesting, and a Streamlit trading-terminal dashboard with Plotly charts.",
    techStack: ["Python", "PyTorch", "Transformer", "LSTM", "Optuna", "Streamlit", "Plotly"],
    iconType: "trading",
    githubUrl: "https://github.com/medo-salah/ai-candlestick-trader",
  },
  {
    id: "loveda-segmentation",
    title: "LoveDA Semi-Supervised Segmentation",
    description:
      "Semi-supervised semantic segmentation pipeline for the LoveDA remote-sensing dataset using simulated point-level supervision. Trains a U-Net (segmentation_models_pytorch) with a custom Partial Cross-Entropy loss that only penalizes predictions at sparsely labeled pixel locations (~1% of pixels), with mixed-precision training on a single 4GB GPU.",
    techStack: ["Python", "PyTorch", "U-Net", "Remote Sensing", "Mixed Precision"],
    iconType: "segmentation",
    githubUrl: "https://github.com/medo-salah/LoveDA-SemiSupervised-Segmentation",
  },
  {
    id: "passport-ocr",
    title: "Passport OCR System",
    description:
      "OCR-based system that extracts structured data from passport images. Parses both MRZ and non-MRZ fields (name, nationality, address, etc.) and exposes a FastAPI backend plus a Streamlit interface for user-friendly input and output. Includes a CI/CD workflow and unit tests.",
    techStack: ["Python", "FastAPI", "Streamlit", "OCR", "CI/CD"],
    iconType: "ocr",
    githubUrl: "https://github.com/medo-salah/passport_ocr",
  },
  {
    id: "hexaverse-auth-backend",
    title: "Hexaverse Auth Backend",
    description:
      "Full-featured authentication backend with email/password login and signup, Google Sign-In across Android, iOS, and Web, forgot-password flows with real email delivery, JWT tokens, and rate limiting for abuse protection. Built on Node.js with MongoDB and Mongoose. Created as the auth backbone for a graduation project.",
    techStack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Google OAuth"],
    iconType: "auth",
    githubUrl: "https://github.com/medo-salah/hexaverse-auth-backend",
  },
];

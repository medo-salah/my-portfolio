// Add more photos by importing them from @assets and adding them to the array below
import portraitUrl from "@assets/Screenshot_2026-04-27_055333_1777258429201.png";

export type Photo = {
  id: string;
  url: string;
  alt: string;
};

export const photosData: Photo[] = [
  {
    id: "portrait-main",
    url: portraitUrl,
    alt: "Mohamed Sameh Portrait",
  }
];

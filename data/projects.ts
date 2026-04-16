import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    name: "notes app",
    href: "https://project-notes-app-ten.vercel.app/",
    imageSrc: "/project/notes-app.png",
    imageAlt: "Notes app preview",
    descr:
      "Is a web application for creating, organizing, and searching personal notes with user authentication and profile support. It was built with Next.js and React using TypeScript, TanStack Query for data fetching, Zustand for state management, and integrates with an external backend API for authentication and note storage.",
  },
  {
    name: "food delivery app",
    href: "https://delivery-app-international-food-delivery-production.up.railway.app/",
    imageSrc: "/project/international-food-delivery.png",
    imageAlt: "Food delivery app preview",
    descr:
      "This is an  food delivery web app where users can browse shops, view products, add items to a cart, and place orders. Delivery app task built with Next.js, TypeScript, HTML/CSS, SQLite, and iziToast. ",
  },
];

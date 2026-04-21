import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    name: "AromaCraft",
    href: "https://coffee-brand-website-kappa.vercel.app/",
    imageSrc: "/project/aroma-craft.png",
    imageAlt: "AromaCraft preview",
    descr:
      "AromaCraft is a responsive coffee brand landing page with a clean design, interactive UI, and mobile-friendly layout, built using HTML, CSS, and vanilla JavaScript.",
  },
  {
    name: "notes app",
    href: "https://project-notes-app-ten.vercel.app/",
    imageSrc: "/project/notes-app.png",
    imageAlt: "Notes app preview",
    descr:
      "Is a web application for creating, organizing, and searching personal notes with user authentication and profile support. It was built with Next.js and React using TypeScript,TanStack Query for data fetching, Zustand for state management, and integrates with an external backend API for authentication and note storage.",
  },
  {
    name: "food delivery app",
    href: "https://delivery-app-international-food-delivery-production.up.railway.app/",
    imageSrc: "/project/international-food-delivery.png",
    imageAlt: "Food delivery app preview",
    descr:
      "This is an food delivery web app where users can browse shops, view products, add items to a cart, and place orders. Delivery app task built with Next.js, TypeScript, HTML/CSS, SQLite, and iziToast. ",
  },
];

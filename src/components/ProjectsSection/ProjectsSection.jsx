import React from "react";
import styles from "./ProjectsSection.module.css"
import { Bodoni_Moda} from "next/font/google";
export const bodoni = Bodoni_Moda({
  weight: ["400", "700", "900",],
  subsets: ["latin"],
  style: ["italic", "normal"]
});
const projects = [
  {
    title: "title1",
    subtitle: "subtitle1 asda",
    description: "description 1 viendo esto xd asd lorem.",
  },
  {
    title: "title2",
    subtitle: "subtitle2 asda",
    description: "description 2 o esto xd asd lorem.",
  },
  {
    title: "title 3",
    subtitle: "subtitle 3 asda",
    description: "description  3 o esto x asd cd asd lorem.",
  },
  {
    title: "title1",
    subtitle: "subtitle1 asda",
    description: "description 1 viendo esto xd asd lorem.",
  },
  {
    title: "title2",
    subtitle: "subtitle2 asda",
    description: "description 2 o esto xd asd lorem.",
  },
  {
    title: "title 3",
    subtitle: "subtitle 3 asda",
    description: "description  3 o esto x asd cd asd lorem.",
  },
];
export default function ProjectsSection() {
  return <div className={styles.container}>
    {projects.map((project)=>(
        <div className={styles.card}>
            <h2 className={`${styles.title} ${bodoni.className}`}>{project.title}</h2>
            <h4 className={styles.subtitle}>{project.subtitle}</h4>
            <p className={styles.description}>{project.description}</p>
        </div>
    ))}
  </div>;
}

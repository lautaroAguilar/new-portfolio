import React from "react";
import styles from "./ProjectsSection.module.css";
import { projects } from "../Projects";
import { Bodoni_Moda } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaFigma } from "react-icons/fa";
import { FaInfo } from "react-icons/fa6";
import { Tooltip } from "@mui/material";
import { useAppContext } from "@/context/appContext";
export const bodoni = Bodoni_Moda({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export default function ProjectsSection() {
  const { openModal } = useAppContext();
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <div key={project.id} className={styles.card}>
          <h2 className={`${styles.title} ${bodoni.className}`}>
            {project.title}
          </h2>
          <h4 className={styles.subtitle}>{project.subtitle}</h4>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{project.description}</p>
            <p className={styles.description}>{project.secondDescription}</p>
          </div>
          <div className={styles.containerButton}>
            {project.seeMore ? (
              <Link
                className={styles.button}
                href={project.seeMore}
                target="_blank"
              >
                Ver más
              </Link>
            ) : (
              <div></div>
            )}
            {project.icon === "Github" ? (
              <Link href={project.iconLink} target="_blank">
                <FaGithub className={styles.shining} />
              </Link>
            ) : project.icon === "Figma" ? (
              <Link href={project.iconLink} target="_blank">
                <FaFigma className={styles.shining} />
              </Link>
            ) : project.icon === "Tooltip" ? (
              <Tooltip title={project.tooltip}>
                <div>
                  <FaInfo />
                </div>
              </Tooltip>
            ) : (
              <div></div>
            )}
            <button onClick={() => openModal(project.images)}>Ver Fotos</button>
          </div>
        </div>
      ))}
    </div>
  );
}

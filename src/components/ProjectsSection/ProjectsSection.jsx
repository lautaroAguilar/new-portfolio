import React from "react";
import styles from "./ProjectsSection.module.css";
import { projects } from "../Projects";
import Link from "next/link";
import { FaGithub, FaFigma } from "react-icons/fa";
import { FaInfo } from "react-icons/fa6";
import { Tooltip } from "@mui/material";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";


export default function ProjectsSection() {
  const { openModal } = useAppContext();
  return (
    <div className={styles.projectsSection__container}>
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className={styles.card}
          whileHover={{
            translateX: -5,
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            transition: { duration: 0.5 },
          }}
        >
          <h2 className={`${styles.title} `}>
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
                Ver Más
              </Link>
            ) : (
              <button
                className={styles.button}
                onClick={() => openModal(project.images)}
              >
                Ver Fotos
              </button>
            )}
            {project.icon === "Github" ? (
              <Link href={project.iconLink} target="_blank">
                <FaGithub />
              </Link>
            ) : project.icon === "Figma" ? (
              <Link href={project.iconLink} target="_blank">
                <FaFigma />
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
          </div>
        </motion.div>
      ))}
    </div>
  );
}

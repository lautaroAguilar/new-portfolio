import React from "react";
import styles from "./ProjectsSection.module.css";
import { Bodoni_Moda } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaFigma, } from "react-icons/fa";
import { FaInfo } from "react-icons/fa6";
import { Tooltip } from "@mui/material";
export const bodoni = Bodoni_Moda({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});
const projects = [
  {
    title: "Wapu",
    subtitle: "Desarrollo - Mar.23 ~ Presente",
    description:
      "Wapu es un proyecto en el que, con grandes desarrolladores y personas de otras áreas, trabajamos en conjunto, para crear una billetera virtual que puedan usar los extranjeros en Argentina.",
    secondDescription:
      "Personalmente me tocó contribuir en todo lo relacionado al frontend.",
    id: 1,
    icon: "",
    iconLink: "",
    seeMore: "https://my.wapu.app/",
  },
  {
    title: "Cyber Cloud Networks",
    subtitle: "Desarrollo - 3 meses",
    description:
      "Para Cyber Cloud, pude colaborar con temas de diseño. Creé componentes estilizados para diferentes pantallas a lo largo del flujo de la plataforma.",
    secondDescription: "Para estilizar los componentes utilicé styled-components. También implementé librerías de componentes como Material UI.",
      id: 2,
    icon: "Tooltip",
    iconLink: "",
    seeMore: "",
    tooltip: "Al ser un proyecto privado no tengo imagenes para poder mostrar."
  },
  {
    title: "Tandu - Eduzontal",
    subtitle: "Diseño - 3 meses",
    description:
      "En la etapa de descubrimiento, me tocó crear los wireframes en Figma para que el cliente pueda ver reflejadas sus ideas y entender como sería el flujo del usuario en la plataforma.",
    secondDescription:
      "A su vez contribuí con el prototipado en Figma y era responsable de comentar en las reuniones como sería el flujo del usuario.",
    id: 3,
    icon: "Figma",
    iconLink:
      "https://www.figma.com/file/xmD8h1fYktW06IktIVnRnV/Eduzontal?type=design&node-id=0%3A1&mode=design&t=Rj1ZINzjtD3NVEWO-1",
    seeMore:
      "https://www.figma.com/proto/xmD8h1fYktW06IktIVnRnV/Eduzontal?type=design&node-id=280-1516&t=IcSLu4bYSou0SSfK-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=280%3A1516&show-proto-sidebar=1&mode=design",
  },
  {
    title: "Página de Vendedor",
    subtitle: "Desarrollo - 1 mes",
    description:
      "En esta página, la principal premisa era que los clientes dejen reseñas por la atención del vendedor, a su vez que veían las de otros clientes. Para ello debían autenticarse y podrían dejar la suya.",
    secondDescription:
      "Fue creada en Next.js, usé CSS para los estilos y Firebase para la base de datos.",
    id: 4,
    icon: "Github",
    iconLink: "https://github.com/lautaroAguilar/LeandroAguilar",
    seeMore: "https://leandro-aguilar.vercel.app/",
  },
  {
    title: "Mi primer sitio web",
    subtitle: "Desarrollo - 1 mes",
    description:
      "El objetivo de este proyecto personal fue implementar las tecnologías de las que tenía conocimiento hasta ese momento y  de esa manera mostrar mis habilidades.",
    secondDescription:
      "El sitio fue creado en React y usa CSS para los estilos.",
    id: 5,
    icon: "Github",
    iconLink: "https://github.com/lautaroAguilar/portfolio",
    seeMore: "https://portfolio-lautaroaguilar.vercel.app/",
  },
  {
    title: "Landing CyberCloud",
    subtitle: "Wordpress - 1 mes",
    description:
      "Esta fue mi primer experiencia con Wordpress, es una landing page sencilla con algunas páginas de producto.",
    secondDescription: "El sitio fue creado a partir de un diseño en Figma.",
    id: 6,
    icon: "",
    iconLink: "",
    seeMore: "https://cybercloudnetworks.com/",
  },
  {
    title: "Landing Wapu",
    subtitle: "Desarrollo - 1 mes",
    description:
      "Otra experiencia que tuve con wordpress fue creando la landing page de Wapu.",
    secondDescription:
      "También fue creada a partir de un diseño, esta vez propio, en Figma",
    id: 7,
    icon: "",
    iconLink: "",
    seeMore: "https://wapupay.com/",
  },
  {
    title: "Primer sitio - Figma",
    subtitle: "Diseño - 1 semana",
    description: "Este es el prototipado de mi primer sitio web en Figma.",
    secondDescription: "",
    id: 8,
    icon: "Figma",
    iconLink:
      "https://www.figma.com/file/sStxx69csnpaoXyfnkg88h/Portfolio-LA?type=design&node-id=0%3A1&mode=design&t=Rj1ZINzjtD3NVEWO-1",
    seeMore:
      "https://www.figma.com/proto/sStxx69csnpaoXyfnkg88h/Portfolio-LA?type=design&node-id=0-1&t=Rj1ZINzjtD3NVEWO-0&scaling=min-zoom&starting-point-node-id=201%3A170",
  },
  {
    title: "Landing Wapu - Figma",
    subtitle: "Diseño - 1 semana",
    description: "Este es el prototipado del sitio web de Wapu en Figma.",
    secondDescription: "",
    id: 9,
    icon: "Figma",
    iconLink: "https://www.figma.com/file/O0Oov2cOaADOLg4DtdDylJ/Wapu?type=design&node-id=0%3A1&mode=design&t=ZiT14hVlSnA5bNMS-1",
    seeMore: "https://www.figma.com/proto/O0Oov2cOaADOLg4DtdDylJ/Wapu?type=design&node-id=18-589&t=ouEh95iFX7xmklII-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=18%3A589&mode=design",
  },
  {
    title: "Mi primer diseño - Figma",
    subtitle: "Diseño - 3 meses",
    description: `Durante el "design season", un programa intensivo de diseño, creé este proyecto sobre una app mobile.`,
    secondDescription: "Fue mi primera experiencia con Figma y el diseño UI.",
    id: 10,
    icon: "Figma",
    iconLink:
      "https://www.figma.com/file/6oWAeoYEST9Hq23ZwQrmj4/Reto-03?type=design&node-id=0%3A1&mode=dev&t=Rj1ZINzjtD3NVEWO-1",
    seeMore:
      "https://www.figma.com/proto/6oWAeoYEST9Hq23ZwQrmj4/Reto-03?type=design&node-id=1-2&t=YXyQK0SxqiUJn8wZ-1&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
  },
];
export default function ProjectsSection() {
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
              <Link className={styles.button} href={project.seeMore} target="_blank">
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
              <Tooltip title={project.tooltip} >
                <div>
                  <FaInfo />
                </div>
              </Tooltip>
            ) : ( <div></div> )
            }
          </div>
        </div>
      ))}
    </div>
  );
}

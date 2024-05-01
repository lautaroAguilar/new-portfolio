"use client";
import { useAppContext } from "@/context/appContext";
import styles from "./Section.module.css";
import { useState, useEffect } from "react";
export default function Section() {
  const { sectionState, isExiting } = useAppContext();
  const [animationClass, setAnimationClass] = useState("");
  const [currentSection, setCurrentSection] = useState(null);
  
  /* falta ajustar para que en la primer carga no me haga la animacion */
  useEffect(() => {
    if (isExiting) {
        setAnimationClass(styles.fade_out_left);
        setTimeout(() => {
            setCurrentSection(null); // Limpia la sección durante la animación de salida
        }, 500);
    } else if (sectionState) {
        const timer = setTimeout(() => {
            setCurrentSection(sectionState);
            setAnimationClass(styles.fade_in_right);
        }, 100); // Un pequeño retraso antes de aplicar la animación de entrada
        return () => clearTimeout(timer);
    }
  }, [sectionState, isExiting]);
  return ( 
    <>
      {currentSection === "Inicio" && (
        <div className={`${styles.container} ${animationClass}`}>
          <p className={` ${styles.description}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            minima corrupti numquam consequuntur saepe impedit doloremque,
            voluptas, eos ad inventore nostrum veritatis nulla enim. Mollitia
            labore obcaecati ea ex rem. Consectetur quisquam dicta impedit
            laborum! Voluptates repellendus soluta dignissimos atque
            perspiciatis delectus impedit illo consectetur obcaecati rem quo
            iste voluptate nesciunt excepturi magnam, quas quae explicabo
            eveniet. Nesciunt, repudiandae blanditiis?
          </p>
        </div>
      )}
      {currentSection === "Proyectos" && (
        <div className={`${styles.container} ${animationClass}`}>
          <p className={` ${styles.description}`}>
            Aorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
            voluptas, eos ad inventore nostrum veritatis nulla enim. Mollitia
            labore obcaecati ea ex rem. Consectetur quisquam dictaA XD
          </p>
        </div>
      )}
      {currentSection === "Contacto" && (
        <div className={`${styles.container} ${animationClass}`}>
          <p className={` ${styles.description}`}>
            Aorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            minima corrupti numquam consequuntur saepe impedit doloremque,
            voluptas, eos ad inventore nostrum veritatis nulla enim. Mollitia
            labore obcaecati ea ex rem. Consectetur asd asdas asd as das das da
            a q 2easd a sdas dquisquam dictaA XD
          </p>
        </div>
      )}
    </>
  );
}

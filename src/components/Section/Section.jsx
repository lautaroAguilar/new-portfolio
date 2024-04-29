"use client";
import { useAppContext } from "@/context/appContext";
import styles from "./Section.module.css";
import { playfair } from "../Header/Header";
export default function Section() {
  const { sectionState } = useAppContext();

  return (
    <>
      {sectionState === "Inicio" && (
        <div className={styles.container}>
          <p className={` ${styles.description}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum minima corrupti numquam consequuntur saepe impedit doloremque, voluptas, eos ad inventore nostrum veritatis nulla enim. Mollitia labore obcaecati ea ex rem.
            Consectetur quisquam dicta impedit laborum! Voluptates repellendus soluta dignissimos atque perspiciatis delectus impedit illo consectetur obcaecati rem quo iste voluptate nesciunt excepturi magnam, quas quae explicabo eveniet. Nesciunt, repudiandae blanditiis?
          </p>
        </div>
      )}
      {sectionState === "Proyectos" && (
        <div className={styles.container}>
          <p className={` ${styles.description}`}>
            Aorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum minima corrupti numquam consequuntur saepe impedit doloremque, voluptas, eos ad inventore nostrum veritatis nulla enim. Mollitia labore obcaecati ea ex rem.
            Consectetur quisquam dictaA XD
          </p>
        </div>
      )}
      {sectionState === "Contacto" && (
        <div className={styles.container}>
          <p className={` ${styles.description}`}>
            Aorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum minima corrupti numquam consequuntur saepe impedit doloremque, voluptas, eos ad inventore nostrum veritatis nulla enim. Mollitia labore obcaecati ea ex rem.
            Consectetur  asd  asdas asd as das das da a q 2easd a sdas dquisquam dictaA XD
          </p>
        </div>
      )}
    </>
  );
}

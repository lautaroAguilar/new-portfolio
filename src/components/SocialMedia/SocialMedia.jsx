"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import styles from "./SocialMedia.module.css";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
export default function SocialMedia() {
  return (
    <motion.div
      className={styles.social_media}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <Tooltip title={"Github"}>
        <Link href={"https://github.com/lautaroAguilar"} target="_blank">
          <FaGithub className={styles.shining} />
        </Link>
      </Tooltip>
      <Tooltip title={"Linkedin"}>
        <Link
          href={"https://www.linkedin.com/in/lautaro-aguilar-83a3a923b/"}
          target="_blank"
        >
          <FaLinkedin className={styles.shining} />
        </Link>
      </Tooltip>
      <Tooltip title={"CV"}>
        <Link
          href={
            "https://docs.google.com/document/d/1VgT0vvmINF3Cbo-0Lf1Vdkv5qhjIiz3riRaFIAI3PiQ/edit?usp=sharing"
          }
          target="_blank"
        >
          <FaFilePdf className={styles.shining} />
        </Link>
      </Tooltip>
    </motion.div>
  );
}

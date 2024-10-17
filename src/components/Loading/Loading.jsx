"use client";
import React from "react";
import styles from "./Loading.module.css";
import { motion } from "framer-motion";

const Loading = () => {
  const svgVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };
  const pathFillVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        /* repeatDelay: 1, */
        repeat: Infinity,
      },
    },
  };
  return (
    <div className={styles.illustration_container}>
      <motion.svg
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        className={styles.illustration}
        width="409"
        height="354"
        viewBox="0 0 409 354"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="bear" filter="url(#filter0_d_446_4141)">
          <motion.path d="M401.978 25.1914C405.978 27.1924 403.478 59.6924 393.478 64.6924C359.02 79.4602 354.386 93.3677 347.216 114.884C344.919 121.779 342.361 129.455 338.478 138.191C329.885 151.049 315.924 168.071 305.832 180.377C297.458 190.589 291.747 197.552 293.978 196.191C304.633 189.693 310.849 184.581 322.478 172.191C316.402 201.222 306.738 220.453 299.06 235.731C295.366 243.082 292.131 249.519 289.978 255.691C289.561 256.887 288.743 258.755 287.696 261.149C282.172 273.775 270.253 301.016 276.978 321.191C277.24 321.977 278.565 322.42 280.478 323.059C285.868 324.859 295.919 328.216 299.978 345.191H230.478C184.978 285.191 189.978 211.191 189.978 211.191C185.933 210.47 178.238 233.783 186.978 259.191C188.87 264.691 162.516 269.603 130.478 267.691L125.978 314.191C125.978 320.691 125.978 326.691 131.978 327.691L149.978 331.691C155.478 333.191 162.478 340.191 162.478 345.191H91.978C81.6698 330.799 77.0699 321.884 71.978 303.691C120.478 260.691 127.978 207.691 110.978 179.691C112.592 236.496 87.1215 268.925 68.8605 292.175C58.8321 304.943 50.978 314.943 50.978 324.691C68.2372 326.765 75.478 339.191 75.478 345.191H18.978C-0.0215321 327.691 2.97826 307.191 12.478 294.191H8.97796L19.478 274.691H13.978C17.8074 271.451 19.9014 265.955 21.9979 260.452C23.4601 256.614 24.9236 252.773 26.978 249.691H21.978C24.9783 245.691 27.1067 237.164 25.978 232.191C3.05194 131.191 96.9783 78.1913 184.978 93.1913L213.978 80.1913C198.161 101.798 191.134 115.032 195.978 149.191C204.687 102.906 217.478 81.1914 248.478 57.6914C248.451 65.8644 248.696 70.0187 250.478 75.1913C252.495 59.8848 254.203 51.3407 266.478 36.6914C259.478 67.6914 270.978 87.1913 293.978 96.1913C271.978 76.6913 263.478 50.1914 278.978 32.1914C267.478 22.6914 268.479 10.1921 274.978 4.1921C280.978 -1.34688 293.978 -1.30742 303.478 17.6925L304.978 14.6914C306.478 11.1923 345.478 11.6923 349.978 14.6914C351.06 15.4127 352.164 16.1676 353.291 16.9388C356.33 19.0181 359.542 21.2156 362.978 23.1914C367.689 25.8999 376.691 27.6334 389.478 28.6914C395.312 27.8705 397.937 26.9404 401.978 25.1914ZM272.05 247.872C276.431 228.726 280.539 210.776 277.478 195.692C258.978 238.692 244.478 311.192 261.478 328.692C263.404 330.675 266.704 332.335 270.359 334.172C275.243 336.628 280.76 339.403 284.478 343.692C286.186 335.839 278.631 331.25 273.306 328.015C270.832 326.513 268.84 325.302 268.478 324.192C260.318 299.148 266.411 272.519 272.05 247.872Z" />
          <motion.path
            variants={pathFillVariants}
            initial="hidden"
            animate="visible"
            d="M401.978 25.1914C405.978 27.1924 403.478 59.6924 393.478 64.6924C359.02 79.4602 354.386 93.3677 347.216 114.884C344.919 121.779 342.361 129.455 338.478 138.191C329.885 151.049 315.924 168.071 305.832 180.377C297.458 190.589 291.747 197.552 293.978 196.191C304.633 189.693 310.849 184.581 322.478 172.191C316.402 201.222 306.738 220.453 299.06 235.731C295.366 243.082 292.131 249.519 289.978 255.691C289.561 256.887 288.743 258.755 287.696 261.149C282.172 273.775 270.253 301.016 276.978 321.191C277.24 321.977 278.565 322.42 280.478 323.059C285.868 324.859 295.919 328.216 299.978 345.191H230.478C184.978 285.191 189.978 211.191 189.978 211.191C185.933 210.47 178.238 233.783 186.978 259.191C188.87 264.691 162.516 269.603 130.478 267.691L125.978 314.191C125.978 320.691 125.978 326.691 131.978 327.691L149.978 331.691C155.478 333.191 162.478 340.191 162.478 345.191H91.978C81.6698 330.799 77.0699 321.884 71.978 303.691C120.478 260.691 127.978 207.691 110.978 179.691C112.592 236.496 87.1215 268.925 68.8605 292.175C58.8321 304.943 50.978 314.943 50.978 324.691C68.2372 326.765 75.478 339.191 75.478 345.191H18.978C-0.0215321 327.691 2.97826 307.191 12.478 294.191H8.97796L19.478 274.691H13.978C17.8074 271.451 19.9014 265.955 21.9979 260.452C23.4601 256.614 24.9236 252.773 26.978 249.691H21.978C24.9783 245.691 27.1067 237.164 25.978 232.191C3.05194 131.191 96.9783 78.1913 184.978 93.1913L213.978 80.1913C198.161 101.798 191.134 115.032 195.978 149.191C204.687 102.906 217.478 81.1914 248.478 57.6914C248.451 65.8644 248.696 70.0187 250.478 75.1913C252.495 59.8848 254.203 51.3407 266.478 36.6914C259.478 67.6914 270.978 87.1913 293.978 96.1913C271.978 76.6913 263.478 50.1914 278.978 32.1914C267.478 22.6914 268.479 10.1921 274.978 4.1921C280.978 -1.34688 293.978 -1.30742 303.478 17.6925L304.978 14.6914C306.478 11.1923 345.478 11.6923 349.978 14.6914C351.06 15.4127 352.164 16.1676 353.291 16.9388C356.33 19.0181 359.542 21.2156 362.978 23.1914C367.689 25.8999 376.691 27.6334 389.478 28.6914C395.312 27.8705 397.937 26.9404 401.978 25.1914ZM272.05 247.872C276.431 228.726 280.539 210.776 277.478 195.692C258.978 238.692 244.478 311.192 261.478 328.692C263.404 330.675 266.704 332.335 270.359 334.172C275.243 336.628 280.76 339.403 284.478 343.692C286.186 335.839 278.631 331.25 273.306 328.015C270.832 326.513 268.84 325.302 268.478 324.192C260.318 299.148 266.411 272.519 272.05 247.872Z"
            fill="white"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M401.978 25.1914C405.978 27.1924 403.478 59.6924 393.478 64.6924C359.02 79.4602 354.386 93.3677 347.216 114.884C344.919 121.779 342.361 129.455 338.478 138.191C329.885 151.049 315.924 168.071 305.832 180.377C297.458 190.589 291.747 197.552 293.978 196.191C304.633 189.693 310.849 184.581 322.478 172.191C316.402 201.222 306.738 220.453 299.06 235.731C295.366 243.082 292.131 249.519 289.978 255.691C289.561 256.887 288.743 258.755 287.696 261.149C282.172 273.775 270.253 301.016 276.978 321.191C277.24 321.977 278.565 322.42 280.478 323.059C285.868 324.859 295.919 328.216 299.978 345.191H230.478C184.978 285.191 189.978 211.191 189.978 211.191C185.933 210.47 178.238 233.783 186.978 259.191C188.87 264.691 162.516 269.603 130.478 267.691L125.978 314.191C125.978 320.691 125.978 326.691 131.978 327.691L149.978 331.691C155.478 333.191 162.478 340.191 162.478 345.191H91.978C81.6698 330.799 77.0699 321.884 71.978 303.691C120.478 260.691 127.978 207.691 110.978 179.691C112.592 236.496 87.1215 268.925 68.8605 292.175C58.8321 304.943 50.978 314.943 50.978 324.691C68.2372 326.765 75.478 339.191 75.478 345.191H18.978C-0.0215321 327.691 2.97826 307.191 12.478 294.191H8.97796L19.478 274.691H13.978C17.8074 271.451 19.9014 265.955 21.9979 260.452C23.4601 256.614 24.9236 252.773 26.978 249.691H21.978C24.9783 245.691 27.1067 237.164 25.978 232.191C3.05194 131.191 96.9783 78.1913 184.978 93.1913L213.978 80.1913C198.161 101.798 191.134 115.032 195.978 149.191C204.687 102.906 217.478 81.1914 248.478 57.6914C248.451 65.8644 248.696 70.0187 250.478 75.1913C252.495 59.8848 254.203 51.3407 266.478 36.6914C259.478 67.6914 270.978 87.1913 293.978 96.1913C271.978 76.6913 263.478 50.1914 278.978 32.1914C267.478 22.6914 268.479 10.1921 274.978 4.1921C280.978 -1.34688 293.978 -1.30742 303.478 17.6925L304.978 14.6914C306.478 11.1923 345.478 11.6923 349.978 14.6914C351.06 15.4127 352.164 16.1676 353.291 16.9388C356.33 19.0181 359.542 21.2156 362.978 23.1914C367.689 25.8999 376.691 27.6334 389.478 28.6914C395.312 27.8705 397.937 26.9404 401.978 25.1914ZM272.05 247.872C276.431 228.726 280.539 210.776 277.478 195.692C258.978 238.692 244.478 311.192 261.478 328.692C263.404 330.675 266.704 332.335 270.359 334.172C275.243 336.628 280.76 339.403 284.478 343.692C286.186 335.839 278.631 331.25 273.306 328.015C270.832 326.513 268.84 325.302 268.478 324.192C260.318 299.148 266.411 272.519 272.05 247.872Z"
            stroke="white"
            strokeWidth={3}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_446_4141"
            x="0.5"
            y="0.5"
            width="407.796"
            height="353.191"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_446_4141"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_446_4141"
              result="shape"
            />
          </filter>
        </defs>
      </motion.svg>
    </div>
  );
};

export default Loading;

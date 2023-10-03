import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { ButtonProps } from "./type";

const Button = ({ type, text, className, url, onClick }: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        className={`${styles.button} ${className}`}
        onClick={onClick}
      >
        {url ? <Link href={url}>{text}</Link> : <span>{text}</span>}
      </button>
    </>
  );
};

export default Button;

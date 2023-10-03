import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { postProps } from "@/app/page";

const Card = ({ post }: { post: postProps }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <Image src={post.image} fill={true} alt="photo" />
      </div>
      <div className={styles.content}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p>{post.price}</p>
      </div>
    </div>
  );
};

export default Card;

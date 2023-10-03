import Card from "@/components/utils/Card";
import React from "react";
import styles from "./page.module.css";
import { fetchJsonData } from "@/utils";
import Button from "@/components/utils/Button";

export interface postProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Home = async () => {
  const posts: postProps[] = await fetchJsonData();

  return (
    <>
      <div className={styles.cardContainer}>
        {posts.map((post: any, index: number) => (
          <Card key={index} post={post} />
        ))}
      </div>
      <div className={styles.btnContainer}>
        <Button
          text={"A Plus"}
          url="/result?success=true"
          type={"button"}
          className={styles.APlusBtn}
        />
        <Button text={"K Pay"} type={"button"} className={styles.KPayBtn} />
        <Button text={"AYA"} type={"button"} className={styles.AYABtn} />
      </div>
    </>
  );
};

export default Home;

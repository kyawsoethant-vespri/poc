"use client";
import Card from "@/components/utils/Card";
import React, { useContext, useEffect, useState } from "react";
import styles from "./page.module.css";
import { fetchJsonData } from "@/utils";
import Button from "@/components/utils/Button";
import { SearchContext } from "./context/searchContext";

export interface postProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData: any = async () => {
    const res = await fetchJsonData();
    setPosts(res);
  };

  const { filterData } = useContext(SearchContext);
  console.log("Data", filterData);
  return (
    <>
      <div className={styles.cardContainer}>
        {filterData.length <= 0
          ? posts.map((post: any, index: number) => (
              <Card key={index} post={post} />
            ))
          : filterData?.map((post: any, index: number) => (
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

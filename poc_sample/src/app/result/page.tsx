"use client";
import React from "react";
import styles from "./page.module.css";
import Success from "@/components/utils/Success";
import Button from "@/components/utils/Button";
import Fail from "@/components/utils/Fail";
import { useSearchParams } from "next/navigation";

const Result = () => {
  const searchParams = useSearchParams();
  const isSuccessExit = searchParams.get("success");
  console.log(isSuccessExit);
  return (
    <div className={styles.resultContainer}>
      <div className={styles.content}>
        {isSuccessExit === "true" && (
          <>
            <h4 className={styles.h4}>Success</h4>
            <Success />
          </>
        )}
        {isSuccessExit === "false" && (
          <>
            <h4 className={styles.h4}>Fail</h4>
            <Fail />
          </>
        )}

        <Button text="Back to Home" url="/" className={styles.buttonHome} />
      </div>
    </div>
  );
};

export default Result;

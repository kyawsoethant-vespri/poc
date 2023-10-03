"use client";
import React from "react";
import Lottie from "lottie-react";
import fail from "../../../../public/fail.json";

const Fail = () => {
  return (
    <div>
      <Lottie animationData={fail} loop={true} />
    </div>
  );
};

export default Fail;

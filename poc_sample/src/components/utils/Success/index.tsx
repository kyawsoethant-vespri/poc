"use client";
import React from "react";
import Lottie from "lottie-react";
import success from "../../../../public/success.json";

const Success = () => {
  return (
    <div>
      <Lottie animationData={success} loop={true} />
    </div>
  );
};

export default Success;

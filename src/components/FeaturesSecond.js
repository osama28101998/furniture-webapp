import React from "react";
import { features } from "../data";
const FeaturesSecond = () => {
  const { subtitle, image, title } = features.feature2;
  return (
    <section className="section">
      <div className="mx-auto container">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
          </div>
          <div className="flex-1 ">
            <img src={image.type} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;

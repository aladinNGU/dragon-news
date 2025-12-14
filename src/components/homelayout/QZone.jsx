import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playgroundImage from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3 mt-3">
      <h3 className="font-bold">QZone</h3>
      <div className="space-y-5">
        <img src={swimmingImage} alt="" />
        <img src={classImage} alt="" />
        <img src={playgroundImage} alt="" />
      </div>
    </div>
  );
};

export default QZone;

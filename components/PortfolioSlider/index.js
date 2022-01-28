import React from 'react';

import Slider from "components/Slider";
import OneItemSlider from "components/Slider/OneItemSlider";
import TwoItemSlider from "components/Slider/TwoItemSlider";

export default function PortfolioSlider(second) {
  return (
    <div className="mb-80px">
      <div className="mx-auto box-twoColumn-left box-twoColumn-rightwrapper-y-40px">
        <h3 className="sub-title-text padding-box-x text-gray-700 font-extrabold c-3x-title-container">
          Portfolio
        </h3>
      </div>
      <div className="display-none mob">
        <OneItemSlider />
      </div>
      <div className="display-none tablet">
        <TwoItemSlider />
      </div>
      <div className="display-none desktop">
        <Slider />
      </div>
    </div>
  );
}

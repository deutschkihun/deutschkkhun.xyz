import React from "react";
import { randomColorGenerator } from "../../helper/randomColorGenerator";
import { CircleAdvanceProps } from "./SVGD3CircleAdvance";

export const CircleAdvance = ({
  width,
  height,
  centerX,
  centerY,
  radius,
}: CircleAdvanceProps): JSX.Element => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        <circle fill={randomColorGenerator()} r={radius} />
      </g>
    </svg>
  );
};

import React from "react";
import { Plain } from "./Plain";
import { GGplot2 } from "./GGPlot2";
import { Ipsum } from "./Ipsum";

export interface ChartBackgroundProps {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export const ChartBackground = ({
  width,
  height,
  margin,
}: ChartBackgroundProps): JSX.Element => {
  return (
    <>
      <Plain width={width} height={height} margin={margin} />
      <GGplot2 width={width} height={height} margin={margin} />
      <Ipsum width={width} height={height} margin={margin} />
    </>
  );
};

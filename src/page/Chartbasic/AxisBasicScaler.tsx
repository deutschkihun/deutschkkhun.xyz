import React from "react";
import { LinearScaler } from "./LinearScaler";
import { LogScaler } from "./LogScaler";

export interface AxisScalerBasicProps {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export const AxisScalerBasic = ({
  width,
  height,
  margin,
}: AxisScalerBasicProps): JSX.Element => {
  return (
    <>
      <LinearScaler width={width} height={height} margin={margin} />
      <LogScaler width={width} height={height} margin={margin} />
    </>
  );
};

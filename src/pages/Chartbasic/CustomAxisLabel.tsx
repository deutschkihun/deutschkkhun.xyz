import React from "react";
import { AxisLabel } from "./AxisLabel";
import { AxisLabelAdvance } from "./AxisLabelAdvance";

export interface CustomAxisLabelProps {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  pointer?: string[];
  band?: string[];
}

export const CustomAxisLabel = ({
  width,
  height,
  margin,
  pointer,
  band,
}: CustomAxisLabelProps): JSX.Element => {
  return (
    <>
      <AxisLabel width={width} height={height} margin={margin} band={band} />
      <AxisLabelAdvance
        width={width}
        height={height}
        margin={margin}
        pointer={pointer}
      />
    </>
  );
};

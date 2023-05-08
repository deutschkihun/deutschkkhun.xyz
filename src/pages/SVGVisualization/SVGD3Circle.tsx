import React from "react";
import { range } from "d3";
import { CircleTop } from "./CircleTop";
import { CircleBottom } from "./CircleBottom";

export interface CircleProps {
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  radius: number;
  opacity: number;
  refresh: any;
  index?: number;
}

export const SVGD3Circle = ({
  width,
  height,
  centerX,
  centerY,
  radius,
  opacity,
  refresh,
}: CircleProps): JSX.Element => {
  return (
    <>
      {range(6 * 3).map((i) => (
        <>
          <CircleTop
            width={width * 2}
            height={height * 2}
            centerX={centerX * 2}
            centerY={centerY * 2}
            radius={radius}
            index={i}
            opacity={opacity}
            refresh={refresh}
          />
          <CircleBottom
            width={width}
            height={height}
            centerX={centerX}
            centerY={centerY}
            radius={radius}
            index={i}
            opacity={opacity}
            refresh={refresh}
          />
        </>
      ))}
    </>
  );
};

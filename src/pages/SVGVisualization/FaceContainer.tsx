import React from "react";
import { arc } from "d3";
import { randomColorGenerator } from "../../helper/randomColorGenerator";

interface FaceContainerProps {
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  strokeWidth: number;
  eyeOffsetX: number;
  eyeOffsetY: number;
  eyeRadius: number;
  mouthWidth: number;
  mouthRadius: number;
}

interface EyeProps {
  eyeOffsetX: number;
  eyeOffsetY: number;
  eyeRadius: number;
}

interface MouthProps {
  mouthRadius: number;
  mouthWidth: number;
}

export const FaceContainer = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthWidth,
  mouthRadius,
}: FaceContainerProps): JSX.Element => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        <circle
          r={centerY - strokeWidth / 2}
          fill={randomColorGenerator()}
          stroke="black"
          strokeWidth={strokeWidth}
        />

        <Eyes
          eyeOffsetX={eyeOffsetX}
          eyeOffsetY={eyeOffsetY}
          eyeRadius={eyeRadius}
        />
        <SmileMouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
      </g>
    </svg>
  );
};

export const SmileMouth = ({ mouthRadius, mouthWidth }: MouthProps): any => {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);
  return (
    <path
      d={
        mouthArc({
          innerRadius: mouthRadius,
          outerRadius: mouthRadius + mouthWidth,
          startAngle: Math.PI / 2,
          endAngle: (Math.PI * 3) / 2,
        }) as string
      }
    />
  );
};

export function Eyes({
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
}: EyeProps): JSX.Element {
  return (
    <>
      <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
      <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
    </>
  );
}

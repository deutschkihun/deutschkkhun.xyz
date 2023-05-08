import React from "react";

interface EyeProps {
  eyeOffsetX: number;
  eyeOffsetY: number;
  eyeRadius: number;
}

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

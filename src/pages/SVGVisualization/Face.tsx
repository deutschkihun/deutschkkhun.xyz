import { range } from "d3-array";
import { FaceContainer } from "./FaceContainer";

interface FaceProps {
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  type: string;
}

export const Face = ({
  width,
  height,
  centerX,
  centerY,
}: FaceProps): JSX.Element => {
  return (
    <>
      {range(6 * 3).map((i) => (
        <FaceContainer
          key={i}
          width={width}
          height={height}
          centerX={centerX}
          centerY={centerY}
          strokeWidth={6 + Math.random() * 3}
          eyeOffsetX={20 + Math.random() * 9}
          eyeOffsetY={20 + Math.random() * 15}
          eyeRadius={5 + Math.random() * 10}
          mouthWidth={7 + Math.random() * 9}
          mouthRadius={30 + Math.random() * 10}
        />
      ))}
    </>
  );
};

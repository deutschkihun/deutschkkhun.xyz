import React, { useState, useCallback, useRef } from "react";

interface SVGOnMouseProps {
  width: number;
  height: number;
  radius: number;
}

export const SVGOnMouse = ({
  width,
  height,
  radius,
}: SVGOnMouseProps): JSX.Element => {
  const init = { x: width / 2, y: height / 2 };
  const MouseMoveRef = useRef<SVGSVGElement>(null);
  const [mousePosition, setMousePosition] = useState(init);
  const handleMouseMove = useCallback(
    (e) => {
      if (MouseMoveRef.current) {
        const leftOffSet = MouseMoveRef.current.getBoundingClientRect().left;
        const TopOffSet = MouseMoveRef.current.getBoundingClientRect().top;
        const { clientX, clientY } = e;
        setMousePosition({
          x: clientX - leftOffSet,
          y: clientY - TopOffSet,
        });
      }
    },
    [MouseMoveRef, setMousePosition]
  );

  return (
    <svg
      ref={MouseMoveRef}
      width="100%"
      height={height * 2}
      onMouseMove={handleMouseMove}
    >
      <circle cx={mousePosition.x} cy={mousePosition.y} r={radius} />
    </svg>
  );
};

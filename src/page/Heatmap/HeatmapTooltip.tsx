import React, { useState } from "react";
import { Renderer } from "./Tooltip/Renderer";
import { Tooltip } from "./Tooltip/Tooltip";

type HeatmapProps = {
  width: number;
  height: number;
  data: { x: string; y: string; value: number }[];
};

export type InteractionData = {
  xLabel: string;
  yLabel: string;
  xPos: number;
  yPos: number;
  value: number;
};

export const HeatmapToolTip = ({
  width,
  height,
  data,
}: HeatmapProps): JSX.Element => {
  const [hoveredCell, setHoveredCell] = useState<InteractionData | null>(null);

  return (
    <>
      <div style={{ position: "relative", width: "100%" }}>
        <Renderer
          width={width}
          height={height}
          data={data}
          setHoveredCell={setHoveredCell}
        />
        <Tooltip interactionData={hoveredCell} width={width} height={height} />
      </div>
    </>
  );
};

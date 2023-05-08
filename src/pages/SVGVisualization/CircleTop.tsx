import React, { useEffect } from "react";
import * as d3 from "d3";
import { CircleProps } from "./SVGD3Circle";
import { randomColorGenerator } from "../../helper/randomColorGenerator";
export const CircleTop = ({
  width,
  height,
  centerX,
  centerY,
  index,
  radius,
  opacity,
  refresh,
}: CircleProps): JSX.Element => {
  useEffect(() => {
    const circletopSVG = d3
      .select(`#Top${String(index)}`)
      .attr("width", width)
      .attr("height", height);
    refresh && circletopSVG.select("g").remove();
    circletopSVG
      .append("g")
      .attr("id", `g+#Top${String(index)}`)
      .attr("transform", `translate(${centerX},${centerY})`)
      .append("circle")
      .attr("r", radius)
      .style("fill", randomColorGenerator())
      .attr("fill-opacity", opacity);
  });

  return <svg id={`Top${String(index)}`} />;
};

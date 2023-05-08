import React, { useEffect } from "react";
import * as d3 from "d3";
import { CustomAxisLabelProps } from "./CustomAxisLabel";

export const AxisLabel = ({
  width,
  height,
  margin,
  band,
}: CustomAxisLabelProps): JSX.Element => {
  useEffect(() => {
    const xScaleBand = d3
      .scaleBand()
      .domain(band as string[])
      .range([0, width]);
    const yScaleBand = d3
      .scaleBand()
      .domain(band as string[])
      .range([height, 0]);

    const axisTemplate = d3
      .select("#axislabeladvance")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    axisTemplate
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScaleBand));
    axisTemplate.append("g").call(d3.axisLeft(yScaleBand));

    axisTemplate
      .append("text")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height + margin.top + 20)
      .text("X axis");

    axisTemplate
      .append("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left + 10)
      .attr("x", -margin.top)
      .text("Y axis");

    axisTemplate
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("text-decoration", "underline")
      .text(`Custom Axis: Non numeric axis`);
  });
  return <svg id="axislabeladvance" />;
};

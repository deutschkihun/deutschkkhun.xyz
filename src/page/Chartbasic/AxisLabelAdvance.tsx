import React, { useEffect } from "react";
import * as d3 from "d3";
import { CustomAxisLabelProps } from "./CustomAxisLabel";

export const AxisLabelAdvance = ({
  width,
  height,
  margin,
  pointer,
}: CustomAxisLabelProps): JSX.Element => {
  useEffect(() => {
    const xScalePointer = d3
      .scaleBand()
      .domain(pointer as string[])
      .range([0, width]);
    const yScalePointer = d3
      .scaleBand()
      .domain(pointer as string[])
      .range([height, 0]);

    const axisTemplate = d3
      .select("#axislabel")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    axisTemplate
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScalePointer))
      .selectAll("text")
      .attr("transform", "translate(15,0)")
      .style("text-anchor", "end")
      .style("fill", "#69a3b2");
    axisTemplate
      .append("g")
      .call(d3.axisLeft(yScalePointer))
      .selectAll("text")
      .attr("transform", "translate(-15,-25)rotate(-90)")
      .style("text-anchor", "end")
      .style("fill", "#69a3b2");

    // Add X axis label:
    axisTemplate
      .append("text")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height + margin.top + 20)
      .text("X axis");

    // Y axis label:
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
  return <svg id="axislabel" />;
};

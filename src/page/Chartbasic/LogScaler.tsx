import React, { useEffect } from "react";
import * as d3 from "d3";
import { AxisScalerBasicProps } from "./AxisBasicScaler";

export const LogScaler = ({
  width,
  height,
  margin,
}: AxisScalerBasicProps): JSX.Element => {
  useEffect(() => {
    const xScaleLog = d3.scaleLog().domain([1, 1000]).range([0, width]).base(2);
    const yScaleLog = d3
      .scaleLog()
      .domain([1, 1000])
      .range([height, 0])
      .base(2);
    const axisTemplate = d3
      .select(`#chart_scaler`)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    axisTemplate
      .append("g")
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScaleLog));
    axisTemplate.append("g").call(d3.axisLeft(yScaleLog));
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
      .text(`Log Scaler with base 2`);
  }, [height, margin.bottom, margin.left, margin.right, margin.top, width]);

  return <svg id={`chart_scaler`} />;
};

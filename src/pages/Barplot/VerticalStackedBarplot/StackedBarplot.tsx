import {useLayoutEffect, useMemo, useRef} from 'react'
import * as d3 from 'd3'

const MARGIN = {top: 30, right: 30, bottom: 50, left: 50}

export type Group = {[key: string]: any}

type StackedBarplotProps = {
  width: number
  height: number
  data: Group[]
}

export const StackedBarplot = ({width, height, data}: StackedBarplotProps) => {
  const axesRef = useRef(null)
  const boundsWidth = width - MARGIN.right - MARGIN.left
  const boundsHeight = height - MARGIN.top - MARGIN.bottom

  const allGroups = data.map(d => String(d.x))
  const allSubgroups = ['groupA', 'groupB', 'groupC', 'groupD']

  const stackSeries = d3.stack().keys(allSubgroups).order(d3.stackOrderNone)

  const series = stackSeries(data)

  const max = 200
  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, max || 0])
      .range([boundsHeight, 0])
  }, [boundsHeight])

  const xScale = useMemo(() => {
    return d3.scaleBand<string>().domain(allGroups).range([0, boundsWidth]).padding(0.05)
  }, [allGroups, boundsWidth])

  var colorScale = d3
    .scaleOrdinal<string>()
    .domain(allGroups)
    .range(['#e0ac2b', '#e85252', '#6689c6', '#9a6fb0', '#a53253'])

  useLayoutEffect(() => {
    const svgElement = d3.select(axesRef.current)
    svgElement.selectAll('*').remove()
    const xAxisGenerator = d3.axisBottom(xScale)
    svgElement
      .append('g')
      .attr('transform', 'translate(0,' + boundsHeight + ')')
      .call(xAxisGenerator)

    const yAxisGenerator = d3.axisLeft(yScale)
    svgElement.append('g').call(yAxisGenerator)
  }, [xScale, yScale, boundsHeight])

  const rectangles = series.map((subgroup, i) => {
    return (
      <g key={i}>
        {subgroup.map((group, j) => {
          return (
            <rect
              key={j}
              x={xScale(group.data.x.toString())}
              y={yScale(group[1])}
              height={yScale(group[0]) - yScale(group[1])}
              width={xScale.bandwidth()}
              fill={colorScale(subgroup.key)}
              opacity={0.9}></rect>
          )
        })}
      </g>
    )
  })

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}>
          {rectangles}
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        />
      </svg>
    </div>
  )
}

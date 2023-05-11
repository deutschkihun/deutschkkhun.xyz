import {useMemo} from 'react'
import * as d3 from 'd3'
import {DumbbellItem} from './DumbbellItem'

const MARGIN = {top: 30, right: 30, bottom: 30, left: 70}

type DumbbellProps = {
  width: number
  height: number
  data: {name: string; value1: number; value2: number}[]
}

export const Dumbbell = ({width, height, data}: DumbbellProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left
  const boundsHeight = height - MARGIN.top - MARGIN.bottom

  const groups = data.map(d => d.name).sort()
  const yScale = useMemo(() => {
    return d3.scaleBand().domain(groups).range([0, boundsHeight])
  }, [boundsHeight, groups])

  const xScale = useMemo(() => {
    return d3.scaleLinear().domain([0, 120]).range([0, boundsWidth])
  }, [boundsWidth])

  const allShapes = data.map(d => {
    return (
      <DumbbellItem
        key={d.name}
        name={d.name}
        xValue1={xScale(d.value1)}
        xValue2={xScale(d.value2)}
        y={yScale(d.name) as number}
      />
    )
  })

  const grid = xScale
    .ticks(5)
    .slice(1)
    .map((value, i) => (
      <g key={i}>
        <line
          x1={xScale(value)}
          x2={xScale(value)}
          y1={0}
          y2={boundsHeight}
          stroke="#808080"
          opacity={0.2}
        />
        <text
          x={xScale(value)}
          y={boundsHeight + 10}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={9}
          stroke="#808080"
          opacity={0.8}>
          {value}
        </text>
      </g>
    ))

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}>
          {grid}
          {allShapes}
        </g>
      </svg>
    </div>
  )
}

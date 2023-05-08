import {useMemo} from 'react'
import * as d3 from 'd3'
import {data} from './data'

const MARGIN = {top: 30, right: 30, bottom: 30, left: 30}
const BAR_PADDING = 0.3

type BarplotProps = {
  width: number
  height: number
}

export const SimpleBarplot = ({width, height}: BarplotProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left
  const boundsHeight = height - MARGIN.top - MARGIN.bottom

  const xScale = useMemo(() => {
    const [, max] = d3.extent(data.map(d => d.value))
    return d3
      .scaleLinear()
      .domain([0, max || 10])
      .range([0, boundsWidth])
  }, [boundsWidth])

  const groups = data.sort((a, b) => b.value - a.value).map(d => d.name)
  const yScale = useMemo(() => {
    return d3.scaleBand().domain(groups).range([0, boundsHeight]).padding(BAR_PADDING)
  }, [boundsHeight, groups])

  // 눈금자 수 = ticks()
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
          stroke="#312f2f"
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

  const bars = data.map((d, i) => {
    const y = yScale(d.name)

    if (y === undefined) {
      return null
    }

    return (
      <g key={i}>
        <rect
          x={xScale(0)}
          y={yScale(d.name)}
          opacity={0.7}
          stroke="#383738"
          fill="yellow"
          fillOpacity={0.3}
          strokeWidth={1}
          width={xScale(d.value)}
          height={yScale.bandwidth()}
          rx={5}
        />
        <text
          x={xScale(d.value) - 7}
          y={y + yScale.bandwidth() / 2}
          textAnchor="end"
          alignmentBaseline="central"
          fontSize={12}
          opacity={xScale(d.value) > 90 ? 1 : 0} // bar 길이가 너무 짧으면 값을 보여주지 않음
        >
          {d.value}
        </text>
        <text
          x={xScale(0) + 7}
          y={y + yScale.bandwidth() / 2}
          textAnchor="start"
          alignmentBaseline="central"
          fontSize={12}>
          {d.name}
        </text>
      </g>
    )
  })

  return (
    <svg width={width} height={height}>
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}>
        {grid}
        {bars}
      </g>
    </svg>
  )
}

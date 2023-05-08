import {useState} from 'react'
import styles from './hover.module.css'
import * as d3 from 'd3'
import {AxisLeft} from '../AxisLeft'
import {AxisBottom} from '../AxisBottom'
import {data} from './data'

const MARGIN = {top: 60, right: 60, bottom: 60, left: 60}

type ScatterplotProps = {
  width: number
  height: number
}

export const ScatterplotHoverEffect = ({
  width,
  height
}: ScatterplotProps): JSX.Element => {
  const boundsWidth = width - MARGIN.right - MARGIN.left
  const boundsHeight = height - MARGIN.top - MARGIN.bottom

  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null)

  // Scales
  const yScale = d3.scaleLinear().domain([35, 85]).range([boundsHeight, 0])
  const xScale = d3.scaleLinear().domain([-3000, 50000]).range([0, boundsWidth])
  const allGroups = data.map(d => String(d.group))
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(allGroups)
    .range(['#e0ac2b', '#e85252', '#6689c6', '#9a6fb0', '#a53253'])

  // Build the shapes
  const allShapes = data.map((d, i) => {
    const className =
      hoveredGroup && d.group !== hoveredGroup
        ? styles.scatterplotCircle + ' ' + styles.dimmed
        : styles.scatterplotCircle
    return (
      <circle
        className={className}
        key={i}
        r={5}
        cx={xScale(d.x)}
        cy={yScale(d.y)}
        stroke={colorScale(d.group)}
        fill={colorScale(d.group)}
        onMouseOver={() => setHoveredGroup(d.group)}
        onMouseLeave={() => setHoveredGroup(null)}
      />
    )
  })

  return (
    <div>
      <svg width={width} height={height}>
        {/* first group is for the violin and box shapes */}
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}>
          {/* Y axis */}
          <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />

          {/* X axis, use an additional translation to appear at the bottom */}
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom xScale={xScale} pixelsPerTick={40} height={boundsHeight} />
          </g>

          {/* Circles */}
          {allShapes}
        </g>
      </svg>
    </div>
  )
}
import * as d3 from 'd3'
import {AxisBottom} from '../AxisBottom'
import {AxisLeft} from '../AxisLeft'
import React, {useState} from 'react'
import {InteractionData, Tooltip} from './Tooltip'
import {data} from './data'

const MARGIN = {top: 60, right: 60, bottom: 60, left: 60}

type ScatterplotProps = {
  width: number
  height: number
}

export const ScatterplotToolTip = ({width, height}: ScatterplotProps): JSX.Element => {
  const boundsWidth = width - MARGIN.right - MARGIN.left
  const boundsHeight = height - MARGIN.top - MARGIN.bottom

  const [hovered, setHovered] = useState<InteractionData | null>(null)

  const yScale = d3.scaleLinear().domain([0, 85]).range([boundsHeight, 0])
  const xScale = d3.scaleLinear().domain([0, 50000]).range([0, boundsWidth])
  const allGroups = data.map(d => String(d.group))
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(allGroups)
    .range(['#A6A6A6', '#D3F354', '#FF3A28', '#F8FFDE', '#3479FF'])

  const allShapes = data.map((d, i) => {
    return (
      <circle
        key={i}
        r={8}
        cx={xScale(d.x)}
        cy={yScale(d.y)}
        stroke={colorScale(d.group)}
        fill={colorScale(d.group)}
        fillOpacity={0.7}
        onMouseEnter={() =>
          setHovered({
            xPos: xScale(d.x),
            yPos: yScale(d.y),
            name: d.subGroup
          })
        }
        onMouseLeave={() => setHovered(null)}
      />
    )
  })

  return (
    <div style={{position: 'relative'}}>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}>
          <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />

          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom xScale={xScale} pixelsPerTick={40} height={boundsHeight} />
          </g>

          {allShapes}
        </g>
      </svg>

      <div
        style={{
          width: boundsWidth,
          height: boundsHeight,
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          marginLeft: MARGIN.left,
          marginTop: MARGIN.top
        }}>
        <Tooltip interactionData={hovered} />
      </div>
    </div>
  )
}

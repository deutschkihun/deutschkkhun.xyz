import React from 'react'
import * as d3 from 'd3'
import {StripGenerator} from './StripeGenerator'
import {AxisBottom} from './AxisBottom'
import {AxisSlashLeft} from './AxisSlashLeft'

const MARGIN = {top: 30, right: 30, bottom: 50, left: 50}

type AxisBasicProps = {
  width: number
  height: number
}

export const AxisSlash = ({width, height}: AxisBasicProps): JSX.Element => {
  const boundsWidth = width - MARGIN.right - MARGIN.left
  const boundsHeight = height - MARGIN.top - MARGIN.bottom

  const xScale = d3.scaleLinear().domain([0, 10]).range([0, boundsWidth])
  const yScale = d3.scaleLinear().domain([0, 11]).range([boundsHeight, 0])

  return (
    <div>
      <svg width={width} height={height} shapeRendering={'crispEdges'}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
          overflow={'visible'}>
          {/* graph content */}
          <StripGenerator width={boundsWidth} height={boundsHeight} />

          {/* Y axis */}
          <AxisSlashLeft yScale={yScale} pixelsPerTick={30} />

          {/* X axis, use an additional translation to appear at the bottom */}
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom xScale={xScale} pixelsPerTick={60} />
          </g>
        </g>
      </svg>
    </div>
  )
}

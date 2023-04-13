import * as d3 from 'd3'
import {AxisLeft} from '../AxisLeft'
import {AxisBottom} from '../AxisBottom'
import {useRecoilValue} from 'recoil'
import {modeState} from '../../../recoil/mode'
import {data} from './data'

const MARGIN = {top: 60, right: 60, bottom: 60, left: 60}

type ScatterplotProps = {
  width: number
  height: number
}

export const Scatterplot = ({width, height}: ScatterplotProps): JSX.Element => {
  const mode = useRecoilValue(modeState)
  const boundsWidth = width - MARGIN.right - MARGIN.left
  const boundsHeight = height - MARGIN.top - MARGIN.bottom

  // Scales
  const yScale = d3.scaleLinear().domain([0, 10]).range([boundsHeight, 0])
  const xScale = d3.scaleLinear().domain([0, 10]).range([0, boundsWidth])

  // Build the shapes
  const allShapes = data.map((d, i) => {
    return (
      <circle
        key={i}
        r={13}
        cx={xScale(d.y)}
        cy={yScale(d.x)}
        opacity={1}
        stroke={mode === 'light-mode' ? 'black' : 'white'}
        fill={mode === 'light-mode' ? 'blue' : 'yellow'}
        fillOpacity={0.2}
        strokeWidth={1}
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

import * as d3 from 'd3'
import {AxisLeft} from '../AxisLeft'
import {AxisBottom} from '../AxisBottom'
import {data} from './data'
import {useSelector} from 'react-redux'
import {AppState} from '../../../store'
import * as M from '../../../store/mode'

const MARGIN = {top: 60, right: 60, bottom: 60, left: 60}

type ScatterplotProps = {
  width: number
  height: number
}

export const Scatterplot = ({width, height}: ScatterplotProps): JSX.Element => {
  const boundsWidth = width - MARGIN.right - MARGIN.left
  const boundsHeight = height - MARGIN.top - MARGIN.bottom
  const mode = useSelector<AppState, M.State>(({mode}) => mode)

  const yScale = d3.scaleLinear().domain([0, 10]).range([boundsHeight, 0])
  const xScale = d3.scaleLinear().domain([0, 10]).range([0, boundsWidth])

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
    </div>
  )
}

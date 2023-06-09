import type {ScaleLinear} from 'd3'
import {FC, useMemo} from 'react'
import {useSelector} from 'react-redux'
import {AppState} from '../../store'
import * as M from '../../store/mode'

export type AxisBottomProps = {
  xScale: ScaleLinear<number, number>
  pixelsPerTick: number
  height: number
}

const TICK_LENGTH = 10

export const AxisBottom: FC<AxisBottomProps> = ({xScale, pixelsPerTick, height}) => {
  const mode = useSelector<AppState, M.State>(({mode}) => mode)

  const [min, max] = xScale.range()

  const ticks = useMemo(() => {
    const width = max - min
    const numberOfTicksTarget = Math.floor(width / pixelsPerTick)

    return xScale
      .ticks(numberOfTicksTarget)
      .map(value => ({value, xOffset: xScale(value)}))
  }, [max, min, pixelsPerTick, xScale])

  return (
    <>
      {ticks.map(({value, xOffset}) => (
        <g
          key={value}
          transform={`translate(${xOffset}, 0)`}
          shapeRendering={'crispEdges'}>
          <line
            y1={TICK_LENGTH}
            y2={-height - TICK_LENGTH}
            stroke={mode === 'light' ? 'black' : '#D2D7D3'}
            strokeWidth={0.5}
          />
          <text
            key={value}
            style={{
              fontSize: '10px',
              textAnchor: 'middle',
              transform: 'translateY(20px)',
              fill: mode === 'light' ? 'black' : '#D2D7D3'
            }}>
            {value}
          </text>
        </g>
      ))}
    </>
  )
}

import React, { useMemo } from 'react'
import { ScaleLinear } from 'd3'
import { useRecoilValue } from 'recoil'
import { modeState } from '../../recoil/mode'

type AxisLeftProps = {
  yScale: ScaleLinear<number, number>
  pixelsPerTick: number
  width: number
}

const TICK_LENGTH = 10

export const AxisLeft = ({
  yScale,
  pixelsPerTick,
  width,
}: AxisLeftProps): JSX.Element => {
  const mode = useRecoilValue(modeState)
  const range = yScale.range()

  const ticks = useMemo(() => {
    const height = range[0] - range[1]
    const numberOfTicksTarget = Math.floor(height / pixelsPerTick)

    return yScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      yOffset: yScale(value),
    }))
  }, [pixelsPerTick, range, yScale])

  return (
    <>
      {/* Ticks and labels */}
      {ticks.map(({ value, yOffset }) => (
        <g key={value} transform={`translate(0, ${yOffset})`}>
          <line
            x1={-TICK_LENGTH}
            x2={width + TICK_LENGTH}
            stroke={mode === 'light-mode' ? 'black' : '#D2D7D3'}
            strokeWidth={0.5}
            shapeRendering={'crispEdges'}
          />
          <text
            key={value}
            style={{
              fontSize: '10px',
              textAnchor: 'middle',
              transform: 'translateX(-20px)',
              fill: mode === 'light-mode' ? 'black' : '#D2D7D3',
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </>
  )
}

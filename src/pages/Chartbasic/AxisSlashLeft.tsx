import React from 'react'
import {useMemo} from 'react'
import {ScaleLinear} from 'd3'

type AxisLeftProps = {
  yScale: ScaleLinear<number, number>
  pixelsPerTick: number
}

const TICK_LENGTH = 6

export const AxisSlashLeft = ({yScale, pixelsPerTick}: AxisLeftProps): JSX.Element => {
  const range = yScale.range()

  const ticks = useMemo(() => {
    const height = range[0] - range[1]
    const numberOfTicksTarget = Math.floor(height / pixelsPerTick)

    return yScale.ticks(numberOfTicksTarget).map(value => ({
      value,
      yOffset: yScale(value)
    }))
  }, [pixelsPerTick, range, yScale])

  return (
    <>
      <path
        d={['M', 0, range[0], 'L', 0, range[1]].join(' ')}
        fill="none"
        stroke="currentColor"
      />

      {ticks.map(({value, yOffset}) => (
        <g key={value} transform={`translate(0, ${yOffset})`}>
          <line x2={-TICK_LENGTH} stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: '10px',
              textAnchor: 'middle',
              transform: 'translateX(-20px)'
            }}>
            {value}
          </text>
        </g>
      ))}
    </>
  )
}

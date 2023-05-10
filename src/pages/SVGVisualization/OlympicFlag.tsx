import React, {useEffect} from 'react'
import * as d3 from 'd3'
import {range} from 'd3'

interface FlagProps {
  width: number
  height: number
  centerX: number
  centerY: number
  radius: number
  strokeWidth: number
}
export const OlympicFlag = ({
  width,
  height,
  centerX,
  centerY,
  radius,
  strokeWidth
}: FlagProps): JSX.Element => {
  const array = range(5)
  const loop = range(2)

  useEffect(() => {
    const cx = [110, 240, 370, 175, 305]
    const cy = [100, 100, 100, 175, 175]
    const color = ['blue', 'black', 'red', 'yellow', 'green']
    loop.forEach(k => {
      const olympicFlag = d3
        .select(`#olympicflag${String(k)}`)
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${centerX},${centerY})`)

      array.map(i =>
        olympicFlag
          .append('circle')
          .attr('r', radius)
          .attr('cx', cx[i])
          .attr('cy', cy[i])
          .attr('stroke', color[i])
          .attr('stroke-width', strokeWidth)
          .style('fill-opacity', '0')
      )
    })
  }, [array, centerX, centerY, height, loop, radius, strokeWidth, width])

  return (
    <>
      {loop.map(k => (
        <svg id={`olympicflag${String(k)}`} key={k} />
      ))}
    </>
  )
}

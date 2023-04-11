import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { Title, Message, Box } from '../../components/Foundation'

const Path = (): JSX.Element => {
  useEffect(() => {
    d3.selectAll('#sample')
      .attr('stroke', 'rebeccapurple')
      .attr('stroke-width', '1rem')

    d3.select('.g1').attr('fill', 'yellow')
  }, [])
  return (
    <Box>
      <Title>SVG basic: path</Title>
      <Message>
        M: starting point of drawing, L: line drawing, set value to draw first
        line from M, H: horizontal line, V: vertical line, Z: finish rest line,
        C: curve (start,adjust point (curving point) end)
      </Message>
      <svg viewBox="0 0 1500 500" style={{ background: '#ddd' }}>
        <g className="g1">
          <path id="sample" d="M 300 200 L 500 100 H 50 V 300 Z" />
          <path id="sample" d="M 500 150 C 500 150 900 500 500 300 Z" />
          <path id="sample" d="M 10 10 L 50 100 H 300 V 500 Z" />
        </g>
      </svg>
    </Box>
  )
}

export default Path

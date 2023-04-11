import { useEffect } from 'react'
import * as d3 from 'd3'
import { Title, Message, Box } from '../../components/Foundation'

const Pattern = (): JSX.Element => {
  useEffect(() => {
    d3.select('#pattern-svg').style('width', '100%').style('background', '#ddd')
  }, [])
  return (
    <Box>
      <Title>SVG basic: pattern</Title>
      <Message>
        Making pattern effect with pattern tag in svg. In this example set
        pattern with width 0.1 and height 0.1. This number does not mean the
        absolute pixel. circle has radius 50, so diameter is 100, and width 0.1
        mean that 100 will be a 10% of entire width, so when you want to fill
        all circle in svg you need to set viewbox with 1000. As a same result
        you can change 1000 to 500 in viewbox and 50 to 25 in circle cx cy and
        radius brings a same pattern result.
      </Message>
      <svg id="pattern-svg" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="bg-pattern" x="0" y="0" width="0.1" height="0.1">
            <circle
              cx="50"
              cy="50"
              r="50"
              className="pattern-circle"
              fill="#fff000"
            />
          </pattern>
        </defs>
        <rect
          className="bg-rect"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#bg-pattern)"
        />
      </svg>
    </Box>
  )
}

export default Pattern

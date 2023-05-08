import {Box, Paragraph, Subtitle} from '../../components'

const Mask = (): JSX.Element => {
  return (
    <Box>
      <Subtitle>SVG basic: mask</Subtitle>
      <Paragraph>
        mask is a effect that show only specific area, other areas are hidden by mask. Set
        the color to white will show the effect area. when the fill color close to black
        effect area will be disappeared.
      </Paragraph>
      <svg style={{width: '100%'}}>
        <defs>
          <mask id="mask-circle">
            <circle cx="150" cy="70" r="40" fill="grey" />
            <circle cx="250" cy="70" r="40" fill="white" />
            <circle cx="350" cy="70" r="40" fill="white" />
          </mask>
        </defs>
        <g mask="url(#mask-circle)">
          <text x="10" y="100" fontSize="2rem">
            ex.) mask svg d3 react mask svg d3 react mask svg d3 react mask svg d3 react
            mask svg d3 react
          </text>
        </g>
      </svg>
    </Box>
  )
}

export default Mask

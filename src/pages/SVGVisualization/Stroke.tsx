import {Box, Paragraph, Subtitle} from '../../components'

const Stroke = (): JSX.Element => {
  return (
    <Box>
      <Subtitle>SVG basic: stroke animation</Subtitle>
      <Paragraph>
        Create stroke animation with stroke-dashoffset and stroke-dasharray (animation
        start from stroke-dashofsset to stroke-dasharray)
      </Paragraph>
      <svg viewBox="0 0 800 500">
        <circle
          className="stroke-current stroke-circle stroke-5 stroke-dasharray-700 fill-none animate-dash-ani"
          cx="400"
          cy="150"
          r="100"
        />
        <path
          className="stroke-current stroke-path stroke-5 stroke-dasharray-727 fill-none animate-dash-ani"
          d="M 50 400 C 50 400, 300 500, 400 400 C 400 400, 600 170, 700 300"
        />
      </svg>
    </Box>
  )
}

export default Stroke

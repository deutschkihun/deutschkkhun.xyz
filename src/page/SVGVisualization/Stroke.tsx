import { Title, Message, Box } from '../../components/Foundation'

const Stroke = (): JSX.Element => {
  return (
    <Box>
      <Title>SVG basic: stroke animation</Title>
      <Message>
        Create stroke animation with stroke-dashoffset and stroke-dasharray
        (animation start from stroke-dashofsset to stroke-dasharray)
      </Message>
      <svg viewBox="0 0 800 500">
        <circle className="stroke-circle" cx="400" cy="150" r="100" />
        <path
          className="stroke-path"
          d="M 50 400 C 50 400, 300 500, 400 400 C 400 400, 600 170, 700 300"
        />
      </svg>
    </Box>
  )
}

export default Stroke

import { Title, Message, Box } from '../../components/Foundation'

const Text = (): JSX.Element => {
  return (
    <Box>
      <Title>SVG basic: text</Title>
      <Message>
        Writing dynamic text component with svg. x: the x coordinate of the
        starting point, y: the y coordinate of the starting point. default is
        zero. Use defs to save graphic object such as path and connect with
        textPath href.
      </Message>
      <svg viewBox="0 0 1000 500">
        <defs>
          <path
            id="text-curve"
            d="M 50 100 C 50 100, 400 600, 500 400 C 500 400, 600 -400, 1000 600"
          />
        </defs>
        <text x="0" y="0">
          <textPath href="#text-curve">
            hello my <tspan className="strong">friends</tspan> my name is Kihun
            Kim. nice to see you. how are you ? hello my{' '}
            <tspan className="strong">friends</tspan> my name is Kihun Kim. nice
            to see you. how are you ? hello my{' '}
            <tspan className="strong">friends</tspan> my name is Kihun Kim. nice
            to see you.
          </textPath>
        </text>
      </svg>
    </Box>
  )
}

export default Text

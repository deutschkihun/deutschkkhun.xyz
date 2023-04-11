import { Title, Message, Box } from '../../components/Foundation'

const Gradation = (): JSX.Element => {
  return (
    <Box>
      <Title>SVG basic: gradation</Title>
      <Message>
        For gradation in svg, please use stop tag and gradient tag. First one
        has no gradataion, second one has linear gradient effect, last one has
        radial gradient effect
      </Message>
      <svg
        width="200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 571 625.5"
      >
        <circle
          cx="286.5"
          cy="354.5"
          r="251"
          strokeWidth="40"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
        />
        <circle cx="175" cy="380.5" r="42.5" />
        <circle cx="397" cy="380.5" r="42.5" />
        <path
          d="M422 476.16a181.3 181.3 0 0 1-135.48 60.59H286a181.3 181.3 0 0 1-135.48-60.59"
          strokeWidth="30"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
        />
        <path d="M428.5 75a164.06 164.06 0 0 0-35.68 3.9C376.86 33.64 317 0 245.5 0 162.57 0 95.22 45.3 94 101.49c-55.71 19.82-94 61.19-94 109C0 277.6 75.44 332 168.5 332c62 0 116.14-24.14 145.41-60.09C339.87 302.3 381.53 322 428.5 322c78.7 0 142.5-55.29 142.5-123.5S507.2 75 428.5 75z" />
      </svg>
      <svg
        width="200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 571 625.5"
      >
        <defs>
          <linearGradient id="hair-color">
            <stop offset="0%" stopColor="yellow" />
            <stop offset="50%" stopColor="hotpink" />
            <stop offset="100%" stopColor="deepskyblue" />
          </linearGradient>
        </defs>
        <circle
          cx="286.5"
          cy="354.5"
          r="251"
          strokeWidth="40"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
        />
        <circle cx="175" cy="380.5" r="42.5" />
        <circle cx="397" cy="380.5" r="42.5" />
        <path
          d="M422 476.16a181.3 181.3 0 0 1-135.48 60.59H286a181.3 181.3 0 0 1-135.48-60.59"
          strokeWidth="30"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
        />
        <path
          fill="url(#hair-color)"
          d="M428.5 75a164.06 164.06 0 0 0-35.68 3.9C376.86 33.64 317 0 245.5 0 162.57 0 95.22 45.3 94 101.49c-55.71 19.82-94 61.19-94 109C0 277.6 75.44 332 168.5 332c62 0 116.14-24.14 145.41-60.09C339.87 302.3 381.53 322 428.5 322c78.7 0 142.5-55.29 142.5-123.5S507.2 75 428.5 75z"
        />
      </svg>

      <svg
        width="200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 571 625.5"
      >
        <defs>
          <radialGradient id="hair-color2">
            <stop offset="0%" stopColor="yellow" />
            <stop offset="50%" stopColor="hotpink" />
            <stop offset="100%" stopColor="deepskyblue" />
          </radialGradient>
        </defs>
        <circle
          cx="286.5"
          cy="354.5"
          r="251"
          strokeWidth="40"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
        />
        <circle cx="175" cy="380.5" r="42.5" />
        <circle cx="397" cy="380.5" r="42.5" />
        <path
          d="M422 476.16a181.3 181.3 0 0 1-135.48 60.59H286a181.3 181.3 0 0 1-135.48-60.59"
          strokeWidth="30"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
        />
        <path
          fill="url(#hair-color2)"
          d="M428.5 75a164.06 164.06 0 0 0-35.68 3.9C376.86 33.64 317 0 245.5 0 162.57 0 95.22 45.3 94 101.49c-55.71 19.82-94 61.19-94 109C0 277.6 75.44 332 168.5 332c62 0 116.14-24.14 145.41-60.09C339.87 302.3 381.53 322 428.5 322c78.7 0 142.5-55.29 142.5-123.5S507.2 75 428.5 75z"
        />
      </svg>
    </Box>
  )
}

export default Gradation

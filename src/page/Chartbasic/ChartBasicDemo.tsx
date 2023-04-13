import {useRef} from 'react'
import {AxisScalerBasic} from './AxisBasicScaler'
import {CustomAxisLabel} from './CustomAxisLabel'
import {ChartBackground} from './ChartBackground'
import {AxisSlash} from './AxisSlash'
import {Box, Paragraph, Subtitle} from '../../components'

export const ChartBasicDemo = (): JSX.Element => {
  const AxisBasicRef = useRef(null)

  const margin = {top: 10, right: 40, bottom: 30, left: 40}
  const width = 450 - margin.left - margin.right
  const height = 400 - margin.top - margin.bottom
  const pointer = ['Apple', 'Grape', 'Banana', 'StrawBerry', 'Watermelon']
  const band = ['C', 'B', 'B+', 'A', 'A+', 'A++']

  return (
    <>
      <Box>
        <Subtitle>Chart basic: Basic Axis scaler</Subtitle>
        <Paragraph>
          For chart configuration, you need to think about what kind of axis scaler do you
          need to build coordinate. In normal case, linear scaler and log scaler are used.
        </Paragraph>
        <div ref={AxisBasicRef}>
          <AxisScalerBasic width={width} height={height} margin={margin} />
        </div>
      </Box>
      <Box>
        <Subtitle>Chart basic: Custom axis label</Subtitle>
        <Paragraph>
          But in case when you need custom axis option such as non numeric axis. You can
          imagine like below.
        </Paragraph>
        <div ref={AxisBasicRef}>
          <CustomAxisLabel
            width={width}
            height={height}
            margin={margin}
            pointer={pointer}
            band={band}
          />
        </div>
      </Box>
      <Box>
        <Subtitle>Chart Background</Subtitle>
        <Paragraph>You can also set up backgrouond that you want</Paragraph>
        <div>
          <ChartBackground width={width} height={height} margin={margin} />
        </div>
      </Box>
      <Box>
        <Subtitle>Chart with Slash Style</Subtitle>
        <Paragraph>
          In practice, slash or plain background is mostly used. See below coordinate
          slash background
        </Paragraph>
        <AxisSlash width={700} height={400} />
      </Box>
    </>
  )
}

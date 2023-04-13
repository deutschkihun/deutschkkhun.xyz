import {Dumbbell, LollipopBasicPlot, LollipopDatasetTransition} from '.'
import {Box, Div, Subtitle} from '../../components'

export const LollipopDemo = ({width, height}) => (
  <Div>
    <Box>
      <Subtitle>Simple lollipop plot</Subtitle>
      <LollipopBasicPlot width={width} height={height} />
    </Box>
    <Box>
      <Subtitle>Dumbbell lollipop plot</Subtitle>
      <Dumbbell width={width} height={height} />
    </Box>

    <Box>
      <Subtitle>Transition lollipop plot</Subtitle>
      <LollipopDatasetTransition width={width} height={height} />
    </Box>
  </Div>
)

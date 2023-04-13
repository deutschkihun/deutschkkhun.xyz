import {Box, Subtitle} from '../../components'
import {Dumbbell} from './DumbbellPlot'
import {LollipopBasicPlot} from './LollipopBasicPlot'
import {LollipopDatasetTransition} from './TransitionLollipopPlot'

export const LollipopDemo = ({width, height}) => (
  <>
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
  </>
)

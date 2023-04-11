import { Title, Box } from '../../components/Foundation'
import { Dumbbell } from './DumbbellPlot'
import { LollipopBasicPlot } from './LollipopBasicPlot'
import { LollipopDatasetTransition } from './TransitionLollipopPlot'

export const LollipopDemo = ({ width, height }) => (
  <>
    <Box>
      <Title>Simple lollipop plot</Title>
      <LollipopBasicPlot width={width} height={height} />
    </Box>
    <Box>
      <Title>Dumbbell lollipop plot</Title>
      <Dumbbell width={width} height={height} />
    </Box>

    <Box>
      <Title>Transition lollipop plot</Title>
      <LollipopDatasetTransition width={width} height={height} />
    </Box>
  </>
)

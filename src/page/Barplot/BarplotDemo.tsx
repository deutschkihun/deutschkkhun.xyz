import {data, SimpleBarplot} from './SimpleBarplot'
import {HorizontalStackedBarplot} from './HorizontalStackedBarplot'
import {BarplotDatasetTransition} from './TransitionBarplot'
import {VerticalStackedBarplot} from './VerticalStackedBarplot'
import {Box, Title} from '../../components'

export const BarplotDemo = ({width, height}) => (
  <>
    <Box>
      <Title>Simple bar plot</Title>
      <SimpleBarplot data={data} width={width} height={height} />
    </Box>
    <Box>
      <Title>Transition bar plot</Title>
      <BarplotDatasetTransition width={width} height={height} />;
    </Box>
    <Box>
      <Title>Horizontal stacked bar plot</Title>
      <HorizontalStackedBarplot width={width} height={height} />;
    </Box>
    <Box>
      <Title>Vertical stacked bar plot</Title>
      <VerticalStackedBarplot width={width} height={height} />;
    </Box>
  </>
)

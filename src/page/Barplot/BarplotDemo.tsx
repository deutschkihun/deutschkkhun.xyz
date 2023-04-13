import {Box, Div, Title} from '../../components'
import {
  HorizontalStackedBarplot,
  BarplotDatasetTransition,
  VerticalStackedBarplot,
  SimpleBarplot
} from '.'

export const BarplotDemo = ({width, height}) => (
  <Div>
    <Box>
      <Title>Simple bar plot</Title>
      <SimpleBarplot width={width} height={height} />
    </Box>
    <Box>
      <Title>Transition bar plot</Title>
      <BarplotDatasetTransition width={width} height={height} />
    </Box>
    <Box>
      <Title>Horizontal stacked bar plot</Title>
      <HorizontalStackedBarplot width={width} height={height} />
    </Box>
    <Box>
      <Title>Vertical stacked bar plot</Title>
      <VerticalStackedBarplot width={width} height={height} />
    </Box>
  </Div>
)

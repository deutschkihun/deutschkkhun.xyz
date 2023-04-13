import {FC} from 'react'
import {Box, Div, Paragraph, Subtitle} from '../../components'
import {Scatterplot, ScatterplotHoverEffect, ScatterplotToolTip} from '.'

interface ScatterplotDemoProps {
  width: number
  height: number
}

export const ScatterplotDemo: FC<ScatterplotDemoProps> = ({
  width,
  height
}): JSX.Element => (
  <Div>
    <Box>
      <Subtitle>Scatterplot basic</Subtitle>
      <Scatterplot width={width} height={height} />
    </Box>
    <Box>
      <Subtitle>Scatterplot advance with tooltip </Subtitle>
      <Paragraph>
        When each plot in coordinate is hovered tooltip with matched information will be
        shown up
      </Paragraph>
      <ScatterplotToolTip width={width} height={height} />
    </Box>
    <Box>
      <Subtitle>Scatterplot advance with hover effect </Subtitle>
      <Paragraph>
        When each plot in coordinate is hovered it will show only same group of plot in
        coordinate
      </Paragraph>
      <ScatterplotHoverEffect width={width} height={height} />
    </Box>
  </Div>
)

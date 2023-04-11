import React from 'react'
import { data } from './Basic/data'
import { data as toolTipData } from './Tooltip/data'
import { Scatterplot } from './Basic/Scatterplot'
import { ScatterplotToolTip } from './Tooltip/ScatterplotToolTip'
import { ScatterplotHoverEffect } from './Hovereffect/ScatterplotHoverEffect'
import { Title, Message, Box } from '../../components/Foundation'

interface ScatterplotDemoProps {
  width: number
  height: number
}

export const ScatterplotDemo = ({
  width,
  height,
}: ScatterplotDemoProps): JSX.Element => (
  <>
    <Box>
      <Title>Scatterplot basic</Title>
      <Scatterplot data={data} width={width} height={height} />
    </Box>
    <Box>
      <Title>Scatterplot advance with tooltip </Title>
      <Message>
        When each plot in coordinate is hovered tooltip with matched information
        will be shown up
      </Message>
      <ScatterplotToolTip data={toolTipData} width={width} height={height} />
    </Box>
    <Box>
      <Title>Scatterplot advance with hover effect </Title>
      <Message>
        When each plot in coordinate is hovered it will show only same group of
        plot in coordinate
      </Message>

      <ScatterplotHoverEffect
        data={toolTipData}
        width={width}
        height={height}
      />
    </Box>
  </>
)

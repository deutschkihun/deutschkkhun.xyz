import {FC} from 'react'
import {data} from './Basic/data'
import {data as toolTipData} from './Tooltip/data'
import {Scatterplot} from './Basic/Scatterplot'
import {ScatterplotToolTip} from './Tooltip/ScatterplotToolTip'
import {ScatterplotHoverEffect} from './Hovereffect/ScatterplotHoverEffect'
import {Box, Paragraph, Subtitle} from '../../components'

interface ScatterplotDemoProps {
  width: number
  height: number
}

export const ScatterplotDemo: FC<ScatterplotDemoProps> = ({
  width,
  height
}): JSX.Element => (
  <>
    <Box>
      <Subtitle>Scatterplot basic</Subtitle>
      <Scatterplot data={data} width={width} height={height} />
    </Box>
    <Box>
      <Subtitle>Scatterplot advance with tooltip </Subtitle>
      <Paragraph>
        When each plot in coordinate is hovered tooltip with matched information will be
        shown up
      </Paragraph>
      <ScatterplotToolTip data={toolTipData} width={width} height={height} />
    </Box>
    <Box>
      <Subtitle>Scatterplot advance with hover effect </Subtitle>
      <Paragraph>
        When each plot in coordinate is hovered it will show only same group of plot in
        coordinate
      </Paragraph>
      <ScatterplotHoverEffect data={toolTipData} width={width} height={height} />
    </Box>
  </>
)

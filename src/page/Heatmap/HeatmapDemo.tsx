import React from 'react'
import { data } from './Tooltip/data'

import { HeatmapToolTip } from './HeatmapTooltip'
import { ContinuousColorLegend } from './ColorLegend'
import { HeatmapWithLegend } from './HeatmapWithLegend/HeatmapWithLegend'
import { data as legendData } from './HeatmapWithLegend/data'
import { Title, Message, Box } from '../../components/Foundation'

type HeatmapProps = {
  width: number
  height: number
}

export const HeatmapDemo = ({ width, height }: HeatmapProps): JSX.Element => {
  return (
    <>
      <Box>
        <Title>Heatmap basic: color / tooltop / x & y coordinate</Title>
        <Message>
          When you want to show 3 different information in single chart, heatmap
          might be a good choice. It's because you can set x and y coordindate
          in custom label. Also in each position you can show third information
        </Message>
        <HeatmapToolTip data={data} width={width} height={height} />
      </Box>
      <Box>
        <Title>Color legend</Title>
        <Message>
          For better user experience, you can use color legend that user can
          understand better
        </Message>
        <ContinuousColorLegend />
      </Box>
      <Box>
        <Title>Heatmap with Color legend</Title>
        <Message>
          The most ideal way to visualize using a heat map is not just to
          visualize the heat map, but to show it with color legend. When working
          in that way, users can grasp information the easiest and fastest.
        </Message>
        <HeatmapWithLegend width={width} height={height} data={legendData} />
      </Box>
    </>
  )
}

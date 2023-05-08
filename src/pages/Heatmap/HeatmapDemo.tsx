import {FC} from 'react'
import {HeatmapToolTip} from './HeatmapTooltip/HeatmapTooltip'
import {Box, Paragraph, Subtitle} from '../../components'
import {ContinuousColorLegend} from '.'
import {HeatmapWithLegend} from './HeatmapWithLegend/HeatmapWithLegend'

type HeatmapProps = {
  width: number
  height: number
}

export const HeatmapDemo: FC<HeatmapProps> = ({width, height}): JSX.Element => {
  return (
    <>
      <Box>
        <Subtitle>Heatmap basic: color / tooltop / x & y coordinate</Subtitle>
        <Paragraph>
          When you want to show 3 different information in single chart, heatmap might be
          a good choice. It's because you can set x and y coordindate in custom label.
          Also in each position you can show third information
        </Paragraph>
        <HeatmapToolTip width={width} height={height} />
      </Box>
      <Box>
        <Subtitle>Color legend</Subtitle>
        <Paragraph>
          For better user experience, you can use color legend that user can understand
          better
        </Paragraph>
        <ContinuousColorLegend />
      </Box>
      <Box>
        <Subtitle>Heatmap with Color legend</Subtitle>
        <Paragraph>
          The most ideal way to visualize using a heat map is not just to visualize the
          heat map, but to show it with color legend. When working in that way, users can
          grasp information the easiest and fastest.
        </Paragraph>
        <HeatmapWithLegend width={width} height={height} />
      </Box>
    </>
  )
}

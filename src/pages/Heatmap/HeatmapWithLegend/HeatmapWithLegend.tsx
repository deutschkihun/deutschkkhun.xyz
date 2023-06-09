import {FC, useState} from 'react'
import {Renderer} from './Renderer'
import {Tooltip} from './Tooltip'
import {COLOR_LEGEND_HEIGHT} from './constant'
import {ColorLegend} from './ColorLegend'
import * as d3 from 'd3'
import {data} from './data'

type HeatmapProps = {
  width: number
  height: number
}

type InteractionData = {
  xLabel: string
  yLabel: string
  xPos: number
  yPos: number
  value: number | null
}

export const HeatmapWithLegend: FC<HeatmapProps> = ({width, height}): JSX.Element => {
  const [hoveredCell, setHoveredCell] = useState<InteractionData | null>(null)

  const [min = 0, max = 0] = d3.extent(data.map(d => d.value))

  const colorScale = d3
    .scaleLinear<string>()
    .domain([min, max])
    .range(['#668000', '#F8FFDE'])

  return (
    <div style={{position: 'relative'}}>
      <Renderer
        width={width}
        height={height}
        data={data}
        setHoveredCell={setHoveredCell}
      />
      <Tooltip
        interactionData={hoveredCell}
        width={width}
        height={height - COLOR_LEGEND_HEIGHT}
      />
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <ColorLegend
          height={COLOR_LEGEND_HEIGHT}
          width={600}
          colorScale={colorScale}
          interactionData={hoveredCell}
        />
      </div>
    </div>
  )
}

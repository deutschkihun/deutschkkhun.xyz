import {FC, useState} from 'react'
import {Renderer} from './Renderer'
import {Tooltip} from './Tooltip'
import {data} from './data'

type HeatmapProps = {
  width: number
  height: number
}

export type InteractionData = {
  xLabel: string
  yLabel: string
  xPos: number
  yPos: number
  value: number
}

export const HeatmapToolTip: FC<HeatmapProps> = ({width, height}): JSX.Element => {
  const [hoveredCell, setHoveredCell] = useState<InteractionData | null>(null)

  return (
    <>
      <div style={{position: 'relative', width: '100%'}}>
        <Renderer
          width={width}
          height={height}
          data={data}
          setHoveredCell={setHoveredCell}
        />
        <Tooltip interactionData={hoveredCell} width={width} height={height} />
      </div>
    </>
  )
}

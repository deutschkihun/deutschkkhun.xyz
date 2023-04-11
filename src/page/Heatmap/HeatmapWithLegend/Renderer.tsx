import { useMemo } from 'react'
import * as d3 from 'd3'
import { InteractionData } from '../HeatmapTooltip'
import { useRecoilValue } from 'recoil'
import { modeState } from '../../../recoil/mode'

const MARGIN = { top: 10, right: 50, bottom: 30, left: 50 }

type RendererProps = {
  width: number
  height: number
  data: { x: string; y: string; value: number }[]
  setHoveredCell: (hoveredCell: InteractionData | null) => void
}

export const Renderer = ({
  width,
  height,
  data,
  setHoveredCell,
}: RendererProps): JSX.Element => {
  const mode = useRecoilValue(modeState)
  const boundsWidth = width - MARGIN.right - MARGIN.left
  const boundsHeight = height - MARGIN.top - MARGIN.bottom

  const allYGroups = useMemo(() => [...new Set(data.map((d) => d.y))], [data])
  const allXGroups = useMemo(() => [...new Set(data.map((d) => d.x))], [data])

  const [min = 0, max = 0] = d3.extent(data.map((d) => d.value)) // extent can return [undefined, undefined], default to [0,0] to fix types
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .range([0, boundsWidth])
      .domain(allXGroups)
      .padding(0.01)
  }, [allXGroups, boundsWidth])

  const yScale = useMemo(() => {
    return d3
      .scaleBand()
      .range([boundsHeight, 0])
      .domain(allYGroups)
      .padding(0.01)
  }, [allYGroups, boundsHeight])

  const colorScale = d3
    .scaleLinear<string>()
    .domain([min, max])
    .range(['#668000', '#FFF9DE'])

  // Build the rectangles
  const allShapes = data.map((d, i) => {
    const x = xScale(d.x)
    const y = yScale(d.y)

    if (d.value === null || !x || !y) {
      // eslint-disable-next-line array-callback-return
      return
    }

    return (
      <rect
        key={i}
        r={4}
        x={xScale(d.x)}
        y={yScale(d.y)}
        width={xScale.bandwidth()}
        height={yScale.bandwidth()}
        opacity={1}
        fill={colorScale(d.value)}
        rx={5}
        stroke={'white'}
        onMouseEnter={(e) => {
          setHoveredCell({
            xLabel: 'group ' + d.x,
            yLabel: 'group ' + d.y,
            xPos: x + xScale.bandwidth() + MARGIN.left,
            yPos: y + xScale.bandwidth() / 2 + MARGIN.top,
            value: Math.round(d.value * 100) / 100,
          })
        }}
        onMouseLeave={() => setHoveredCell(null)}
        cursor="pointer"
      />
    )
  })

  const xLabels = allXGroups.map((name, i) => {
    const x = xScale(name)

    if (!x) {
      return null
    }

    return (
      <text
        key={i}
        x={x + xScale.bandwidth() / 2}
        y={boundsHeight + 10}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={mode === 'light-mode' ? 'black' : 'white'}
        fontSize={10}
      >
        {name}
      </text>
    )
  })

  const yLabels = allYGroups.map((name, i) => {
    const y = yScale(name)

    if (!y) {
      return null
    }

    return (
      <text
        key={i}
        x={-5}
        y={y + yScale.bandwidth() / 2}
        textAnchor="end"
        dominantBaseline="middle"
        fill={mode === 'light-mode' ? 'black' : 'white'}
        fontSize={10}
      >
        {name}
      </text>
    )
  })

  return (
    <svg
      width={width}
      height={height}
      style={{ display: 'flex', margin: '0 auto' }}
    >
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
      >
        {allShapes}
        {xLabels}
        {yLabels}
      </g>
    </svg>
  )
}

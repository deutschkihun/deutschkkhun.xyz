import { data } from './data'
import { StackedBarplot } from './StackedBarplot'

export const VerticalStackedBarplot = ({ width, height }) => (
  <StackedBarplot data={data} width={width} height={height} />
)

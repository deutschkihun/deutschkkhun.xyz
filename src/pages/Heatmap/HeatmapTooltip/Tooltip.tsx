import {InteractionData} from '../HeatmapTooltip/HeatmapTooltip'
import styles from './tooltip.module.css'

type TooltipProps = {
  interactionData: InteractionData | null
  width: number
  height: number
}

export const Tooltip = ({interactionData, width, height}: TooltipProps): JSX.Element => {
  if (!interactionData) {
    return <></>
  }

  return (
    <div
      style={{
        width,
        height,
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none'
      }}>
      <div
        className={styles.tooltip}
        style={{
          position: 'absolute',
          left: interactionData.xPos - 50,
          top: interactionData.yPos
        }}>
        <TooltipRow label={'x'} value={interactionData.xLabel} />
        <TooltipRow label={'y'} value={interactionData.yLabel} />
        <TooltipRow label={'value'} value={String(interactionData.value)} />
      </div>
    </div>
  )
}

type TooltipRowProps = {
  label: string
  value: string
}

const TooltipRow = ({label, value}: TooltipRowProps) => (
  <div>
    <b>{label}</b>
    <span>: </span>
    <span>{value}</span>
  </div>
)

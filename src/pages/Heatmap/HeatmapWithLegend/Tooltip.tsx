import styles from './tooltip.module.css'
import {InteractionData} from './type'

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
          left: interactionData.xPos,
          top: interactionData.yPos
        }}>
        <span>{interactionData.yLabel}</span>
        <br />
        <span>{interactionData.xLabel}</span>
        <span>: </span>
        <b>{interactionData.value}</b>
      </div>
    </div>
  )
}

export type InteractionData = {
  xPos: number
  yPos: number
  name: string
}

type TooltipProps = {
  interactionData: InteractionData | null
}

export const Tooltip = ({interactionData}: TooltipProps): JSX.Element => {
  if (!interactionData) {
    return <></>
  }

  return (
    <div
      className="absolute px-2 py-1 ml-4 text-sm text-white transform -translate-y-1/2 bg-black rounded-md bg-opacity-80"
      style={{
        left: interactionData.xPos,
        top: interactionData.yPos
      }}>
      {interactionData.name}
    </div>
  )
}

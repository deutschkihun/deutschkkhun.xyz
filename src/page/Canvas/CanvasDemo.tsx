import {useRef, useEffect} from 'react'
import {
  YAXIS_PADDING,
  XAXIS_PADDING,
  MAX_VALUE,
  Y_TICK_COUNT,
  TOP_PADDING,
  DURATION,
  EX_TEXT
} from './constant'

export const CanvasDemo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const endTime = Date.now()
  const startTime = endTime - DURATION
  useEffect(() => {
    const canvas = canvasRef?.current
    const context = canvas?.getContext('2d')
    const canvasWidth = canvas?.clientWidth as number
    const canvasHeight = canvas?.clientHeight as number
    const chartWidth = canvasWidth - YAXIS_PADDING
    const chartHeight = canvasHeight - XAXIS_PADDING - TOP_PADDING
    const xFormatWidth = context?.measureText(EX_TEXT).width
    const xxTimeInterval = setXInterval(chartWidth, xFormatWidth)
    drawiChart(
      context,
      canvasWidth,
      canvasHeight,
      chartWidth,
      chartHeight,
      xxTimeInterval
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setXInterval = (chartWidth, xFormatWidth) => {
    let xPoint = 0
    let timeInterval = 1000
    while (true) {
      xPoint = (timeInterval / DURATION) * chartWidth
      if (xPoint > xFormatWidth) {
        break
      }
      timeInterval *= 2
    }
    return timeInterval
  }

  // 차트를 그리는 함수
  const drawiChart = (
    ctx,
    canvasWidth,
    canvasHeight,
    chartWidth,
    charHeight,
    xTimeInterval
  ) => {
    ctx.beginPath()
    ctx.moveTo(YAXIS_PADDING, TOP_PADDING)
    ctx.lineTo(YAXIS_PADDING, charHeight + TOP_PADDING)

    const yInterval = MAX_VALUE / (Y_TICK_COUNT - 1)
    ctx.textAlign = 'right'
    ctx.textBaseline = 'middle'
    for (let i = 0; i < Y_TICK_COUNT; i++) {
      const value = i * yInterval
      const yPoint = TOP_PADDING + charHeight - (value / MAX_VALUE) * charHeight
      ctx.fillText(value, YAXIS_PADDING - 6, yPoint)
    }

    // draw XAXIS
    ctx.lineTo(canvasWidth, charHeight + TOP_PADDING)
    ctx.stroke()

    let currentTime = startTime - (startTime % xTimeInterval)
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    console.log(currentTime, endTime, xTimeInterval)
    while (currentTime < endTime + xTimeInterval) {
      const xPoint = ((currentTime - startTime) / DURATION) * chartWidth
      const date = new Date(currentTime)
      const text = date.getMinutes() + ':' + date.getSeconds()

      ctx.fillText(text, xPoint, charHeight + TOP_PADDING + 4)
      currentTime += xTimeInterval
    }
  }

  return <canvas ref={canvasRef} id="lineChart" width="400px" height="300px"></canvas>
}

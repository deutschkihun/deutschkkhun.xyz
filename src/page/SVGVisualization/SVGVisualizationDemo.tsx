import {useRef} from 'react'
import {SVGBasic} from './SVGBasic'
import {SVGD3Circle} from './SVGD3Circle'
import {refreshHandler} from '../../helper/refreshHandler'
import {SVGD3CircleAdvance} from './SVGD3CircleAdvance'
import {OlympicFlag} from './OlympicFlag'
import {Face} from './Face'
import {SVGOnMouse} from './SVGOnMouse'
import {SVGOnMouseAdvance} from './SVGOnMouseAdvance'
import {Button as RenderButton} from '@mui/material'
import {Box, Paragraph, Subtitle} from '../../components'

export const SVGVisualizationDemo = (): JSX.Element => {
  const SVGD3CircleRef = useRef(null)
  const SVGD3CircleAdvanceRef = useRef(null)
  const FaceRef = useRef(null)
  const width = 160
  const height = 160

  return (
    <>
      <SVGBasic />
      <Box>
        <Subtitle>SVG with D3: circle</Subtitle>
        <RenderButton
          sx={{m: 'auto', display: 'block', width: '30%'}}
          variant="contained"
          onClick={() =>
            refreshHandler(
              <SVGD3Circle
                width={width / 4}
                height={height / 4}
                centerX={width / 8}
                centerY={width / 8}
                radius={20}
                opacity={0.6}
                refresh
              />,
              SVGD3CircleRef
            )
          }>
          Click me
        </RenderButton>
        <div ref={SVGD3CircleRef}>
          <SVGD3Circle
            width={width / 4}
            height={height / 4}
            centerX={width / 8}
            centerY={width / 8}
            radius={20}
            opacity={0.6}
            refresh={false}
          />
        </div>
      </Box>
      <Box>
        <Subtitle> SVG with D3: half circle</Subtitle>
        <RenderButton
          sx={{m: 'auto', display: 'block', width: '30%', mb: 3}}
          variant="contained"
          onClick={() =>
            refreshHandler(
              <SVGD3CircleAdvance
                width={width / 2}
                height={height / 2}
                centerX={width / 32}
                centerY={width / 32}
                radius={40}
              />,
              SVGD3CircleAdvanceRef
            )
          }>
          Click me
        </RenderButton>
        <div ref={SVGD3CircleAdvanceRef}>
          <SVGD3CircleAdvance
            width={width / 2}
            height={height / 2}
            centerX={width / 32}
            centerY={width / 32}
            radius={40}
          />
        </div>
      </Box>
      <Box>
        <Subtitle>Ex.1) Olympic flag</Subtitle>
        <OlympicFlag
          width={400}
          height={230}
          centerX={-35}
          centerY={-35}
          radius={60}
          strokeWidth={4}
        />
      </Box>
      <Box>
        <Subtitle>Ex.2) Randomly generated smile Emojis</Subtitle>
        <RenderButton
          sx={{m: 'auto', display: 'block', width: '30%', mb: 3}}
          variant="contained"
          onClick={() =>
            refreshHandler(
              <Face
                width={width}
                height={height}
                centerX={width / 2}
                centerY={height / 2}
                type="random"
              />,
              FaceRef
            )
          }>
          Click me
        </RenderButton>
        <div ref={FaceRef}>
          <Face
            width={width}
            height={height}
            centerX={width / 2}
            centerY={height / 2}
            type="random"
          />
        </div>
      </Box>
      <Box>
        <Subtitle>Ex.3) SVG Circle that follows the mouse cursor</Subtitle>
        <Paragraph>
          Svg circle and reaction on mouse event can be used to create interactions that
          follow the cursor.
        </Paragraph>
        <SVGOnMouse width={width} height={height} radius={10} />
      </Box>
      <Box>
        <Subtitle>Ex.4) SVG mouse cursor with pattern effect</Subtitle>
        <Paragraph>
          svg mouse cursor and unique svg visualization combining mask effects and pattern
          effects
        </Paragraph>
        <SVGOnMouseAdvance width={width} height={height} />
      </Box>
    </>
  )
}

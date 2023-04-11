import { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Title, Message, Box } from '../../components/Foundation'

const ViewBox = (): JSX.Element => {
  const [viewbox, setViewbox] = useState<string | number>(500)

  return (
    <Box>
      <Title>SVG basic: view-box</Title>
      <Message>
        viewBox=&quot;`min-x min-y width height&quot;`, but the unit of width
        and height are not pixel. Controlling width and height of view-box, we
        can zoom-in and zoom-out of svg element.
      </Message>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup
              onChange={(e) => setViewbox(e.target.value)}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              {Array.from({ length: 5 }, (_, k) => 500 * (k + 1)).map(
                (m, i) => (
                  <FormControlLabel
                    key={i}
                    value={m}
                    control={<Radio />}
                    label={`viewBox="0 0 ${m} 500"`}
                  />
                )
              )}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <svg viewBox={`0 0 ${viewbox} 500`} style={{ background: '#ddd' }}>
        <rect x="0" y="0" width="250" height="500" />
      </svg>
      <Message>
        viewBox is an attribute that allows you to enlarge or reduce the size of
        an svg element and adjust its position in the area where the svg element
        is drawn. You can draw the svg element on the screen without the viewBox
        attribute. However, even if the size of the screen changes, the size of
        the svg element is fixed, showing a vulnerability to the reaction type.
        When the viewBox attribute is used, the size of the svg element is
        automatically adjusted according to the size of the screen. For this
        reason, viewBox is an essential for responseive web development.
      </Message>
    </Box>
  )
}

export default ViewBox

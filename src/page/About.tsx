import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { Title } from '../components/Foundation'
import { useSetRecoilState } from 'recoil'
import { toggleState } from '../recoil/toggle'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

export const About = (): JSX.Element => {
  const setToggle = useSetRecoilState(toggleState)
  return (
    <aside onMouseOver={() => setToggle(false)} className="grid">
      <Title>
        <FormattedMessage id="AboutTitle" />
      </Title>
      <Card
        sx={{
          minWidth: '60vw',
          minHeight: 400,
          m: 'auto',
          mb: 10,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Superb AI
          </Typography>
          <Typography variant="h5" component="div">
            Frontend Developer
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            10.2022 - 01.2023
          </Typography>
          <Typography variant="body2">
            Seoul, South Korea
            <br />
            R&D Department
            <br />
            React / Typescript / Next.js / React-Query / D3.js / Node.js
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            {bull} <FormattedMessage id="JD-col1-1" />
          </Typography>
          <Typography variant="body1" component="div">
            {bull} <FormattedMessage id="JD-col1-2" />
          </Typography>
          <Typography variant="body1" component="div">
            {bull} <FormattedMessage id="JD-col1-3" />
          </Typography>
          <Typography variant="body1" component="div">
            {bull} <FormattedMessage id="JD-col1-4" />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://superb-ai.com/ko/"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          minWidth: '60vw',
          minHeight: 400,
          m: 'auto',
          mb: 10,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            PACE Telematics
          </Typography>
          <Typography variant="h5" component="div">
            Frontend Developer
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            05.2021 - 05.2022
          </Typography>
          <Typography variant="body2">
            Karlsruhe, Germany
            <br />
            R&D Department
            <br />
            React / Typescript / Node.js
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            {bull} <FormattedMessage id="JD-col2-1" />
          </Typography>
          <Typography variant="body1" component="div">
            {bull} <FormattedMessage id="JD-col2-2" />
          </Typography>
          <Typography variant="body1" component="div">
            {bull} <FormattedMessage id="JD-col2-3" />
          </Typography>
          <Typography variant="body1" component="div">
            {bull} <FormattedMessage id="JD-col2-4" />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a target="_blank" rel="noreferrer" href="https://www.pace.car/en/">
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          minWidth: '60vw',
          minHeight: 400,
          m: 'auto',
          mb: 10,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Vayu-software
          </Typography>
          <Typography variant="h5" component="div">
            Frontend Developer
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            12.2020 - 05.2021
          </Typography>
          <Typography variant="body2">
            Heidelberg, Germnay
            <br />
            R&D Department
            <br />
            React / Typescript / Node.js
          </Typography>
          <br />
          <Typography variant="body1" component="div">
            {bull} <FormattedMessage id="JD-col3-1" />
          </Typography>
          <Typography variant="body1" component="div">
            {bull} <FormattedMessage id="JD-col3-2" />
          </Typography>
          <Typography variant="body1" component="div">
            {bull} <FormattedMessage id="JD-col3-3" />
          </Typography>
          <Typography variant="body1" component="div">
            {bull} <FormattedMessage id="JD-col3-4" />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://vayu-software.de/"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
    </aside>
  )
}

import {Card, CardActions, CardContent, Button} from '@mui/material'
import {FormattedMessage} from 'react-intl'
import {Subtitle, Title, Typography, Paragraph} from '../components'

export const About = (): JSX.Element => {
  return (
    <aside className="grid">
      <Title children={<FormattedMessage id="AboutTitle" />} />
      <Card
        sx={{
          minWidth: '60vw',
          minHeight: 400,
          m: 'auto',
          mb: 10
        }}>
        <CardContent>
          <Subtitle>Superb AI</Subtitle>
          <Paragraph>Frontend Developer</Paragraph>
          <Paragraph>10.2022 - 01.2023</Paragraph>
          <Paragraph
            children={
              <>
                {' - '}
                Seoul, South Korea
                <br />
                R&D Department
                <br />
                React / Typescript / Next.js / React-Query / D3.js / Node.js
              </>
            }
          />
          <br />
          <Typography children={<FormattedMessage id="JD-col1-1" />} />
          <Typography children={<FormattedMessage id="JD-col1-2" />} />
          <Typography children={<FormattedMessage id="JD-col1-3" />} />
          <Typography children={<FormattedMessage id="JD-col1-4" />} />
        </CardContent>
        <CardActions>
          <Button size="small">
            <a target="_blank" rel="noreferrer" href="https://superb-ai.com/ko/">
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
          mb: 10
        }}>
        <CardContent>
          <Subtitle children="PACE Telematics" />
          <Paragraph children="Frontend Developer" />
          <Paragraph children="05.2021 - 05.2022" />
          <Paragraph
            children={
              <>
                Karlsruhe, Germany
                <br />
                R&D Department
                <br />
                React / Typescript / Node.js
              </>
            }
          />
          <br />
          <Typography children={<FormattedMessage id="JD-col2-1" />} />
          <Typography children={<FormattedMessage id="JD-col2-2" />} />
          <Typography children={<FormattedMessage id="JD-col2-3" />} />
          <Typography children={<FormattedMessage id="JD-col2-4" />} />
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
          mb: 10
        }}>
        <CardContent>
          <Subtitle children="Vayu-software" />
          <Typography children="Frontend Developer" />
          <Typography children="12.2020 - 05.2021" />
          <Typography
            children={
              <>
                Heidelberg, Germnay
                <br />
                R&D Department
                <br />
                React / Typescript / Node.js
              </>
            }
          />
          <br />
          <Typography children={<FormattedMessage id="JD-col3-1" />} />
          <Typography children={<FormattedMessage id="JD-col3-2" />} />
          <Typography children={<FormattedMessage id="JD-col3-3" />} />
          <Typography children={<FormattedMessage id="JD-col3-4" />} />
        </CardContent>
        <CardActions>
          <Button size="small">
            <a target="_blank" rel="noreferrer" href="https://vayu-software.de/">
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
    </aside>
  )
}

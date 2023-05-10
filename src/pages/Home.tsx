import {FormattedMessage} from 'react-intl'
import * as icons from '../assets'
import styled from 'styled-components'
import {Title, Splash} from '../components'

const Intro = styled.div`
  max-width: 70vw;
  margin: auto;
  display: block;
  padding: 3rem 0;

  h1 {
    font-size: 80px;
  }

  h2 {
    font-size: 50px;
  }

  @media screen and (min-width: 1045px) {
    p {
      font-size: 20px;
    }

    h1 {
      font-size: 110px;
      text-align: center;
    }
  }
`

export const AnimationChar = styled.h1`
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: 200% auto;
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  animation: textclip 3s linear infinite;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`

export const Home = (): JSX.Element => {
  const keys = Object.keys(icons)

  return (
    <aside>
      <Splash />
      <Intro>
        <Title>
          <FormattedMessage id="HomeTitle" />
        </Title>
        <AnimationChar>
          <FormattedMessage id="HomeName" />
        </AnimationChar>
      </Intro>
      <Intro>
        <Title />

        {Array.from({length: keys.length}, (_, k) => (
          <div className="hero">
            <div
              className={`flex-col hero-content lg:flex-row-${
                k % 2 === 1 ? 'reverse' : ''
              }`}>
              <img
                alt="img"
                src={icons[keys[k]]}
                className="max-w-sm m-auto rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                  excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                  id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        ))}
      </Intro>
    </aside>
  )
}

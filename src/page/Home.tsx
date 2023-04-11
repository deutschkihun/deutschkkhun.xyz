import { FormattedMessage } from 'react-intl'
import { Splash } from './Splash'
import styled from 'styled-components'
import data from '../assets/data.svg'
import language from '../assets/language.svg'
import coding from '../assets/coding.svg'
import learning from '../assets/learning.svg'
import { useSetRecoilState } from 'recoil'
import { toggleState } from '../recoil/toggle'

const SilderContainer = styled.div`
  padding: 1rem;
  border: 0.2rem solid;
  width: 70vw;
  margin: auto;
  border-radius: 8px;
  margin-bottom: 3rem;
`

const Silder = styled.div`
  padding: 1rem;
  border: 0.2rem solid;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 420px;
  justify-items: center;

  svg {
    fill: black;
  }

  img {
    width: 200px;
    margin: auto;
  }

  h2 {
    margin: auto;
  }

  @media screen and (max-width: 1045px) {
    display: block;
    text-align: center;

    h2 {
      padding: 1rem 0;
      font-size: 30px !important;
    }

    img {
      min-height: 250px;
    }
  }

  @media screen and (max-width: 570px) {
    display: block;
    text-align: center;

    h2 {
      padding: 1rem 0;
      font-size: 20px !important;
    }

    img {
      width: 60%;
      min-height: 250px;
    }
  }
`

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
  const setToggle = useSetRecoilState(toggleState)
  const images = [coding, language, data, learning]

  return (
    <aside onMouseOver={() => setToggle(false)}>
      <Splash />
      <Intro>
        <h2>
          <FormattedMessage id="HomeTitle" />
        </h2>
        <AnimationChar>
          <FormattedMessage id="HomeName" />
        </AnimationChar>
      </Intro>
      <Intro>
        <h2 className="mb-3">
          <FormattedMessage id="HomeQuestion1" />
        </h2>
        {Array.from({ length: 4 }, (_, k) => (
          <SilderContainer className="reveal-container fade-bottom">
            <Silder>
              <img src={images[k]} alt="img" />
              <h2>
                <FormattedMessage id={`HomeAnswer1-${k + 1}`} />
              </h2>
            </Silder>
          </SilderContainer>
        ))}
      </Intro>
    </aside>
  )
}

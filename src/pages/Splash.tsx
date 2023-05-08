import {CSSProperties, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {useRecoilValue} from 'recoil'
import {languageState} from '../recoil/language'
import {modeState} from '../recoil/mode'

interface SplashProps {
  mode: string
}

type SplashType = {
  [key: string]: string | number
  '--i': number
}

type ExtendedCSSProperties = CSSProperties & SplashType

const Waviy = styled.div`
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  font-size: 100px;
  span {
    position: relative;
    display: inline-block;
    animation: waviy 1s infinite;
    animation-delay: calc(0.1s * var(--i));

    @media screen and (max-width: 680px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 300px) {
      font-size: 1.5rem;
    }
  }

  @keyframes waviy {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-20px);
    }
  }
`

const SplashContainer = styled.aside<SplashProps>`
  &.display-none {
    opacity: 0;
    z-index: -10;
    transition: all 1.5s;
  }
`

export default function Splash() {
  const ref = useRef<HTMLElement>(null)
  const mode = useRecoilValue(modeState)
  const lang = useRecoilValue(languageState)
  const locale = lang === 'en' ? 'WELCOME' : '환영합니다'
  const color = mode === 'light-mode' ? 'white' : 'black'

  useEffect(() => {
    setTimeout(() => {
      ref.current?.classList.add('display-none')
    }, 2500)
  })

  return (
    <SplashContainer
      className={`bg-${color} fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen`}
      mode={mode}
      ref={ref}>
      <Waviy>
        {locale.split('').map((m, k) => (
          <span key={k} style={{'--i': k + 1} as ExtendedCSSProperties}>
            {m}
          </span>
        ))}
      </Waviy>
    </SplashContainer>
  )
}

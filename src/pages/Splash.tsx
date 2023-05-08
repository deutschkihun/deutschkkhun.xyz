// import {CSSProperties, useEffect, useRef} from 'react'
// import styled from 'styled-components'
// import {useRecoilValue} from 'recoil'
// import {languageState} from '../recoil/language'
// import {modeState} from '../recoil/mode'

// type SplashType = {
//   [key: string]: string | number
//   '--i': number
// }

// type ExtendedCSSProperties = CSSProperties & SplashType

// const Waviy = styled.div`
//   position: relative;
//   -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
//   font-size: 100px;
//   span {
//     position: relative;
//     display: inline-block;
//     animation: waviy 1s infinite;
//     animation-delay: calc(0.1s * var(--i));

//     @media screen and (max-width: 680px) {
//       font-size: 3rem;
//     }

//     @media screen and (max-width: 300px) {
//       font-size: 1.5rem;
//     }
//   }

//   @keyframes waviy {
//     0%,
//     40%,
//     100% {
//       transform: translateY(0);
//     }
//     20% {
//       transform: translateY(-20px);
//     }
//   }
// `

// export default function Splash() {
//   const ref = useRef<HTMLElement>(null)
//   const mode = useRecoilValue(modeState)
//   const lang = useRecoilValue(languageState)
//   const locale = lang === 'en' ? 'WELCOME' : '환영합니다'
//   const color = mode === 'light-mode' ? 'slate' : 'black'

//   useEffect(() => {
//     setTimeout(() => {
//       ref.current?.classList.add(
//         'opacity-0',
//         '-z-10',
//         'transition-all',
//         'duration-1000',
//         'ease-in-out'
//       )
//     }, 2500)
//   })

//   return (
//     <aside
//       className={`fixed top-0 left-0 w-full h-full bg-${color}-50 bg-opacity-100 z-20 items-center justify-center flex`}
//       ref={ref}>
//       <Waviy>
//         {locale.split('').map((m, k) => (
//           <span key={k} style={{'--i': k + 1} as ExtendedCSSProperties}>
//             {m}
//           </span>
//         ))}
//       </Waviy>
//     </aside>
//   )
// }

import {CSSProperties, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {useRecoilValue} from 'recoil'
import {languageState} from '../recoil/language'
import {modeState} from '../recoil/mode'

interface SplashProps {
  mode: string
}

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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${p => (p.mode === 'light-mode' ? '#FFFAFA' : 'black')};
  color: ${p => (p.mode === 'light-mode' ? 'black' : '#FFFAFA')};
  opacity: 1;
  z-index: 999;
  justify-content: center;
  align-items: center;
  display: flex;

  &.display-none {
    opacity: 0;
    z-index: -10;
    transition: all 1.5s;
  }
`

type MyStyleType = {
  [key: string]: string | number
  '--i': number
}

type ExtendedCSSProperties = CSSProperties & MyStyleType

export const Splash = (): JSX.Element => {
  const ref = useRef<HTMLElement>(null)
  const mode = useRecoilValue(modeState)
  const lang = useRecoilValue(languageState)
  const locale = lang === 'en' ? 'WELCOME' : '환영합니다'

  useEffect(() => {
    setTimeout(() => {
      ref.current?.classList.add('display-none')
    }, 2500)
  })

  return (
    <SplashContainer mode={mode} ref={ref}>
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

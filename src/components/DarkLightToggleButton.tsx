import styled from 'styled-components'
import {modeState} from '../recoil/mode'
import {useRecoilState} from 'recoil'

const ToggleContainer = styled.div`
  max-height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .checkbox:checked + .label .blob {
    left: 0;
  }
  .checkbox:checked + .label {
    background-color: black;
  }

  .blob {
    position: absolute;
    left: 50%;
    width: 50%;
    height: 100%;
    background: rgb(169, 241, 243);
    border-radius: 50px;
    transition: 0.5s ease all;
  }
`

const ToggleLabel = styled.label`
  background-color: #6f7378;
  display: flex;
  height: 40px;
  border-radius: 50px;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 15px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  border: 2px solid black;

  .fa-moon {
    color: rgb(250, 250, 250);
  }

  .fa-sun {
    color: rgb(243, 188, 36);
  }
`

export const DarkLightToggleButton = (): JSX.Element => {
  const [mode, setMode] = useRecoilState(modeState)
  const onClickModeHandler = () => {
    const colorMode = mode === 'dark-mode' ? 'light-mode' : 'dark-mode'
    if (colorMode) {
      window.document.body.classList.remove(mode)
      window.document.body.classList.add(colorMode)
    }
    setMode(colorMode)
    localStorage.setItem('mode', colorMode)
  }

  return (
    <ToggleContainer>
      <input
        type="checkbox"
        className="checkbox"
        id="night-mode"
        checked={mode === 'dark-mode' ? false : true}
      />
      <ToggleLabel
        htmlFor="night-mode"
        className="label"
        onClick={() => onClickModeHandler()}>
        <i className="fas fa-sun" />
        <i className="fas fa-moon" />
        <div className="blob" />
      </ToggleLabel>
    </ToggleContainer>
  )
}

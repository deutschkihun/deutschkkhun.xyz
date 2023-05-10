import styled from 'styled-components'
import {useRef, useEffect} from 'react'
import {Languages, DarkLightToggleButton} from '.'
import {useRecoilState, useRecoilValue} from 'recoil'
import {modeState} from '../recoil/mode'
import {locationState, toggleState} from '../recoil/toggle'

interface SubMenuProps {
  isSubmenuOpen?: boolean | undefined
  mode?: string
}

export const SubMenuContainer = styled.aside<SubMenuProps>`
  background: #fff;
  box-shadow: ${p =>
    p.mode === 'dark-mode'
      ? '2px 5px 3px 0px rgba(255, 255, 255, 0.5)'
      : '2px 5px 3px 0px rgba(0, 0, 0, 0.5)'};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: ${p => (p.isSubmenuOpen ? 'block' : 'none')};
  padding: 1.5rem;
  border-radius: 0.25rem;
  transition: all 0.3s linear;
  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #fff;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const SubMenu = (): JSX.Element => {
  const mode = useRecoilValue(modeState)
  const [toggle, setToggle] = useRecoilState(toggleState)
  const location = useRecoilValue(locationState)
  const container = useRef<HTMLElement>(null)
  useEffect(() => {
    const subMenu = container.current
    subMenu && subMenu?.style.setProperty('left', `${location?.center}px`)
    subMenu && subMenu?.style.setProperty('top', `${location?.bottom}px`)
  }, [location])

  return (
    <SubMenuContainer
      mode={mode}
      isSubmenuOpen={toggle}
      ref={container}
      onMouseOver={() => setToggle(true)}>
      <div className="flex flex-wrap">
        <DarkLightToggleButton />
        <Languages />
      </div>
    </SubMenuContainer>
  )
}

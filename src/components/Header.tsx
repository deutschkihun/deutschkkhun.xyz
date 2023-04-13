import React from 'react'
import styled from 'styled-components'
import {FormattedMessage} from 'react-intl'
import {Link} from 'react-router-dom'
import {SubMenu, Sidebar} from '.'
import {Button} from '@mui/material'
import {useSetRecoilState} from 'recoil'
import {locationState, toggleState} from '../recoil/toggle'
export const HeaderComponent = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  padding: 32px 0;
  margin-bottom: 50px;
`

export const HeaderContainer = styled.div`
  max-width: 1200px;
  font-size: 1rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(10px, auto);
  grid-gap: 10px;
  place-items: center center;

  .fa-bars {
    display: none;
  }

  @media screen and (max-width: 1045px) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .fa-bars {
      padding-left: 1rem;
      font-size: 20px;
      display: flex;
    }

    .menu {
      display: none;
    }
  }
`

const HomeComponent = styled(Link)`
  grid-column: 2 / 5;
`

const AboutComponent = styled(Link)`
  grid-column: 9 / 10;
`

const ProjectComponent = styled(Link)`
  grid-column: 10 / 11;
`

export const TechBlogComponent = styled.a`
  grid-column: 11 / 12;
`

export const ComfortComponent = styled.a`
  color: inherit;
  grid-column: 5 / 7;
`

export const Header = (): JSX.Element => {
  const setToggle = useSetRecoilState(toggleState)
  const setLocation = useSetRecoilState(locationState)

  const onMouseOverHandler = (e: React.MouseEvent<HTMLElement>) => {
    setToggle(true)
    const tempBtn = e.currentTarget.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom
    setLocation({center, bottom})
  }

  return (
    <HeaderComponent>
      <HeaderContainer>
        <Sidebar />
        <HomeComponent to="/">
          <p>@deutschkihun</p>
        </HomeComponent>
        <ComfortComponent
          onMouseOver={onMouseOverHandler}
          onMouseOut={() => setToggle(false)}>
          <Button>Hover me</Button>
        </ComfortComponent>
        <SubMenu />
        <AboutComponent className="menu" to="/about">
          <FormattedMessage id="About" />
        </AboutComponent>
        <ProjectComponent className="menu" to="/project">
          <FormattedMessage id="Projects" />
        </ProjectComponent>
        <TechBlogComponent className="menu" href="https://blog-deutschkihun.vercel.app/">
          <FormattedMessage id="TechBlog" />
        </TechBlogComponent>
      </HeaderContainer>
    </HeaderComponent>
  )
}

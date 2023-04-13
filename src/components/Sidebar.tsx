import React, { useState } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

const SidebarContainer = styled.div`
  .open-sidebar {
    transform: translateX(0px);
  }

  .close-sidebar {
    transform: translateX(-300px);
  }

  #sidebar-list {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media screen and (min-width: 1046px) {
    display: none;
  }
`

const SidebarList = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  min-width: 150px;
  height: 100%;
  background: #6f7378;
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
`

const SidebarItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  font-size: 20px;
`

const SidebarMenu = styled.ul`
  a {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
  }
`

export const Sidebar = (): JSX.Element => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)

  return (
    <SidebarContainer>
      <i
        className={`${sideBarOpen ? 'fa fa-bars sidebar ' : 'fa fa-bars'}`}
        aria-hidden="true"
        onClick={() => setSideBarOpen(true)}
      />
      <SidebarList
        id="sidebar-list"
        className={`${sideBarOpen ? 'open-sidebar ' : 'close-sidebar'}`}
      >
        <SidebarItem>
          <i
            className="fa fa-times sidebar"
            aria-hidden="true"
            onClick={() => setSideBarOpen(false)}
          />
        </SidebarItem>
        <SidebarMenu>
          <li>
            <a href="/">
              <FormattedMessage id="Home" />
            </a>
          </li>
          <li>
            <a href="/about">
              <FormattedMessage id="About" />
            </a>
          </li>
          <li>
            <a href="/project">
              <FormattedMessage id="Projects" />
            </a>
          </li>
          <li>
            <a href="https://blog-deutschkihun.vercel.app/">
              <FormattedMessage id="TechBlog" />
            </a>
          </li>
        </SidebarMenu>
      </SidebarList>
    </SidebarContainer>
  )
}

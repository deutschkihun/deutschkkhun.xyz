import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { vizProject } from '../mock/project'
import { IconMaterial } from '../components/Advance/IconMaterial'
import { FormattedMessage } from 'react-intl'
import { Title } from '../components/Foundation'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { languageState } from '../recoil/language'
import { toggleState } from '../recoil/toggle'

export const Project = (): JSX.Element => {
  const navigate = useNavigate()
  const lang = useRecoilValue(languageState)
  const setToggle = useSetRecoilState(toggleState)

  const vizList = vizProject[lang as keyof typeof vizProject]

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    for (let i = 0; i < reveals.length; i++) {
      reveals[i].classList.add('active')
    }
  }, [vizList])

  return (
    <aside onMouseOver={() => setToggle(false)}>
      <Title>
        <FormattedMessage id="VizProjects" />
      </Title>
      <section className="p-3 max-w-7xl m-auto reveal fade-bottom">
        <ul
          className="grid gap-x-2 "
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, auto))',
          }}
        >
          {vizList.map(({ title, description, iconName, link }, i: number) => (
            <li
              className="mb-4 border-2 border-black"
              key={i}
              onClick={() => navigate(`/data-visualization/${link}`)}
            >
              {IconMaterial && <IconMaterial iconName={iconName} />}
              <div className="p-3">
                <strong className="border-b-2 border-indigo-500">
                  {title}
                </strong>
                <br />
                {description}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

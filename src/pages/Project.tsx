import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {mock} from './mock'
import {FormattedMessage} from 'react-intl'
import {useRecoilValue} from 'recoil'
import {languageState} from '../recoil/language'
import {Title, IconMaterial} from '../components'

export const Project = (): JSX.Element => {
  const navigate = useNavigate()
  const lang = useRecoilValue(languageState)

  const vizList = mock[lang as keyof typeof mock]

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    for (let i = 0; i < reveals.length; i++) {
      reveals[i].classList.add('active')
    }
  }, [vizList])

  return (
    <div className="min-h-[80vh]">
      <Title>
        <FormattedMessage id="ProjectList" />
      </Title>
      <section className="p-3 m-auto max-w-7xl reveal fade-bottom">
        <ul
          className="grid gap-x-2 "
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, auto))'
          }}>
          {vizList.map(({title, description, iconName, link}, i: number) => (
            <li
              className="mb-4 border-2 border-black"
              key={i}
              onClick={() => navigate(`/project/${link}`)}>
              {IconMaterial && <IconMaterial iconName={iconName} />}
              <div className="p-3">
                <strong className="border-b-2 border-indigo-500">{title}</strong>
                <br />
                {description}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

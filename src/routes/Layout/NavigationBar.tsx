import {FormattedMessage} from 'react-intl'
import {Icon, Link} from '../../components'
import {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../../store'
import * as LG from '../../store/languages'
import * as M from '../../store/mode'

export default function NavigationBar() {
  const temp = useSelector<AppState, LG.State>(({languages}) => languages)
  const mode = useSelector<AppState, M.State>(({mode}) => mode)
  const dispatch = useDispatch()
  const changeLanguageHandler = useCallback(
    (language: string) => () => {
      dispatch(LG.chanageLanguage(language))
    },
    [dispatch]
  )

  const changeModeHandler = useCallback(
    (mode: string) => () => {
      dispatch(M.changeMode(mode))
    },
    [dispatch]
  )

  return (
    <div className="navbar mb-14 ssm:justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="gap-1 normal-case btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="p-2 mt-3 overflow-y-auto bg-opacity-100 shadow-2xl menu menu-compact dropdown-content rounded-box w-52">
            <li>
              <Link className="mb-2" href="/">
                <FormattedMessage id="Home" />
              </Link>
            </li>
            <li>
              <Link className="mb-2" href="/about">
                <FormattedMessage id="About" />
              </Link>
            </li>
            <li>
              <Link className="mb-2" href="/project">
                <FormattedMessage id="Projects" />
              </Link>
            </li>
            <li>
              <Link className="mb-2" href="https://blog-deutschkihun.vercel.app">
                <FormattedMessage id="Blog" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="text-xl normal-case btn btn-ghost ssm:hidden" href="/">
          deutschkihun
        </a>
      </div>
      <div className="navbar-end">
        <div title="Change Language" className="dropdown dropdown-end">
          <div tabIndex={0} className="gap-1 normal-case btn btn-ghost">
            <svg
              className="inline-block fill-current w-7 h-7 md:h-5 md:w-5"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512">
              <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path>
              <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path>
            </svg>
            <svg
              width="12px"
              height="12px"
              className="w-3 h-3 ml-1 fill-current opacity-60 sm:inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048">
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <div className="w-56 mt-16 overflow-y-auto shadow-2xl dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px">
            <ul className="gap-1 p-3 menu menu-compact" tabIndex={0}>
              <li onClick={changeLanguageHandler('en')}>
                <button className={`flex ${temp === 'en' && 'active'}`}>
                  <img
                    loading="lazy"
                    width="20"
                    height="20"
                    alt="English"
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ec-1f1e7.svg"
                  />
                  <span className="flex justify-between flex-1">English </span>
                </button>
              </li>
              <li onClick={changeLanguageHandler('kr')}>
                <button className={`flex ${temp === 'kr' && 'active'}`}>
                  <img
                    loading="lazy"
                    width="20"
                    height="20"
                    alt="한국어"
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f0-1f1f7.svg"
                  />
                  <span className="flex justify-between flex-1">한국어 </span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="gap-1 normal-case btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block stroke-current w-7 h-7 md:h-6 md:w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
            </svg>
            <span className="md:inline">
              <FormattedMessage id="Theme" />
            </span>
            <svg
              width="12px"
              height="12px"
              className="w-3 h-3 ml-1 fill-current opacity-60 sm:inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048">
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <div className="mt-16 overflow-y-auto shadow-2xl dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 w-52">
            <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
              <button
                onClick={changeModeHandler('light')}
                className="outline-base-content overflow-hidden rounded-lg text-left [&amp;_svg]:visible"
                data-set-theme="light"
                data-act-class="[&amp;_svg]:visible">
                <div
                  data-theme="light"
                  className="w-full font-sans cursor-pointer bg-base-100 text-base-content">
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="flex items-center col-span-5 row-span-3 row-start-1 gap-2 px-4 py-3">
                      {mode === 'light' && (
                        <Icon name="check" className="btn-xs btn-ghost" />
                      )}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="invisible w-3 h-3">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                      </svg>
                      <div className="flex-grow text-sm font-bold">light</div>
                      <div className="flex flex-wrap flex-shrink-0 h-full gap-1">
                        <div className="w-2 rounded bg-primary"></div>
                        <div className="w-2 rounded bg-secondary"></div>
                        <div className="w-2 rounded bg-accent"></div>
                        <div className="w-2 rounded bg-neutral"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <button
                onClick={changeModeHandler('dark')}
                className="overflow-hidden text-left rounded-lg outline-base-content"
                data-set-theme="dark"
                data-act-class="[&amp;_svg]:visible">
                <div
                  data-theme="dark"
                  className="w-full font-sans cursor-pointer bg-base-100 text-base-content">
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="flex items-center col-span-5 row-span-3 row-start-1 gap-2 px-4 py-3">
                      {mode === 'dark' && (
                        <Icon name="check" className="btn-xs btn-ghost" />
                      )}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="invisible w-3 h-3">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                      </svg>
                      <div className="flex-grow text-sm font-bold">dark</div>
                      <div className="flex flex-wrap flex-shrink-0 h-full gap-1">
                        <div className="w-2 rounded bg-primary"></div>
                        <div className="w-2 rounded bg-secondary"></div>
                        <div className="w-2 rounded bg-accent"></div>
                        <div className="w-2 rounded bg-neutral"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

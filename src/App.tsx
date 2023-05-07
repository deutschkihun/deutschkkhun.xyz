import './index.css'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {useRecoilValue, useSetRecoilState} from 'recoil'
import {languageState} from './recoil/language'
import {toggleState} from './recoil/toggle'
import {Footers, Header} from './components'
import {
  Home,
  About,
  Project,
  DonutDemo,
  BarplotDemo,
  HeatmapDemo,
  ScatterplotDemo,
  ChartBasicDemo,
  SVGVisualizationDemo,
  LollipopDemo,
  DesignSystemDemo
} from './page'
import {IntlProvider} from 'react-intl'
import en from './lang/en.json'
import kr from './lang/kr.json'
import Board from './page/Kanban/Board'
import {Provider as ReduxProvider} from 'react-redux'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {useStore} from './store'

export default function App(): JSX.Element {
  const lang = useRecoilValue(languageState)
  const setToggle = useSetRecoilState(toggleState)
  const messages = {en: en, kr: kr}[lang]
  const store = useStore()

  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <IntlProvider locale={lang} messages={messages}>
            <main className="flex flex-col min-h-screen">
              <Header />
              <section className="flex-auto" onMouseOver={() => setToggle(false)}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/project" element={<Project />} />
                  <Route path="/project/svg" element={<SVGVisualizationDemo />} />
                  <Route path="/project/chart-basic" element={<ChartBasicDemo />} />
                  <Route
                    path="/project/scatterplot"
                    element={<ScatterplotDemo width={700} height={700} />}
                  />
                  <Route
                    path="/project/heatmap"
                    element={<HeatmapDemo width={1000} height={400} />}
                  />
                  <Route
                    path="/project/barplot"
                    element={<BarplotDemo width={1000} height={400} />}
                  />
                  <Route
                    path="/project/lollipop"
                    element={<LollipopDemo width={1000} height={400} />}
                  />
                  <Route path="/project/donut" element={<DonutDemo />} />
                  <Route path="/project/kanban" element={<Board />} />
                  <Route path="/project/design-system" element={<DesignSystemDemo />} />
                  <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
              </section>
              <Footers />
            </main>
          </IntlProvider>
        </BrowserRouter>
      </DndProvider>
    </ReduxProvider>
  )
}

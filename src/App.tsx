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
  KanbanDemo
} from './pages'
import {IntlProvider} from 'react-intl'
import * as lang from './lang'
import {Provider as ReduxProvider} from 'react-redux'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {useStore} from './store'

export default function App(): JSX.Element {
  const selected = useRecoilValue(languageState)
  const setToggle = useSetRecoilState(toggleState)
  const messages = lang[selected]
  const store = useStore()

  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <IntlProvider locale={selected} messages={messages}>
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
                  <Route path="/project/kanban" element={<KanbanDemo />} />
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

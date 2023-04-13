import './index.css'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {useRecoilValue, useSetRecoilState} from 'recoil'
import {languageState} from './recoil/language'
import {toggleState} from './recoil/toggle'
import {Footers, Header} from './components'
import {
  Home,
  Project,
  About,
  DonutDemo,
  BarplotDemo,
  HeatmapDemo,
  ScatterplotDemo,
  ChartBasicDemo,
  SVGVisualizationDemo,
  LollipopDemo
} from './page'
import {IntlProvider} from 'react-intl'
import en from './lang/en.json'
import kr from './lang/kr.json'

export default function App(): JSX.Element {
  const lang = useRecoilValue(languageState)
  const setToggle = useSetRecoilState(toggleState)
  const messages = {en: en, kr: kr}[lang]

  return (
    <BrowserRouter>
      <IntlProvider locale={lang} messages={messages}>
        <main className="flex flex-col min-h-screen">
          <Header />
          <section className="flex-auto" onMouseOver={() => setToggle(false)}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/data-visualization/svg" element={<SVGVisualizationDemo />} />
              <Route
                path="/data-visualization/chart-basic"
                element={<ChartBasicDemo />}
              />
              <Route
                path="/data-visualization/scatterplot"
                element={<ScatterplotDemo width={700} height={700} />}
              />
              <Route
                path="/data-visualization/heatmap"
                element={<HeatmapDemo width={1000} height={400} />}
              />
              <Route
                path="/data-visualization/barplot"
                element={<BarplotDemo width={1000} height={400} />}
              />
              <Route
                path="/data-visualization/lollipop"
                element={<LollipopDemo width={1000} height={400} />}
              />
              <Route path="/data-visualization/donut" element={<DonutDemo />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </section>
          <Footers />
        </main>
      </IntlProvider>
    </BrowserRouter>
  )
}

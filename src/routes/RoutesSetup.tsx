import {Routes, Route} from 'react-router-dom'
import {useRecoilValue} from 'recoil'
import {languageState} from '../recoil/language'
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
  KanbanDemo,
  KanbanCardDetail
} from '../pages'
import {IntlProvider} from 'react-intl'
import * as lang from '../lang'
import Layout from './Layout'
import NoMatch from './NoMatch'

export default function RoutesSetup() {
  const selected = useRecoilValue(languageState)
  const messages = lang[selected]
  return (
    <IntlProvider locale={selected} messages={messages}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
          <Route path="/project/kanban/:cardid" element={<KanbanCardDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </IntlProvider>
  )
}

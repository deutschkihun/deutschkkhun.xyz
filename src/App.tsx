import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider as ReduxProvider} from 'react-redux'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {useStore} from './store'
import RoutesSetup from './routes/RoutesSetup'

export default function App(): JSX.Element {
  const store = useStore()

  return (
    <ReduxProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <RoutesSetup />
        </BrowserRouter>
      </DndProvider>
    </ReduxProvider>
  )
}

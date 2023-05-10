import {useState} from 'react'
import {data, data2} from './data'
import {TransitionBarplot} from './TransitionBarplot'
import {Button} from '../../../components'

const BUTTONS_HEIGHT = 50

type BarplotDatasetTransitionProps = {
  width: number
  height: number
}

export const BarplotDatasetTransition = ({
  width,
  height
}: BarplotDatasetTransitionProps) => {
  const [selectedData, setSelectedData] = useState(data)

  return (
    <div>
      <div style={{height: BUTTONS_HEIGHT}}>
        <Button className="ml-4 btn-outline" onClick={() => setSelectedData(data)}>
          Data 1
        </Button>
        <Button className="ml-4 btn-outline" onClick={() => setSelectedData(data2)}>
          Data 2
        </Button>
      </div>

      <TransitionBarplot
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={selectedData}
      />
    </div>
  )
}

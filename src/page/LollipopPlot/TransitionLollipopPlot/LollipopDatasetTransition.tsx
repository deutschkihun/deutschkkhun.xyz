import { useState } from 'react'
import { data, data2 } from './data'
import { Dumbbell } from './Dumbbell'
import { Button } from '@mui/material'

const BUTTONS_HEIGHT = 50

type LollipopDatasetTransitionProps = {
  width: number
  height: number
}

const buttonStyle = {
  border: '1px solid #9a6fb0',
  borderRadius: '3px',
  padding: '4px 8px',
  margin: '10px 2px',
  fontSize: 14,
  color: '#9a6fb0',
  opacity: 0.7,
}

export const LollipopDatasetTransition = ({
  width,
  height,
}: LollipopDatasetTransitionProps) => {
  const [selectedData, setSelectedData] = useState(data)

  return (
    <div>
      <div style={{ height: BUTTONS_HEIGHT }}>
        <Button style={buttonStyle} onClick={() => setSelectedData(data)}>
          Data 1
        </Button>
        <Button style={buttonStyle} onClick={() => setSelectedData(data2)}>
          Data 2
        </Button>
      </div>

      <Dumbbell
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={selectedData}
      />
    </div>
  )
}

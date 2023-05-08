import type {FC, ChangeEvent} from 'react'
import {useState, useCallback} from 'react'
import * as D from '../../../data'
import {Icon} from '../../../components'

export type CreateListFromProps = {
  onCreateList: (uuid: string, title: string) => void
}

const CreateListForm: FC<CreateListFromProps> = ({onCreateList}) => {
  const [value, setValue] = useState<string>(D.randomTitleText())

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(_ => e.target.value)
  }, [])

  const addList = useCallback(() => {
    onCreateList(D.randomUUID(), value)
    setValue(_ => D.randomTitleText())
  }, [onCreateList, value])

  return (
    <div className="flex p-2">
      <input
        placeholder="title"
        value={value}
        onChange={onChange}
        className="input-xs input-bordered input input-primary"
      />
      <Icon
        name="add"
        onClick={addList}
        disabled={!value.length}
        className="ml-2 btn-primary btn-xs"
      />
    </div>
  )
}

export default CreateListForm

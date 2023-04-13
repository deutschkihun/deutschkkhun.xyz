import ReactDOM from 'react-dom'

export const refreshHandler = (
  element: any,
  ref: {current: ReactDOM.Container | null}
): void => {
  ReactDOM.render(element, ref.current)
}

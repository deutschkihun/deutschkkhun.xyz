import ReactDOM from 'react-dom'

export const refreshHandler = (
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  element: any,
  ref: {current: ReactDOM.Container | null}
): void => {
  ReactDOM.render(element, ref.current)
}

import {FormattedMessage} from 'react-intl'
import {Title} from '../components'

export const Blog = (): JSX.Element => {
  return (
    <div className="min-h-[80vh]">
      <Title>
        <FormattedMessage id="BlogList" />
      </Title>
      <section className="p-3 m-auto max-w-7xl reveal fade-bottom"></section>
    </div>
  )
}

import {FormattedMessage} from 'react-intl'
import * as icons from '../assets'
import {Title, Splash} from '../components'

export const Home = (): JSX.Element => {
  const keys = Object.keys(icons)

  return (
    <div>
      <Splash />
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <Title>
            <FormattedMessage id="HomeTitle" />
          </Title>
          <h1 className="font-extrabold text-center text-transparent text-7xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            <FormattedMessage id="HomeName" />
          </h1>
          {Array.from({length: keys.length}, (_, k) => (
            <div
              className={`bg-white ${
                k % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}>
              <img
                alt="img"
                src={icons[keys[k]]}
                className="max-w-sm m-auto rounded-lg shadow-2xl"
              />
              <div className="flex flex-col justify-center p-6">
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                  excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                  id nisi.
                </p>
                <button className="px-6 py-3 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

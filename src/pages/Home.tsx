import {FormattedMessage} from 'react-intl'
import * as icons from '../assets'
import {Title, Splash} from '../components'

export const Home = (): JSX.Element => {
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
          <div className="hero">
            <div className="flex-col gap-10 hero-content nxl:flex-row-reverse">
              <img
                alt="img"
                src={icons.CodingIcon}
                className="m-auto rounded-lg w-96 h-96"
              />
              <div>
                <h1 className="text-5xl font-bold">
                  <FormattedMessage id={`HomeAnswer1-1`} />
                </h1>
                <p className="py-6">
                  React, TypeScript, Next.js, TailwindCSS, Node.js, Express.js, Redux,
                  Recoil, React-Query, Storybook
                </p>
              </div>
            </div>
          </div>

          <div className="hero">
            <div className="flex-col gap-10 hero-content nxl:flex-row-reverse">
              <div>
                <h1 className="text-5xl font-bold">
                  <FormattedMessage id="HomeAnswer1-2" />
                </h1>
                <p className="py-6">English, German, Korean</p>
              </div>
              <img
                alt="img"
                src={icons.LanguageIcon}
                className="m-auto rounded-lg w-96 h-96"
              />
            </div>
          </div>

          <div className="hero">
            <div className="flex-col gap-10 hero-content nxl:flex-row-reverse">
              <img
                alt="img"
                src={icons.DataIcon}
                className="m-auto rounded-lg w-96 h-96"
              />
              <div>
                <h1 className="text-5xl font-bold">
                  <FormattedMessage id="HomeAnswer1-3" />
                </h1>
                <p className="py-6">D3.js, SVG, Canvas</p>
              </div>
            </div>
          </div>

          <div className="hero">
            <div className="flex-col gap-10 hero-content nxl:flex-row-reverse">
              <div>
                <h1 className="text-5xl font-bold">
                  <FormattedMessage id="HomeAnswer1-4" />
                </h1>
              </div>
              <img
                alt="img"
                src={icons.LearningIcon}
                className="m-auto rounded-lg w-96 h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

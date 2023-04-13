import {FormattedMessage} from 'react-intl'
import {Div, Link, Typography} from '../components'

export const Footers = (): JSX.Element => {
  return (
    <footer className="px-0 py-10 mt-3 overflow-hidden border-t-2 border-gray-700">
      <Div className="w-full px-10 py-0 m-auto max-w-7xl">
        <Div className="-ml-3 -mr-3">
          <Div className="w-1/4 pl-2 align-top inline-table sm:w-full">
            <Typography
              className="mb-5 underline sm:text-3xl"
              children={<FormattedMessage id="Menu" />}
            />
            <Link href="/about" children={<FormattedMessage id="About" />} />
            <Link href="/project" children={<FormattedMessage id="Projects" />} />
          </Div>
          <Div className="w-1/4 pl-2 align-top inline-table sm:w-full">
            <Typography
              className="mb-5 underline sm:text-3xl"
              children={<FormattedMessage id="MyApp" />}
            />
            <Link href="https://deutschkihun.xyz/" children="deutschkihun.xyz" />
            <Link
              href="https://blog-deutschkihun.vercel.app"
              children="deutschkihun/techblog"
            />
          </Div>
          <Div className="w-1/4 pl-2 align-top inline-table sm:w-full">
            <Typography
              className="mb-5 underline sm:text-3xl"
              children={<FormattedMessage id="Repository" />}
            />
            <Link
              href="https://www.npmjs.com/package/@deutschkihun/ui"
              children="DUI (Deutschkihun UI)"
            />
          </Div>
          <Div className="w-1/4 pl-2 align-top inline-table sm:w-full">
            <Typography
              className="mb-5 underline sm:text-3xl"
              children={<FormattedMessage id="Social Network" />}
            />
            <Link href="https://github.com/deutschkihun" children="Github" />
            <Link
              href="https://www.linkedin.com/in/kihun-kim-b35b73174/"
              children="Linkedin"
            />
          </Div>
        </Div>
        <Typography className="pt-5" children={<FormattedMessage id="Copyright" />} />
      </Div>
    </footer>
  )
}

import {FormattedMessage} from 'react-intl'

export const About = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-col w-full max-w-4xl m-auto gap-36 print:gap-10">
        <div className="flex flex-col gap-6 print:mt-10 print:gap-2">
          <h1 className="nxl:text-6xl">
            <span className="font-black">Kihun</span>
            <span className="font-extralight"> Kim</span>
          </h1>
          <h2 className="nxl:text-3xl">Web developer</h2>
        </div>
        <div className="flex flex-col gap-16 print:gap-6 lg:gap-6">
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:col-start-2 lg:col-span-3 lg:col-start-2">
              <h2 className="text-2xl font-bold text-blue-600">Experience</h2>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-black/60">Oct 2022 – Jan 2023</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">Front-end developer</h2>
              <span className="[&amp;_a]:underline">
                {' '}
                at
                <a href="https://superb-ai.com" target="_blank" rel="noreferrer nofollow">
                  {' '}
                  SuperbAI
                </a>
                (Seoul, South Korea)
              </span>
              <span className="[&amp;_a]:underline"></span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60">Full-time</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <FormattedMessage id="JD-col1" />
              <ul className="flex flex-col gap-1 mx-5 my-2 text-sm list-disc">
                <li className="[&amp;_a]:underline">
                  <FormattedMessage id="JD-col1-1" />
                </li>
                <li className="[&amp;_a]:underline">
                  <FormattedMessage id="JD-col1-2" />
                </li>
                <li className="[&amp;_a]:underline">
                  <FormattedMessage id="JD-col1-3" />
                </li>
              </ul>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-black/60">Jun 2021 – Sep 2022</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">Front-end developer</h2>
              <span className="[&amp;_a]:underline">
                {' '}
                at
                <a href="https://www.pace.car" target="_blank" rel="noreferrer nofollow">
                  {' '}
                  Pace Telematics
                </a>
                (Karlsruhe, Germany)
              </span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60">Full-time</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <FormattedMessage id="JD-col2" />
              <ul className="flex flex-col gap-1 mx-5 my-2 text-sm list-disc">
                <li className="[&amp;_a]:underline">
                  <FormattedMessage id="JD-col2-1" />
                </li>
                <li className="[&amp;_a]:underline">
                  <FormattedMessage id="JD-col2-2" />
                </li>
                <li className="[&amp;_a]:underline">
                  <FormattedMessage id="JD-col2-3" />
                </li>
              </ul>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-black/60">Dec 2020 – May 2021</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">Front-end developer</h2>
              <span className="[&amp;_a]:underline">
                {' '}
                at
                <a href="https://atbox.io/" target="_blank" rel="noreferrer nofollow">
                  {' '}
                  Vayu-software
                </a>
                (Heidelberg, Germany)
              </span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60">Full-time</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <FormattedMessage id="JD-col3" />
              <ul className="flex flex-col gap-1 mx-5 my-2 text-sm list-disc">
                <li className="[&amp;_a]:underline">
                  <FormattedMessage id="JD-col3-1" />
                </li>
                <li className="[&amp;_a]:underline">
                  <FormattedMessage id="JD-col3-2" />
                </li>
                <li className="[&amp;_a]:underline">
                  <FormattedMessage id="JD-col3-3" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 print:gap-6 lg:gap-6">
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:col-start-2 lg:col-span-3 lg:col-start-2">
              <h2 className="text-2xl font-bold text-blue-600">Education</h2>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-black/60">Sep 2017 – Oct 2020</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">B.Sc. in industrial engineering</h2>
              <span> Karlsruhe Institut für Technologie (KIT)</span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60"></span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <p>Karlsruhe, Germany</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 print:gap-6 lg:gap-6">
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
              <h2 className="text-2xl font-bold text-blue-600">Skills and Tech Stack</h2>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
              <ul className="flex flex-col gap-1 mx-5 my-2 text-sm list-disc">
                <li>JavaScript (also TypeScript) frameworks including React, Node.js</li>
                <li>JavaScript meta frameworks including Next.js</li>
                <li>CSS libraries and tools including Tailwind CSS, Styled-components</li>
                <li>React state management library including Redux, Recoil</li>
                <li>Asynchronous data management library including React-Query</li>
                <li>API design including RESTful API and GraphQL (with Apollo)</li>
                <li>Design tools like Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

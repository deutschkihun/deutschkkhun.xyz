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
              <span className="text-black/60">Dec 2020 – Present</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">Open-source contributor</h2>
              <span className="[&amp;_a]:underline"></span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60">Part-time</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <p>Created and actively maintaining open-source projects such as:</p>
              <ul className="flex flex-col gap-1 mx-5 my-2 text-sm list-disc">
                <li className="[&amp;_a]:underline">
                  <a
                    href="https://daisyui.com/"
                    target="_blank"
                    rel="noreferrer nofollow">
                    daisyui.com
                  </a>
                  : the most popular, free and open-source Tailwind CSS component library,
                  currently being used in 50,000+ open-source projects
                </li>
                <li className="[&amp;_a]:underline">
                  <a
                    href="https://lorem.space/"
                    target="_blank"
                    rel="noreferrer nofollow">
                    lorem.space
                  </a>
                  : placeholder image generator API
                </li>
                <li className="[&amp;_a]:underline">
                  <a
                    href="https://github.com/saadeghi/svelte-countup"
                    target="_blank"
                    rel="noreferrer nofollow">
                    svelte-countup
                  </a>
                  : component for Svelte.js
                </li>
                <li className="[&amp;_a]:underline">
                  <a
                    href="https://github.com/saadeghi/theme-change"
                    target="_blank"
                    rel="noreferrer nofollow">
                    theme-change
                  </a>
                  : JavaScript theme management package
                </li>
              </ul>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-black/60">Dec 2015 – Jun 2022</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">Product designer, web developer</h2>
              <span className="[&amp;_a]:underline">
                at
                <a href="https://manasky.com/" target="_blank" rel="noreferrer nofollow">
                  ManaSky
                </a>
                (Istanbul, Turkey)
              </span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60">Part-time</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <ul className="flex flex-col gap-1 mx-5 my-2 text-sm list-disc">
                <li className="[&amp;_a]:underline">
                  Designed and developed front-end projects using Svelte.js, Vue.js and
                  React.js frameworks
                </li>
                <li className="[&amp;_a]:underline">
                  Developed design system for a software development startup
                </li>
                <li className="[&amp;_a]:underline">
                  Delivered solutions to clients, startups and open-source projects from
                  Europe and North America
                </li>
                <li className="[&amp;_a]:underline">
                  Designed and developed a website for Ministry of Science, Research and
                  Technology of Iran to register, evaluate and publish tech inventions:{' '}
                  <a
                    href="https://irantechhub.ir/"
                    target="_blank"
                    rel="noreferrer nofollow">
                    irantechhub.ir
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-black/60">Apr 2014 – Jun 2022</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">
                Co-founder, product designer, front-end developer
              </h2>
              <span className="[&amp;_a]:underline">
                at
                <a href="https://atbox.io/" target="_blank" rel="noreferrer nofollow">
                  Atbox.io
                </a>
                (Rasht, Iran)
              </span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60">Self-employed</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <ul className="flex flex-col gap-1 mx-5 my-2 text-sm list-disc">
                <li className="[&amp;_a]:underline">
                  Developed Atbox.io since prototype, and it served more than 120k happy
                  users worldwide
                </li>
                <li className="[&amp;_a]:underline">
                  Responsible for UI/UX design and day to day improvements
                </li>
                <li className="[&amp;_a]:underline">
                  Designed and developed responsive web pages based on web design best
                  practices
                </li>
                <li className="[&amp;_a]:underline">
                  Provided marketing solutions for user base growth and customer
                  satisfaction that resulted in significant revenue
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

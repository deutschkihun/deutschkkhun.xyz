export const About = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-col w-full max-w-4xl m-auto gap-36 print:gap-10">
        <div className="flex flex-col gap-6 print:mt-10 print:gap-2">
          <h1 className="text-3xl md:text-6xl">
            <span className="font-black">Pouya</span>
            <span className="font-extralight">Saadeghi</span>
          </h1>
          <h2 className="md:text-xl">Product designer &amp; Front-end developer</h2>
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
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-black/60">Jan 2020 – Sep 2021</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">UI designer, front-end developer</h2>
              <span className="[&amp;_a]:underline">at Dowuz Startup (Rasht, Iran)</span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60">Full-time</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <ul className="flex flex-col gap-1 mx-5 my-2 text-sm list-disc">
                <li className="[&amp;_a]:underline">
                  Created user interface for a game service API platform
                </li>
                <li className="[&amp;_a]:underline">
                  Worked on the product website based on Laravel framework (PHP Blade
                  template language)
                </li>
                <li className="[&amp;_a]:underline">
                  Designed and developed React.js client for browser-based mini-games
                </li>
              </ul>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-black/60">Mar 2017 – Jan 2019</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">Web Developer</h2>
              <span className="[&amp;_a]:underline">
                at
                <a
                  href="https://markitdone.com/"
                  target="_blank"
                  rel="noreferrer nofollow">
                  Mark It Done
                </a>
                (Los Angeles, United States)
              </span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60">Remote contractor</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <ul className="flex flex-col gap-1 mx-5 my-2 text-sm list-disc">
                <li className="[&amp;_a]:underline">
                  Designed and developed WordPress theme for{' '}
                  <a
                    href="https://wymararesortandvillas.com/"
                    target="_blank"
                    rel="noreferrer nofollow">
                    wymararesortandvillas.com
                  </a>
                </li>
                <li className="[&amp;_a]:underline">
                  Designed and developed WordPress theme for{' '}
                  <a
                    href="https://evoeventsgroup.com/"
                    target="_blank"
                    rel="noreferrer nofollow">
                    evoeventsgroup.com
                  </a>
                </li>
                <li className="[&amp;_a]:underline">
                  Designed and developed Shopify theme for{' '}
                  <a
                    href="https://gjustagoods.com/"
                    target="_blank"
                    rel="noreferrer nofollow">
                    gjustagoods.com
                  </a>
                </li>
                <li className="[&amp;_a]:underline">
                  Fixed bugs from existing websites and enhanced code performance and
                  functionality
                </li>
                <li className="[&amp;_a]:underline">
                  Delivered more than 20 successful projects
                </li>
              </ul>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-black/60">Jun 2016 – Oct 2017</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">
                Co-founder, UI designer, front-end developer
              </h2>
              <span className="[&amp;_a]:underline">at Gametime.ir (Anzali, Iran)</span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60">Remote contractor</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <ul className="flex flex-col gap-1 mx-5 my-2 text-sm list-disc">
                <li className="[&amp;_a]:underline">
                  Designed a content-based android app about mobile game news that hit
                  more than 1k active users
                </li>
              </ul>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-black/60">Oct 2014 – Jan 2016</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">UI designer, Web developer</h2>
              <span className="[&amp;_a]:underline">at Arsess (Rasht, Iran)</span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60">Full-time</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <ul className="flex flex-col gap-1 mx-5 my-2 text-sm list-disc">
                <li className="[&amp;_a]:underline">
                  Redesigned and developed the company website (a hosting service named
                  Ugig)
                </li>
                <li className="[&amp;_a]:underline">
                  Designed and developed a payment gateway website named "Upal"
                </li>
                <li className="[&amp;_a]:underline">
                  Designed UI for an audiobook store Android app named "Gilibo"
                </li>
                <li className="[&amp;_a]:underline">
                  Worked on more than 50 web development projects as a front-end engineer
                </li>
                <li className="[&amp;_a]:underline">
                  Provided SEO and WordPress optimization services to web hosting clients
                </li>
              </ul>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-black/60">Jan 2009 – Dec 2015</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">Founder, Designer, Developer</h2>
              <span className="[&amp;_a]:underline">
                at Pasargad Graphic (Rasht, Iran)
              </span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60">Self-employed</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <ul className="flex flex-col gap-1 mx-5 my-2 text-sm list-disc">
                <li className="[&amp;_a]:underline">
                  Founded Pasargad Graphic website to provide design and web development
                  solutions
                </li>
                <li className="[&amp;_a]:underline">
                  Designed and developed more than 300 projects for small businesses
                </li>
                <li className="[&amp;_a]:underline">
                  Followed my passion in graphic design and coding and improved my skills
                  for 7 years in UI design, CSS, HTML and JavaScript
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
              <span className="text-black/60">Jan 2012 – Jan 2015</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">B.Sc. in Software Engineering</h2>
              <span>at Jabir ibn Hayyan University</span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60"></span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <p>Rasht, Iran</p>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-black/60">Jan 2009 – Jan 2012</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">
                Associate's degree in Software Engineering
              </h2>
              <span>at Shahid Chamran University</span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-black/60"></span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <p>Rasht, Iran</p>
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
                <li>
                  CSS libraries and tools including Tailwind CSS, Bootstrap, Sass, PostCSS
                </li>
                <li>JavaScript frameworks including Svelte, Vue.js, React, Alpine.js</li>
                <li>JavaScript meta frameworks including SvelteKit, Nuxt, Next.js</li>
                <li>Design tools like Figma, Sketch, etc.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 print:gap-6 lg:gap-6">
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
              <h2 className="text-2xl font-bold text-blue-600">Contact Info</h2>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
              <ul className="flex flex-col gap-1 mx-5 my-2 text-sm list-disc">
                <li className="[&amp;_a]:underline">
                  Email:{' '}
                  <a
                    href="mailto:pouya.saadeghi@gmail.com"
                    target="_blank"
                    rel="noreferrer nofollow">
                    pouya.saadeghi@gmail.com
                  </a>
                </li>
                <li className="[&amp;_a]:underline">
                  Linkedin:{' '}
                  <a
                    href="https://linkedin.com/in/saadeghi/"
                    target="_blank"
                    rel="noreferrer nofollow">
                    linkedin.com/in/saadeghi
                  </a>
                </li>
                <li className="[&amp;_a]:underline">
                  Github:{' '}
                  <a
                    href="https://github.com/saadeghi"
                    target="_blank"
                    rel="noreferrer nofollow">
                    github.com/saadeghi
                  </a>
                </li>
                <li className="[&amp;_a]:underline">
                  Twitter:{' '}
                  <a
                    href="https://twitter.com/saadeghi"
                    target="_blank"
                    rel="noreferrer nofollow">
                    @saadeghi
                  </a>
                </li>
                <li className="[&amp;_a]:underline">
                  Telegram:{' '}
                  <a
                    href="https://t.me/saadeghi"
                    target="_blank"
                    rel="noreferrer nofollow">
                    @saadeghi
                  </a>
                </li>
                <li className="[&amp;_a]:underline">
                  Location: Istanbul, Turkey (open to relocation)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

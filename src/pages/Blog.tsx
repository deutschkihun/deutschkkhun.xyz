import {FormattedMessage} from 'react-intl'
import {Div, Title} from '../components'
import * as I from '../data/image'

export const Blog = (): JSX.Element => {
  return (
    <div className="min-h-[80vh]">
      <div className="mx-40 carousel">
        <div id="item1" className="w-full carousel-item">
          <Div className="hero h-96" src={I.randomImage(1500, 600)}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-center hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                  excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                  id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </Div>
        </div>
        <div id="item2" className="w-full carousel-item">
          <Div className="h-96 hero" src={I.randomImage(1500, 600)}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-center hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                  excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                  id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </Div>
        </div>
        <div id="item3" className="w-full carousel-item">
          <Div className="h-96 hero" src={I.randomImage(1500, 600)}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-center hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                  excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                  id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </Div>
        </div>
      </div>
      <div className="flex justify-center w-full gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>

      <Title className="my-10">
        <FormattedMessage id="Article" />
      </Title>
      <section className="p-3 m-auto max-w-7xl reveal fade-bottom">
        <ul
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, auto))'
          }}>
          <div className="shadow-xl card w-96 ">
            <Div className="hero h-72" src={I.randomImage(200, 200)} />
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="shadow-xl card w-96 ">
            <Div className="h-72 hero" src={I.randomImage(200, 200)} />

            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="shadow-xl card w-96 ">
            <Div className="h-72 hero" src={I.randomImage(200, 200)} />
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="shadow-xl card w-96 ">
            <Div className="h-72 hero" src={I.randomImage(200, 200)} />
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="shadow-xl card w-96 ">
            <Div className="h-72 hero" src={I.randomImage(200, 200)} />
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="shadow-xl card w-96 ">
            <Div className="h-72 hero" src={I.randomImage(200, 200)} />
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </ul>
      </section>
    </div>
  )
}

// good example: https://blog.wantedlab.com/

import mainImg from '../assets/main.png'
import imgGraph from '../assets/design.jpg'
import imgCamara from '../assets/camara.jpeg'
import imgCode from '../assets/code.jpg'

function Hero() {
  return (
    <>
      {/* Main Image */}
      <div className="flex justify-center">
        <img
          src={mainImg}
          alt="Hero"
          className="w-40 md:w-44 lg:w-48"
        />
      </div>

      {/* Hero Text */}
      <section className="mx-auto px-5 pt-8 pb-16">
        <h1 className="mx-auto max-w-5xl text-center font-mono text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-3xl lg:text-4xl">

          I design

          <span className="m-1.5 inline-block h-[1.5em] w-[2em] overflow-hidden rounded-xl align-middle sm:mx-2 md:rounded-2xl">
            <img
              src={imgGraph}
              alt="Graphics"
              className="h-full w-full object-cover"
            />
          </span>

          identities,and <br/>

          <span className="m-1.5 inline-block h-[1.5em] w-[3em] overflow-hidden rounded-xl align-middle sm:mx-2 md:rounded-2xl">
            <img
              src={imgCamara}
              alt="Camera"
              className="h-full w-full object-cover"
            />
          </span>

          solve your complex <br/>

          <span className="m-1.5 inline-block h-[2em] w-[2em] overflow-hidden rounded-xl align-middle sm:mx-2 md:rounded-2xl">
            <img
              src={imgCode}
              alt="Code"
              className="h-full w-full object-cover"
            />
          </span>

          and creative problems

        </h1>
      </section>
    </>
  )
}

export default Hero
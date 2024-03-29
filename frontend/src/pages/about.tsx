import { useState } from "react"
import { Button } from "../components/buttons/button"
import cn from "../utils/cn"
import { ReactIcon } from "../components/icons/reactIcon"
import testImage from "../assets/test.png"

export default function LandingPage() {
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  return (
    <div className="App">
      {/* Header Section */}
      <header className="text-white body-font typo-normal bg-slate-600">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <a href="#" className="ml-3 text-xl , hover:cursor-pointer">
              YourBrand
            </a>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Services</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-gray-600">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to YourBrand XJKCShdsdfbsid
            </h1>
            <p className="mb-8 leading-relaxed">
              Your introductory text goes here. Explain your product, service,
              or mission.
            </p>
            <div className="flex justify-center">
              <Button
                customClassName={cn(isButtonClicked ? "text-3xl" : "")}
                onClick={() => {
                  if (isButtonClicked) {
                    setIsButtonClicked(false)
                  } else {
                    setIsButtonClicked(true)
                  }
                }}
              >
                ButtonText
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Features of YourBrand
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Briefly describe the key features of your product or service.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Repeat this block for each feature */}
            <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  FEATURE 1
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Title of Feature 1
                </h1>
                <p className="leading-relaxed mb-3">
                  Description of Feature 1.
                </p>
              </div>
            </div>
            {/* End of feature block */}
          </div>
        </div>
      </section>

      {/* Teaser Card Contact*/}
      <section className="text-gray-600 container px-5 py-24 mx-auto">
        <div className="bg-red-400 p-10">
          <div className="card-image">
            <ReactIcon />
            <img src={testImage} />
          </div>
          <div className="card-headline">
            <h2>Überschrift</h2>
          </div>
          <div className="card-bodytext">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
              explicabo!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">YourBrand</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © {new Date().getFullYear()} YourBrand —
            <a
              href="https://twitter.com/yourbrand"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @yourbrand
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

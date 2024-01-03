import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function Homepage() {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-gray-900">
      <header className="w-full bg-gray-100 dark:bg-gray-800 py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HomeIcon className="w-6 h-6" />
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-50">BTHH.org</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50" href="#">
              About
            </a>
            <a className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50" href="#">
              API
            </a>
            <a className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50" href="#">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#ffffff] dark:bg-[#333333]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Bring The Hostage Home
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Providing real-time data and information about the Israeli hostages kidnapped by Hamas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="about">
        <div className="container px-4 md:px-6 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-center sm:text-3xl md:text-4xl lg:text-5xl">
            About BTHH.org
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            BTHH.org is dedicated to providing real-time information and data about the Israeli hostages kidnapped by
            Hamas. We offer a free API that provides up-to-date details about the current situation.
          </p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F8F8] dark:bg-[#222222]" id="api">
        <div className="container px-4 md:px-6 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-center sm:text-3xl md:text-4xl lg:text-5xl">
            Access our API
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            We provide a comprehensive API with real-time data about the hostages. This includes status updates,
            location data, and more.
          </p>
          <div className="flex justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Get API Key</Button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
        <div className="container px-4 md:px-6 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-center sm:text-3xl md:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Have questions or need help? Don&apos;t hesitate to reach out.
          </p>
          <div className="flex justify-center">
            <Button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Contact Support</Button>
          </div>
        </div>
      </section>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 dark:text-gray-400">© 2024 BTHH.org</p>
        </div>
      </footer>
    </main>
  )
}


function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

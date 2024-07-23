import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <div className="h-2 bg-gray-600" />
      <Head>
        <title>Cesar's personal website</title>
        <meta name="description" content="Cesar's personal website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:title" content="Cesar's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='text-lg px-7'>
        <div id='profile-pic'>
          <img src="/img/me.jpeg" alt="Cesar's headshot" className='rounded-full max-h-60 mx-auto my-20' />
        </div>
        <div className='text-center flex justify-center flex-wrap text-2xl m-4 mb-5'>
          <a href="https://X.com/bretanac93" target="_blank" rel="noopener" className="text-gray-600 hover:underline block h-6 my-4 mx-4">
            <svg aria-labelledby="svg-inline--fa-title-qn8JYuPRho2s" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16 h-full" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title id="svg-inline--fa-title-qn8JYuPRho2s">Twitter</title><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
          </a>
          <a href="https://github.com/bretanac93" target="_blank" rel="noopener" className="text-gray-600 hover:underline block h-6 my-4 mx-4">
            <svg aria-labelledby="svg-inline--fa-title-PHRtZ7op5NcD" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-w-16 h-full" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><title id="svg-inline--fa-title-PHRtZ7op5NcD">GitHub</title><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
          </a>
          <a href="mailto:me@cesarbretana.com" target="_blank" rel="noopener" className="text-gray-600 hover:underline block h-6 my-4 mx-4">
            <svg aria-labelledby="svg-inline--fa-title-QPJhLukN98F6" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16 h-full" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title id="svg-inline--fa-title-QPJhLukN98F6">Email</title><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
          </a>
          <a href="https://linkedin.com/in/bretanac93" target="_blank" rel="noopener" className="text-gray-600 hover:underline block h-6 my-4 mx-4">
            <svg aria-labelledby="svg-inline--fa-title-oE7zWm7r97xp" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin fa-w-14 h-full" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><title id="svg-inline--fa-title-oE7zWm7r97xp">LinkedIn</title><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
          </a>
          <a rel="me" target="_blank" className="hidden" href="https://mastodon.social/@bretanac93">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54a102.5 102.5 0 0 1 -.9-13.9c85.6 20.9 158.7 9.1 178.8 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zm-75.1 125.2h-46.6v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.3V197c0-58.5-64-56.6-64-6.9v114.2H90.2c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175z" />
            </svg>
          </a>
        </div>
        <main className='lg:max-w-6xl mx-auto'>
          <div className='text-center'>
            <h1 className='text-3xl mb-5'>Hey! I'm Cesar Bretana 👋</h1>
            <div className='my-3'>I'm a Software Engineer from Cuba 🇨🇺</div>
            <div className='my-3'>Currently living in Berlin, Germany 🇩🇪</div>
            <div className='my-3'>I've been working as a Software Engineer for the last 7 years, mostly focusing on Backend and System Engineering.</div>
            <div className='my-3'>I've been focusing lately on Software Architecture, Design and implementation of data-intensive applications, and enterprise software, mostly working with <strong>Golang</strong>, <strong>Kotlin</strong> and <strong>Kafka</strong>.</div>
            <div className='my-3'>I'm also passionate about the Cloud, always tinkering with <strong>Kubernetes</strong>, <strong>Docker</strong> and the surrounding ecosystem.</div>
            <div className='my-3'>If you want to hear more about me and my current and past experiences, or simply connect, hit me up in one of my socials above.</div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home

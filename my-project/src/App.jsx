import React from 'react'
import Navbar from './components/Navbar/Navbar'
import NavbarBanner from './components/Navbar/NavbarBanner'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
     <Navbar/>
     <NavbarBanner/>
    </main>
  )
}

export default App

{/* <main> Tag:
Represents the main content area of a webpage. It helps in semantic HTML, defining the primary section of the document.
className='overflow-x-hidden':
overflow-x-hidden: A Tailwind CSS utility class that prevents horizontal scrolling. Any content that goes beyond the horizontal boundaries will be hidden. */}
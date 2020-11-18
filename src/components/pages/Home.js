import React from 'react'
import "../../App.css"
import Cards from '../Cards'
import Footer from '../Footer'
import Skills from "../Skills"

function Home () {
    return (
        <>
          <Skills/>
          <Cards />
          <Footer />
        </>
    )
}

export default Home
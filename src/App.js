import React from "react"
import Main from './main.js'
import Header from './header.js'
import Footer from './footer.js'

function App (props){
  return(
    <>
    <Header props={props}/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App
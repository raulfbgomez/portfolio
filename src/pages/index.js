import React from 'react'

// import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Thanks from '../components/Thanks'

const Home = (props) => {
  // const stars = props
  return (
    <>
      <Layout title="Raul Bautista Gomez | Portafolio">
        <Header />
        <About />
        <Projects />
        <Experience /> 
        <Contact />
        <Thanks />
      </Layout>
    </>
  )
}

// Home.getInitialProps = async ctx => {
//   const res = await fetch('https://api.github.com/repos/zeit/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }


export default Home

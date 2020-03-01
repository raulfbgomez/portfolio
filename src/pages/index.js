import React from 'react'

// import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'

const Home = (props) => {
  // const stars = props
  return (
    <>
      <Layout title="Raul Bautista Gomez | Portafolio">
        <Header />
        <About />
        <Projects />
        <Experience />
        <p>Redes sociales aqui</p>
        <div>
          <a href="https://www.freepik.es/fotos-vectores-gratis/negocios">Vector de Negocios creado por freepik - www.freepik.es</a>
          <a href="https://www.freepik.es/fotos-vectores-gratis/viajes">Vector de Viajes creado por freepik - www.freepik.es</a>
          Photo by Aleksandar Pasaric from Pexels
        </div>
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

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
  // if (process.browser) {
  // }
  const aboutRef = React.useRef(null)
  const projectsRef = React.useRef(null)

  function cb(entries) {
    const first = entries[0]
    if (first.isIntersecting) {
      console.log('is Intersecting')
    }
  }

  const setAbout = React.useCallback(node => {
    if (aboutRef.current === null) {
      aboutRef.current = new IntersectionObserver(cb, { threshold: 1 });
    }
    if (aboutRef.current) {
      // Make sure to cleanup any events/references added to the last instance
      // ref.current.unobserve(node)
    }
    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
      aboutRef.current.observe(node)
    }
    // Save a reference to the node
    aboutRef.current = node
  }, [])
  
  return (
    <>
      <Layout title="Raul Bautista Gomez | Portafolio">
        <Header />
        <div ref={setAbout} data-index="0">
          <About />
        </div>
        <div data-index="1">
          <Projects />
        </div>
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

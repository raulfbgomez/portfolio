import React, { useEffect } from 'react'

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
  const homeRef    = React.useRef(null)
  const aboutRef    = React.useRef(null)
  const projectsRef = React.useRef(null)
  const cvRef = React.useRef(null)
  const contactRef = React.useRef(null)

  const [currentDiv, setCurrentDiv] = React.useState('home')

  let buuble = null
  useEffect(() => {
    if (buuble === null) {
      buuble = document.querySelector('.buuble')
    }
    const activeLink = document.querySelector(`[data-page=${currentDiv}]`)
    let coords = activeLink.getBoundingClientRect()
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    }
    buuble.style.setProperty('left', `${directions.left}px`)
    buuble.style.setProperty('top', `${directions.top}px`)
    buuble.style.setProperty('width', `${directions.width}px`)
    buuble.style.setProperty('height', `${directions.height}px`)
    if (currentDiv != 'home') {
      buuble.style.background = '#67a32b'
    } else {
      buuble.style.background = 'transparent'
    }
    //
  }, [currentDiv])

  function cb(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('El div intersectado es', entry.target)
        setCurrentDiv(entry.target.className)
      }
    })
  }

  const options = {
    rootMargin: '0px',
    threshold: 0.7
  }

  const options2 = {
    rootMargin: '0px',
    threshold: 0.4
  }

  const setAbout = React.useCallback(node => {
    if (aboutRef.current === null) {
      aboutRef.current = new IntersectionObserver(cb, options);
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

  const setHome = React.useCallback(node => {
    if (homeRef.current === null) {
      homeRef.current = new IntersectionObserver(cb, options);
    }
    if (node) {
      homeRef.current.observe(node)
    }
    homeRef.current = node
  }, [])

  const setProjects = React.useCallback(node => {
    if (projectsRef.current === null) {
      projectsRef.current = new IntersectionObserver(cb, options);
    }
    if (node) {
      projectsRef.current.observe(node)
    }
    projectsRef.current = node
  }, [])

  const setCv = React.useCallback(node => {
    if (cvRef.current === null) {
      cvRef.current = new IntersectionObserver(cb, options2);
    }
    if (node) {
      cvRef.current.observe(node)
    }
    cvRef.current = node
  }, [])

  const setContact = React.useCallback(node => {
    if (contactRef.current === null) {
      contactRef.current = new IntersectionObserver(cb, options);
    }
    if (node) {
      contactRef.current.observe(node)
    }
    contactRef.current = node
  }, [])
  
  return (
    <>
      <Layout title="Raul Bautista Gomez | Portafolio">
        <div ref={setHome} className='home' id='home'>
          <Header />
        </div>
        <div ref={setAbout} className='about' id='about'>
          <About />
        </div>
        <div ref={setProjects} className='projects' id='projects'>
          <Projects />
        </div>
        <div ref={setCv} className='cv' id='cv'>
          <Experience /> 
        </div>
        <div ref={setContact} className='contact' id='contact'>
          <Contact />
        </div>
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

import Link from 'next/link'
import Head from 'next/head'

const Layout = (props) => (
  <>
  <Head>
    <title>{ props.title }</title>
    <link href="https://fonts.googleapis.com/css?family=Spartan&display=swap" rel="stylesheet" />
  </Head>

  <div>
    { props.children }
  </div>
  </>
)

export default Layout

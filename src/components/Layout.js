import Link from 'next/link'
import Head from 'next/head'

const Layout = (props) => {
  return (
    <>
    <Head>
      <title>{ props.title }</title>
      <link href="https://fonts.googleapis.com/css?family=Spartan&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </Head>
    { props.children }
    </>
  )
}

export default Layout

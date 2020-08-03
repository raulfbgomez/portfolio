import Head from 'next/head'
import Link from 'next/link'
import { Nav } from '../../styles/dashboard/admin'

const Layout = (props) => {
  return (
    <>
    <Head>
      <title>{ props.title }</title>
      <link href="https://fonts.googleapis.com/css?family=Spartan&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
    <Nav>
      <ul>
        <li><Link href='/dashboard/admin/1'><a>Home</a></Link> </li>
        <li><Link href='/'><a>Planes</a></Link></li>
        <li><Link href='/'><a>Clientes</a></Link></li>
      </ul>
    </Nav>
    { props.children }
    </>
  )
}

export default Layout

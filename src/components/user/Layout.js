import Head from 'next/head'
import Nav from 'components/user/Nav'
import { Main } from 'styles/user/Main'
import { GA_TRACKING_ID } from 'lib/gtag.js'

const Layout = (props) => {

  return (
    <>
    <Head>
      <title>{ props.title }</title>
      <link href="https://fonts.googleapis.com/css?family=Spartan&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
    </Head>
    
      <Nav />
      <Main>
        { props.children }
      </Main>
    </>
  )
}

export default Layout

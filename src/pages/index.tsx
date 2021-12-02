import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Golden Skin Hotel</title>
        <meta name="description" content="Melhor hotel do mundo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1>teste</h1>
      </Container>
    </div>
  )
}

export default Home

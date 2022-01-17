import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


const Sobre = () => {
  return (
    <div>
      <Head>
        <title>Sobre - PapiteBox</title>
      </Head>
      <h1> Sobre</h1>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>

    </div>

  )
}

export default Sobre
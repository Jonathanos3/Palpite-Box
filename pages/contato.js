import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Contato = () => {
  return (
    <div >
      <Head>
        <title>Contato - PapiteBox</title>
      </Head>
      <h1 className='text-center font-bold my-2 text-2xl'>Contato Jonathan Projetc</h1>
      <div >
        <Link href='/'>
          <a ><img className='shadow-md p-0 object-fill h-20 ' src='logo-whatsapp.png' /></a>
        </Link>

        <p className='mt-12 text-center hover:underline'>
          E-mail: jonathanoliveira3@gmail.com <br />
        </p>

      </div>
    </div>
  )
}

export default Contato
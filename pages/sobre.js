import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


const Sobre = () => {
  return (
    <div>
      <Head>
        <title>Sobre - PapiteBox</title>
      </Head>
      <div>
        <Link href='/'>
          <img className=' shadow-md p-2 object-fill h-10' src='/home.png' />
        </Link>
      </div>
      <p className='mt-12 text-center'>
        O restaurante X, foi inaugurado em ..., com boa culinária veio para revolucionar os pratos da cidade.<br />
        Chefes de alto padrão, buscamos sempre o melhor para atendê-los.
      </p><br />


    </div>

  )
}

export default Sobre
import React from 'react'

const footer = () => {
  return (
    <div className='bg-gray-700 p-2'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por:{' '}
        <a className='hover:underline' href=''>Jonathan Oliveira </a> /{' '}
        <a className='hover:underline' href=''>Linkedin</a> /{' '}
        <a className='hover:underline' href='https://github.com/Jonathanos3'>Github </a>{' '}
        <div className='mt-2'>
          <img className='inline p-2 object-fill h-12' src='/logo_semana_fsm.png' />
          <img className='inline p-2 object-fill h-12' src='/logo_devpleno.png' />
        </div>
      </div>

    </div>
  )
}
export default footer
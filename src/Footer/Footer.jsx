import React from 'react'

function Footer() {
  return (
    <div className='w-full h-[160px] bg-[#000000e9] flex flex-row justify-around items-center'>
        <div className='text-white flex flex-col'>
          <h1 className='text-xl mb-2'>Contact Us</h1>
          <h1>+8975689006</h1>
          <h1>+1209007869</h1>

        </div>
        <div className='text-white'>
        <h1 className='text-xl mb-2'>Address</h1>
          <h1>Sector-35 City Park</h1>
          <h1>Luxminagar  New Delhi</h1>
        </div>
        <div className='text-white'>
          <h1 className='text-xl mb-2'>Support Community</h1>
          <h1>LinkedIn</h1>
          <h1>Github</h1>

            
        </div>
      
    </div>
  )
}

export default Footer

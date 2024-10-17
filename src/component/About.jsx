import React from 'react'
import Home from './Home'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function About() {
  return (
    <>
    <div id='about' className='flex flex-col items-center p-6 w-full h-[580px]'>
 
      < Header/>
      <h2 className='mt-40 text-4xl font-semibold text-white'>All About me</h2>

      <div className='flex flex-row mt-40 gap-14'>
        <button className='p-2 bg-[#ae5765] rounded-sm text-xl'>Quick read</button>
        <button className='p-2 bg-[#f1ac57] rounded-sm text-xl'>Explore All Details About Me</button>

      </div>
   
      
    </div>
    <h2 className='text-4xl font-semibold ml-20 mt-8'>Our History</h2>
    <p className='text-xl font-semibold ml-20 mt-8 mr-52 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eaque quasi placeat impedit quidem cumque amet nihil ut minima beatae explicabo rerum, a molestias quibusdam reprehenderit cum autem reiciendis hic.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit dolorem sapiente ex, nam cum ullam reprehenderit nulla temporibus tempora! Minima, expedita mollitia. Pariatur, excepturi. Modi perferendis recusandae reprehenderit inventore nostrum laboriosam, animi doloremque sunt qui adipisci molestias natus! Dolores maxime ratione vero ab reiciendis nostrum similique, rerum voluptatum explicabo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum, voluptas, ex saepe voluptates consequuntur aliquam doloremque aliquid voluptatibus ut cupiditate. Enim, officia ipsam blanditiis laudantium quam accusantium recusandae eveniet illo eligendi dolores. Voluptates repellat odio asperiores illo laboriosam! Sunt, ipsum assumenda! Velit obcaecati asperiores soluta quas voluptatibus excepturi, molestias voluptates quibusdam, quasi quidem doloremque repudiandae. Eaque, sint vero dolore omnis dolorum numquam tenetur inventore molestiae, quibusdam quam natus mollitia voluptates fugit ipsa delectus. Molestiae expedita similique esse aliquam, consectetur, quos eum perferendis deserunt eligendi exercitationem consequatur autem deleniti quasi distinctio fugiat voluptatem. Nulla, fugiat hic eius illo ea explicabo.
    </p>
    <Footer/>
    </>
  )
}

export default About

import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <>
      <div id='contact' className='flex flex-col items-center p-6 w-full  h-[490px]'>
        <Header />
        <h2 className='mt-20 lg:mt-50 text-4xl lg:text-3xl lg:mt-50 font-semibold text-[white] text-center'>
          Please Join Us For The Contact
        </h2>

        <div className='flex flex-col lg:flex-row mt-20 lg:mt-40 gap-6 lg:gap-14'>
          <button className='p-2 bg-[#e8435f] rounded-sm text-lg lg:text-xl'>Quick read</button>
          <button className='p-2 bg-[#55dbed] rounded-sm text-lg lg:text-xl'>Fill a Feedback Form</button>
        </div>
      </div>

      <h2 className='text-2xl lg:text-4xl font-semibold ml-5 lg:ml-20 mt-8'>We Provide Support</h2>
      <p className='text-base lg:text-xl font-semibold ml-5 lg:ml-20 mt-8 mr-5 lg:mr-52 mb-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eaque quasi placeat impedit quidem cumque amet nihil ut minima beatae explicabo rerum, a molestias quibusdam reprehenderit cum autem reiciendis hic.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit dolorem sapiente ex, nam cum ullam reprehenderit nulla temporibus tempora! Minima, expedita mollitia. Pariatur, excepturi. Modi perferendis recusandae reprehenderit inventore nostrum laboriosam, animi doloremque sunt qui adipisci molestias natus! Dolores
      </p>

      <h2 className='text-center text-2xl lg:text-3xl font-semibold m-7'>Contact Form</h2>
      <div className='flex justify-center items-center w-full'>
        <form className='w-[90%] lg:w-[45%] h-auto lg:h-[500px] mb-9 bg-[orange] rounded-md p-8'>
          <label htmlFor='name'>Enter Your Name: </label>
          <input type="text" placeholder='Name.' className='w-full mb-4 p-2 rounded' />
          
          <label htmlFor='email'>Enter Your Email: </label>
          <input type="email" placeholder='Email' className='w-full mb-4 p-2 rounded' />

          <label htmlFor='trip'>Select Your Trip: </label>
          <select name="trip" id="trip" className='w-full mb-4 p-2 rounded'>
            <option value="">Select Trips</option>
            <option value="Goa">Goa</option>
            <option value="Ladhak">Ladhak</option>
            <option value="Kashmir">Kashmir</option>
          </select>

          <label htmlFor='feedback'>Enter feedback or any query: </label>
          <textarea placeholder='Enter your message here...' className='w-full p-2 rounded mt-3 mb-4' name="feedback" id="feedback" cols="30" rows="7"></textarea>
          
          <button className='p-2 bg-white rounded-sm'>Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

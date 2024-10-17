import React from 'react'
import Header from '../Header/Header'
import img1 from '../images/1.jpg'
import img2 from '../images/4.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/5.jpg'
// 
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import img9 from '../images/9.jpg'


import Footer from '../Footer/Footer'

const dataa=[
    {image:img7,
     name:"Trip in Indonesia",
     para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui, officia omnis laudantium aliquam exercitationem, nam quasi optio deserunt esse suscipit. Debitis nisi, laudantium adipisci quis accusantium quasi accusamus eos?"
    },
    {image:img1,
        name:"Trip in Malaysia",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui, officia omnis laudantium aliquam exercitationem, nam quasi optio deserunt esse suscipit. Debitis nisi, laudantium adipisci quis accusantium quasi accusamus eos?"
       },
       {image:img4,
        name:"Trip in France",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui, officia omnis laudantium aliquam exercitationem, nam quasi optio deserunt esse suscipit. Debitis nisi, laudantium adipisci quis accusantium quasi accusamus eos?"
       },
]


function Service() {
  return (
    <>
    <div id='service' className='flex items-center flex-col'>
       <div className='p-6 flex items-center justify-center mt-8'>
       <Header/>
       </div>
        <div  className='w-full h-[490px] flex flex-col justify-center items-center'>
        
            <h2 className='text-4xl mb-2 text-white font-semibold'>Our Latest Servies</h2>
            <p className='text-xl  text-white'>Choose your favourite Destination And Trips Plans</p>
            <button className='bg-white p-2  rounded-sm font-medium mb-[210px] mt-14'>Explore Our Services !</button>

        </div>
      
    </div>
     <h1 className='text-center text-4xl font-medium mt-8 mb-4'>Popular Destinations !</h1>
     <p className='text-center mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, culpa.</p>
     <div className='flex flex-row w-full justify-around'>
        <div className='w-[400px]'>
            <h1 className='text-2xl mb-3 font-medium'>Taal Volcano, Batangas.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officiis dignissimos odit nostrum. Omnis ullam temporibus culpa optio accusantium ducimus dolorum ab asperiores, beatae cumque aspernatur explicabo nulla provident quaerat quam. Earum architecto, necessitatibus maxime ex animi iure fugiat, eligendi vero, ab dolorum illo cumque odio nulla rerum eaque nihil provident voluptates sapiente explicabo nemo? Doloribus fugit quae labore ipsum perferendis odit aliquid delectus quisquam! Modi dolor nesciunt nostrum doloremque?</p>
        </div>
        <div>
            <img id='ff' src={img1} alt="" width={300}/>
        </div>
        <div>
            <img id='ff1' src={img2} alt="" width={300} height={200}/>
        </div>

     </div>

     {/*  */}
     <div className='flex flex-row w-full justify-around mt-14'>
     <div>
            <img id='ff' src={img9} alt="" width={300}/>
        </div>
        <div>
            <img id='ff1' src={img4} alt="" width={300} height={200}/>
        </div>
        <div className='w-[400px]'>
            <h1 className='text-2xl mb-3 font-medium'>Mt. daguldul, Batangas.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officiis dignissimos odit nostrum. Omnis ullam temporibus culpa optio accusantium ducimus dolorum ab asperiores, beatae cumque aspernatur explicabo nulla provident quaerat quam. Earum architecto, necessitatibus maxime ex animi iure fugiat, eligendi vero, ab dolorum illo cumque odio nulla rerum eaque nihil provident voluptates sapiente explicabo nemo? Doloribus fugit quae labore ipsum perferendis odit aliquid delectus quisquam! Modi dolor nesciunt nostrum doloremque?</p>
        </div>
       

     </div>
     {/*  */}


     <h1 className='text-center text-4xl font-semibold m-10'>Recent Trips</h1>
     <p className='text-center'>You can discover unique destination using Google Maps</p>
     <div className='w-full flex flex-row justify-evenly items-center mt-11'>
       

        {
            dataa.map((item,index)=>{
                return(
                    <div id='box' key={index} className='w-[340px] h-[420px] flex flex-col items-start rounded-md overflow-hidden shadow-emerald-950 mb-10 '>
                        <div className=''>
                            <img id='boxim' src={item.image} alt="" />
                        </div>
                        <h1 className='text-xl font-semibold m-[8px]'>{item.name}</h1>
                        <p className='m-1'>{item.para}</p>


                    </div>
                )
            })
        }
        
     </div>
     <Footer/>

    </>
  )
}

export default Service

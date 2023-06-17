import React from 'react'
import "./Section-3.css"

const Section3 = () => {
  return (
    <section className='bg-[#6165F3] px-16 pt-5 pb-4 learn-section'>
        <div className='h-[60vh] flex justify-between items-center max-[1200px]:h-full max-[980px]:flex-col'>
            <div className='flex-1'>
                <figure className='max-w-xs w-full'>
                    <img className='w-full object-cover' src="https://goplay.myxplora.com/_nuxt/img/golearn-color-logo.764d0f6.png" alt="" />
                </figure>
                <p className='text-xl text-white mt-8 mb-9'>Turn screentime into brain time with GoLearn!</p>
                <p className='text-xl text-white leading-normal mr-36 text-m'>Explore a world of interesting articles, engaging stories, and fun activities. Learn about nature and animals, conduct experiments, bake cookies, and plan parties. GoLearn has endless learning activities so you will never feel bored!</p>
                <button className='btn mt-10 bg-[#5AB55E] py-3 px-16 rounded-full text-lg text-white btn-shadow'>Let's Go Learn</button>
            </div>
            <figure className='animals-img'>
              <img className='w-full h-full object-cover' src="https://goplay.myxplora.com/_nuxt/img/section-4-2.2471d35.png" alt="" />
            </figure>
        </div>
        <div className='text-center hidden btn-hidden'>
          <button className='mt-10 bg-[#5AB55E] py-3 px-16 rounded-full text-lg text-white btn-shadow'>Let's Go Learn</button>
        </div>

    </section>
  )
}

export default Section3

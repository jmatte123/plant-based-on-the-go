import * as React from 'react'

export default function App () {
  return (
    <div className='flex-col p-16'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <img src='logo.png' alt='test' className='w-32 h-32 ml-48' />
          <h1 className='font-bold text-xl text-main'>SUSTAINABLE<br /> ON-THE-GO</h1>
        </div>
        <div className='flex gap-10 items-center'>
          <a>About Us</a>
          <a>How It Works</a>
          <a>Recipies</a>
          <a>Demos</a>
          <a>Meal Prepping</a>
          <a>Contact Us</a>
        </div>
      </div>
      <div className='relative flex justify-center items-center pt-10'>
        <img src='background1.png' alt='test' className='' />
        <h1 className='absolute font-bold text-4xl ml-16'>DIVERSIFY YOUR PLANT-BASED MENU<br /> ON-THE-GO</h1>
      </div>
      <div className='flex justify-around p-24'>
        <div className='flex flex-col w-1/3 gap-4'>
          <h3 className='font-bold text-main text-2xl'>About Us</h3>
          <p>
              Looking for plant-based recipes you can make on-the-go? We’ve gotcha covered! Our website provides a diversity of recipes and dishes you can make with whatever kitchen supplies you have. Just use our filter tool to enter in the kitchen supplies you do have, such as a microwave or a stove, and we can find recipes that work for YOU! We can’t wait for you to explore plant-based eating wherever you go!
          </p>
        </div>
        <div className='flex flex-col w-1/3 gap-4'>
          <h3 className='font-bold text-main text-2xl'>Our Mission</h3>
          <p>
              To provide tailored plant-based meals for your limitations such as kitchen supplies and cost, allergy restrictions and personal and cultural preferences. There are very few resources on plant-based eating with limited kitchen supplies. Our online toolkit will assist you in your plant-based journey on the go!
          </p>
        </div>
      </div>
      <div className='relative flex justify-center items-center'>
        <img src='background2.png' alt='test' className='' />
        <h1 className='absolute font-bold text-2xl left-[15%] bg-[#ffffff] p-4'>
          Click on our recipes tab and start exploring! Getting more excited?<br /> Click on our Meal Prepping tab and get ahead of the week!
        </h1>
      </div>
    </div>
  )
}

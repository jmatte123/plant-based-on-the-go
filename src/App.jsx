import * as React from 'react'
import { Link } from 'react-router-dom'

export default function App () {
  return (
    <div className='flex-col p-16'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <img src='logo.png' alt='test' className='w-32 h-32 ml-48' />
          <h1 className='font-bold text-xl text-main'>SUSTAINABLE<br /> ON-THE-GO</h1>
        </div>
        <div className='flex gap-10 items-center'>
          <Link to="">About Us</Link>
          <Link to="">How It Works</Link>
          <Link to="Recipies">Recipies</Link>
          <Link to="">Demos</Link>
          <Link to="">Meal Prepping</Link>
          <Link to="">Contact Us</Link>
        </div>
      </div>
      <div className='relative flex justify-center items-center pt-10'>
        <img src='background1.png' alt='test' className='' />
        <div className='absolute flex flex-col items-center ml-16'>
          <h1 className='font-bold text-4xl'>DIVERSIFY YOUR PLANT-BASED MENU</h1>
          <h1 className='font-bold text-4xl'>ON-THE-GO</h1>
        </div>
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
        <div className='absolute left-[10%] flex flex-col items-center p-4 bg-[#ffffff]'>
          <h1 className='font-bold text-2xl'>
            Click on our recipes tab and start exploring! Getting more excited?
          </h1>
          <h1 className='font-bold text-2xl'>
            Click on our Meal Prepping tab and get ahead of the week!
          </h1>
        </div>
      </div>
      <div className='p-24 flex flex-col gap-8'>
        <h1 className='font-bold text-main text-2xl'>Case Studies</h1>
        <div className='flex justify-around gap-32'>
          <div className='max-w-96 flex flex-col'>
            <img src='dorm.png' className='w-96' />
            <h1 className='font-bold text-main text-2xl pt-6'>Day of Eating in a Dorm</h1>
            <p>
                Taylor is a freshman at college following a plant-based diet. She has elected to purchase a reduced meal plan and just have some food in her dorm room in an attempt to cut costs. She has access to a microwave at the end of her hallway, and was given both a rice maker, and a mini fridge as high school graduation gifts. Her roommate really enjoys coffee so she brought a Kehrig machine that she is willing to let Taylor use. One Sunday she was busy studying for midterms and didn’t have time to head down to the dining hall, so as a result she looked through the website for ideas as she periodically does since it was her first time not having direct access to a full kitchen. For breakfast she used the Kehrig to make the Hotel Room Oatmeal, during lunch she used her rice cooker to make the Quinoa and Chickpea Salad. Lastly, she used the microwave down the hall to assist with dinner by making the Dorm Room Burritos.
            </p>
          </div>
          <div className='max-w-96 flex flex-col'>
            <img src='camping.png' className='w-96' />
            <h1 className='font-bold text-main text-2xl pt-6'>Cross Country Road Trip</h1>
            <p>
                Dan embarked on a cross country road trip after getting out of work and having some dinner. He planned on driving until he got tired and saving money by sleeping in his car at a freeway rest stop. He left home with a bag of food and a cooler with ice. When Dan stopped, he prepped the Chocolate Chia Pudding for breakfast the next morning. Although the recipe said it only needed to chill for 20 minutes, leaving it in the cooler overnight was completely okay. Further along the drive he stopped for lunch and kept it simple with a couple peanut butter and jelly sandwiches and some carrots and hummus. For snacks along the way he had a mix of dried fruit and homemade trail mix. Upon reaching his destination, he set up camp and roasted a few vegan sausages over the fire along with warming a can of soup on nearby coals.
            </p>
          </div>
          <div className='max-w-96 flex flex-col'>
            <img src='biker.jpeg' className='w-96' />
            <h1 className='font-bold text-main text-2xl pt-6'>Budget Travelling</h1>
            <p>
                Hannah went on a sightseeing trip to NYC. While she wanted to see what the city had to offer in terms of food she also wanted to cut some costs by not eating out for every meal. The AirBnB she ended up in during her stay had a small kitchenette containing a microwave, a rice maker, a coffee maker and a toaster. Throughout the trip she used the website for a sushi bowl, pasta microwave style, and for most breakfasts she went simple by having bagels with some fruit. When Hannah did choose to dine out, used the Happy Cow App to help point her in the right direction for suitable restaurants, which she learned about under other useful resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

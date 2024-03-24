import * as React from 'react'
import Tile from './Tile'
import { recipies } from './recipies'

export default function Recipies () {
  const [recipiesState, setRecipiesState] = React.useState(recipies)

  return (
    <div className='flex p-8'>
      <div className='flex flex-col gap-16'>
        <div>
          <h1 className='font-bold text-main text-xl'>Tools</h1>
          <div className='flex flex-col gap-1'>
            <div className='flex gap-2'>
              <input type="checkbox" name="coffeemaker" />
              <label htmlFor="coffeemaker">Coffeemaker/kehrig</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="ricemaker" />
              <label htmlFor="ricemaker">Rice maker</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="minifridge" />
              <label htmlFor="minifridge">Mini fridge/cooler</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="foodprocessor" />
              <label htmlFor="foodprocessor">Food Processor</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="crockpot" />
              <label htmlFor="crockpot">Crockpot</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="blender" />
              <label htmlFor="blender">Blender</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="stove" />
              <label htmlFor="stove">Stove</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="microwave" />
              <label htmlFor="microwave">Microwave</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="oven" />
              <label htmlFor="oven">Oven</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="campfire" />
              <label htmlFor="campfire">Campfire</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="nosupplies" />
              <label htmlFor="nosupplies">No supplies</label>
            </div>
          </div>
        </div>
        <div>
          <h1 className='font-bold text-main text-xl'>Allergies (free)</h1>
          <div className='flex flex-col gap-1'>
            <div className='flex gap-2'>
              <input type="checkbox" name="milk" />
              <label htmlFor="milk">Milk</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="eggs" />
              <label htmlFor="eggs">Eggs</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="nuts" />
              <label htmlFor="nuts">Nuts</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="fish" />
              <label htmlFor="fish">Fish</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="crustaceans" />
              <label htmlFor="crustaceans">Crustaceans</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="shellfish" />
              <label htmlFor="shellfish">Shellfish</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="wheat" />
              <label htmlFor="wheat">Wheat</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="soy" />
              <label htmlFor="soy">Soy</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="sesame" />
              <label htmlFor="sesame">Sesame</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="gluten" />
              <label htmlFor="gluten">gluten</label>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-10">
        {recipiesState.map((app) => (
          <div
            key={app.name}
            className="relative group bg-secondary bg-cover bg-center p-5 rounded shadow-md group-hover:opacity-75"
          >
            <Tile app={app} />
          </div>
        ))}
      </div>
    </div>
  )
}

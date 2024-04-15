import * as React from 'react'
import Tile from './Tile'
import { recipies } from './recipies'

export default function Recipies () {
  const [recipiesState, setRecipiesState] = React.useState(recipies)
  const [filters, setFilters] = React.useState([])
  const [allergies, setAllergies] = React.useState([])

  function checkArrayEqual (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        return false
      }
    }
    return true
  }

  React.useEffect(() => {
    if (filters.length > 0) {
      const set = new Set()

      recipies.forEach((recipe) => {
        if (checkArrayEqual(recipe.tags, filters)) {
          set.add(recipe)
        }
      })

      recipies.forEach((recipe) => {
        filters.forEach((filter) => {
          if (recipe.tags.includes(filter) && recipe.tags.filter((tag) => tag !== filter).length === 0) {
            set.add(recipe)
          }
        })
      })

      recipies.forEach((recipe) => {
        allergies.forEach((allergy) => {
          if (recipe.allergies.includes(allergy)) {
            set.delete(recipe)
          }
        })
      })
      setRecipiesState(Array.from(set))
    } else {
      const set = new Set([...recipies])
      console.log(allergies)
      if (allergies.length > 0) {
        recipies.forEach((recipe) => {
          allergies.forEach((allergy) => {
            if (recipe.allergies.includes(allergy)) {
              set.delete(recipe)
            }
          })
        })
      }
      setRecipiesState(Array.from(set))
    }
  }, [filters, allergies])

  function onToolChange (e, name) {
    const newFilters = [...filters]
    newFilters.push(name)
    e.target.checked ? setFilters(newFilters) : setFilters(filters.filter((item) => item !== name))
  }

  function onAllergyChange (e, name) {
    const newFilters = [...allergies]
    newFilters.push(name)
    e.target.checked ? setAllergies(newFilters) : setAllergies(allergies.filter((item) => item !== name))
  }

  return (
    <div className='flex p-8'>
      <div className='flex flex-col gap-16'>
        <div>
          <h1 className='font-bold text-main text-xl'>Tools</h1>
          <div className='flex flex-col gap-1'>
            <div className='flex gap-2'>
              <input type="checkbox" name="coffeemaker" onChange={(e) => onToolChange(e, 'Coffee')} />
              <label htmlFor="coffeemaker">Coffeemaker/Kehrig</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="ricecooker" onChange={(e) => onToolChange(e, 'Rice Cooker')} />
              <label htmlFor="ricecooker">Rice Cooker</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="cooler" onChange={(e) => onToolChange(e, 'Cooler/Refrigerator')} />
              <label htmlFor="cooler">Cooler/Refrigerator</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="foodprocessor" onChange={(e) => onToolChange(e, 'Food Processor')} />
              <label htmlFor="foodprocessor">Food Processor</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="crockpot" onChange={(e) => onToolChange(e, 'Crockpot')} />
              <label htmlFor="crockpot">Crockpot</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="blender" onChange={(e) => onToolChange(e, 'Blender')} />
              <label htmlFor="blender">Blender</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="stove" onChange={(e) => onToolChange(e, 'Stove/Campfire')} />
              <label htmlFor="stove">Stove/Campfire</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="microwave" onChange={(e) => onToolChange(e, 'Microwave')} />
              <label htmlFor="microwave">Microwave</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="oven" onChange={(e) => onToolChange(e, 'Oven')} />
              <label htmlFor="oven">Oven</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="nosupplies" onChange={(e) => onToolChange(e, 'No Supplies')} />
              <label htmlFor="nosupplies">No Supplies</label>
            </div>
          </div>
        </div>
        <div>
          <h1 className='font-bold text-main text-xl'>Allergies</h1>
          <div className='flex flex-col gap-1'>
            <div className='flex gap-2'>
              <input type="checkbox" name="milk" onChange={(e) => onAllergyChange(e, 'Milk')} />
              <label htmlFor="milk">Milk</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="eggs" onChange={(e) => onAllergyChange(e, 'Eggs')} />
              <label htmlFor="eggs">Eggs</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="nuts" onChange={(e) => onAllergyChange(e, 'Nuts')} />
              <label htmlFor="nuts">Nuts</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="fish" onChange={(e) => onAllergyChange(e, 'Fish')} />
              <label htmlFor="fish">Fish</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="crustaceans" onChange={(e) => onAllergyChange(e, 'Crustaceans')} />
              <label htmlFor="crustaceans">Crustaceans</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="shellfish" onChange={(e) => onAllergyChange(e, 'Shellfish')} />
              <label htmlFor="shellfish">Shellfish</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="wheat" onChange={(e) => onAllergyChange(e, 'Wheat')} />
              <label htmlFor="wheat">Wheat</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="soy" onChange={(e) => onAllergyChange(e, 'Soy')} />
              <label htmlFor="soy">Soy</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="sesame" onChange={(e) => onAllergyChange(e, 'Sesame')} />
              <label htmlFor="sesame">Sesame</label>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" name="gluten" onChange={(e) => onAllergyChange(e, 'Gluten')} />
              <label htmlFor="gluten">Gluten</label>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8 p-10">
        {recipiesState.map((app) => (
          <div
            key={app.name}
            className="relative group bg-cover bg-center p-5 rounded shadow-xl group-hover:opacity-75 bg-[#ffffff]"
          >
            <Tile app={app} />
          </div>
        ))}
      </div>
    </div>
  )
}

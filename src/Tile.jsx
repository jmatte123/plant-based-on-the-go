import * as React from 'react'

export default function Tile ({ app }) {
  return (
    <div className="w-full h-auto mx-h-10 bg-secondary p-8">
      <a
        href={app.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={app.name + ' Link'}
        className='flex flex-col justify-center items-center gap-6'
      >
        <div className="flex justify-center rounded-lg h-20 w-auto">
          <img
            src={app.imageSrc}
            alt={app.name + ' Image'}
            className="max-h-20 rounded"
          />
        </div>
        <div>
          <h3 className="text-xl">{app.name}</h3>
        </div>
        <ul>
          {app.ingredients.map((item) => (
            <li key={item} className='list-disc'>{item}</li>
          ))}
        </ul>
      </a>
    </div>
  )
}

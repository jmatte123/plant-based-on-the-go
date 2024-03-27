import * as React from 'react'

export default function Tile ({ app }) {
  return (
    <div className="w-full h-auto mx-h-36 bg-secondary p-8">
      <a
        href={app.linkSrc}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={app.name + ' Link'}
        className='flex flex-col justify-center items-center gap-6'
      >
        <div className="flex justify-center rounded-lg w-auto">
          <img
            src={app.imageSrc}
            alt={app.name + ' Image'}
            className="rounded"
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
        <ul>
          {app.tags.map((item) => (
            <li key={item} className='list-disc'>{item}</li>
          ))}
        </ul>
        <ul>
          {app.allergies.map((item) => (
            <li key={item} className='list-disc'>{item}</li>
          ))}
        </ul>
      </a>
    </div>
  )
}

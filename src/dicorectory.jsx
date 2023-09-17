import React from 'react'
import CategoryItems from './Category-items';
import './categories.styles.scss'
export default function Directory({categrories}) {
  return (
    <div className="categories-container">
      {
        categrories.map(( category ) => ( 
          <CategoryItems  category={category} key={category.id} />
        ))
      }

    </div>
  )
}

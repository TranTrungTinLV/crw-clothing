import React from 'react'
import './categories.styles.scss'
export default function CategoryItems({ category }) {
    const { imageUrl, title } = category;

    return (

        <div className="category-container">
            <div className="background-image" style={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            } />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop nows</p>
            </div>
        </div>

    )
}

import React from 'react'

function CardDish(props) {

  return (
    <>
       <li>
          <a href="javascript:;" onClick={() => props.showPopupHandler(props.item.strMeal)}>
          <img src={props.item.strMealThumb} alt="meals-image" />
          <h4>{props.item.strMeal}</h4>
          </a>
       </li>
    </>
  )
}

export default CardDish
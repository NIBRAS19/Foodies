import React from 'react'
import { DispatchContext } from './context/AppProvider'
import { useContext } from 'react'

function Popup({closePopupHandler, currentDish, allMenus, AddToCartHandler}) {

  let dispatch = useContext(DispatchContext)

  let menusDetails = allMenus.filter((menuItem)=> {
    return menuItem.strMeal === currentDish
  }).map((item)=> {
    return (
      <div className="popup-content-inner">
        <div className="popup-image">
        <img src={item.strMealThumb} alt="meals-image" />
        <h5 className="popup-category">{item.strCategory}</h5>
        </div>
        <h2>{item.strMeal}</h2>
        <ul className="popup-ingredients">
          <li>{item.strIngredient1}</li>
          <li>{item.strIngredient2}</li>
          <li>{item.strIngredient3}</li>
          <li>{item.strIngredient4}</li>
          <li>{item.strIngredient5}</li>
          <li>{item.strIngredient6}</li>
        </ul>
        <p>{item.strInstructions}</p>
        <button className="order" onClick={()=> {
          dispatch ({
            type: "add-to-cart",
            payload: {
              image: item.strMealThumb,
              name: item.strMeal
            }
          })
        }}>Order Now</button>
        <button className="close" onClick={closePopupHandler}>Close</button>
      </div>
    )
  })
     
  return (
    <div className="popup">
        <div className="popup-content">
            {menusDetails}
        </div>
    </div>
  )
}

export default Popup
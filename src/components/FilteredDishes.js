import React, { useState } from 'react'
import Pagination from './Pagination';
import CardDish from './CardDish';

function FilteredDishes(props) {

    let [allMenus, setAllMenus] = useState(props.allMenus);
    let [filteredMenus, setFilteredMenus] = useState([]);
    let [activeDish, setActiveDish] = useState("Beef");
    let [currentpage, setCurrentPage] = useState(1);
    let [itemsperPage, setItemsPerPage] = useState(4);


    let indexOfLastItem = currentpage * itemsperPage;
    let indexOfFirstItem = indexOfLastItem - itemsperPage;

    let showTheseDishesNow = filteredMenus.slice(indexOfFirstItem, indexOfLastItem);

    let maxitems = 10
    let singleMenuItems = props.singleMenu.map((item, index) => {
       if (index < maxitems) {
        return (
            <CardDish item={item} />
        );
       } else {
        return null;
       }
    })

    function showFilteredDishesHandler(category) {
        props.setSingleMenu([]);
        setActiveDish(category)
        let filteredMenusAre = allMenus.filter((item)=>{
            return item.strCategory === category
        }).map((item)=>{
            return (
                <li>
                    <img src={item.strMealThumb} alt="meals-image" />
                    <h4>{item.strMeal}</h4>
                </li>
            )
        })

        setFilteredMenus(filteredMenusAre)
    }


    let allCategories = props.allCategoryMenu.map((item)=>{
        return (
            <li
             className={item.strCategory === activeDish ? "active" : ""}
             onClick={()=>showFilteredDishesHandler(item.strCategory)}>
                {item.strCategory}
            </li>
        )
    })
  return (
    <div className="filtered-dishes">
        <div className="container">
            <div className="text-center">
                <h2>Choose your dishes</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium et ex repellendus quidem dolore quaerat, earum eum minus rem minima?</p>
            </div>
            <div className="filtered-dishes">
                <ul>
                    {allCategories}
                </ul>
            </div>
            <div className="filtered-dishes-results">
    <ul className="flex flex-wrap gap-30">
        {filteredMenus.length > 0 
            ? showTheseDishesNow // Show the filtered dishes
            : singleMenuItems.length > 0 
                ? singleMenuItems // Show the default menu items
                : (
                    <div className="dishes-not-found">
                        <h2>Sorry, No Dishes Found</h2>
                        <p>Please try with another dish</p>
                    </div>
                )}
    </ul>
</div>


            <Pagination 
                filteredMenus={filteredMenus}
                itemsPerPage={itemsperPage}
                currentpage={currentpage}
                setCurrentPage={setCurrentPage}
            />

        </div>
    </div>
  )
}

export default FilteredDishes
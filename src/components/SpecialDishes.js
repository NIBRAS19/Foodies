import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";

import { AllMenusContext } from "./Menus";

function SpecialDishes(props) {

    let [ShowPopup, setShowPopup] = useState(false);
    let [currentDish, setCurrentDish] = useState("");
    let [AddToCartItem, setAddToCartItem] = useState([{}]);

    const allMenus = useContext(AllMenusContext)

    function AddToCardHandler (AddToCartImage, AddToCartName) {
        setAddToCartItem (
            [
                ...AddToCartItem,
                {
                    image: AddToCartImage,
                    name: AddToCartName
                }
            ]
        )
    }

    function showPopupHandler(dishName) {
        setShowPopup(true);
        setCurrentDish(dishName);
    }

    function closePopupHandler() {
        setShowPopup(false);
    }

    let indexvalue = 8;
    let specialMenu = allMenus.map((item, index)=> {
        if (index < indexvalue) {
            return (
        <CardDish item={item}  showPopupHandler={showPopupHandler} />
        )
        }
        return null;
    })
    return (
            <section className="special-dishes">
                {ShowPopup && <Popup 
                closePopupHandler={closePopupHandler}
                currentDish={currentDish}
                allMenus={allMenus}
                AddToCartHandler={AddToCardHandler}
                 />}
                <div className="container">
                
                    <div className="special-dishes-content text-center">
                        <h2>Our Special Dishes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus cum cupiditate blanditiis laudantium consectetur voluptate soluta nisi?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias quo corrupti delectus modi dolorum mollitia quos qui!
                        </p>
                    </div>
                    <div className="special-dishes-list">
                        <ul className="list ">
                            {specialMenu}
                        </ul>
                    </div>
                </div>
            </section>
    );
}
export default SpecialDishes;
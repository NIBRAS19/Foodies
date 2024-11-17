import { Route, Routes, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';
import FilteredDishes from './FilteredDishes';
import Header from './Header';
import AddToCart from './AddToCart';
import { AppProvider } from './context/AppProvider';
import Footer from './Footer';

export const AllMenusContext = React.createContext();

function Menus() {
  let [menu, setMenu] = useState([]);
  let [categoryMenu, setCategoryMenu] = useState([]);
  let [loading, setLoading] = useState(true);
  let [singleMenu, setSingleMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';
      const CATEGORY_API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
      const SINGLEMENU_API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';

      try {
        let response = await fetch(API_URL);
        let data = await response.json();
        setMenu(data.meals);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }

      try {
        let response = await fetch(CATEGORY_API_URL);
        let categoryData = await response.json();
        setCategoryMenu(categoryData.categories);
      } catch (error) {
        console.error("Error fetching category meals:", error);
      }

      try {
        let response = await fetch(SINGLEMENU_API_URL);
        let singleMenuData = await response.json();
        setSingleMenu(singleMenuData.meals);
      } catch (error) {
        console.error("Error fetching single menu items:", error);
      }
    };
    fetchData(); // Call the async function
  }, []);

  const location = useLocation(); // Get the current route

  // Check if the current route is '/addtocart'
  const hideHeroSection = location.pathname === '/addtocart';

  return (
    <div>
      <AppProvider>
        <Header />
        {/* Conditionally render Hero based on route */}
        {!hideHeroSection && <Hero />}
        <Routes>
          <Route
            path="/"
            element={
              <AllMenusContext.Provider value={menu}>
                {!loading ? <SpecialDishes /> : <h1 className="loading">Loading</h1>}
                {!loading ? (
                  <FilteredDishes
                    allMenus={menu}
                    allCategoryMenu={categoryMenu}
                    singleMenu={singleMenu}
                    setSingleMenu={setSingleMenu}
                  />
                ) : null}
              </AllMenusContext.Provider>
            }
          />
          <Route path="/addtocart" element={<AddToCart />} />
        </Routes>
        <Footer />
      </AppProvider>
    </div>
  );
}

export default Menus;

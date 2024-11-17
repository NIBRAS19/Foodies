import React from 'react'

function Pagination(props) {
    
    let numberOfPages = []

    for (let i = 1; i <= Math.ceil(props.filteredMenus.length/props.itemsPerPage); i++) {
        numberOfPages.push(i)
    }

    function showNextDishesHandler(event) {
        props.setCurrentPage(event.target.id)
    }
    let pages = numberOfPages.map((page)=> {
        return <li id={page} onClick={showNextDishesHandler}>
            {page}
            </li>
    })

  return (
    <div className="pagination">
        <ul className="pagination-list">
            {pages}
        </ul>
    </div>
  )
}

export default Pagination
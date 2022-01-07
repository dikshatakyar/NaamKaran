import React from 'react'

const SearchBox = ( {handling}) => {
    return (
        <div className='search-container'>
            <input
             onChange={
                (event) => handling(event.target.value) } 
                 name="search" id="search" placeholder='Type Keywords' />
        </div>
    )
}

export default SearchBox

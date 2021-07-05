import React from 'react'
import './search.css'
export const Search = props => {
    return (

        <input type="search" placeholder="search monsters ... "
        className="search"
         onChange={props.handleChange}
        />

    )
}
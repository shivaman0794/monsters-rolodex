import React from 'react';
import './Search-box.style.css';

export const SearchBox = ({placeholder1,handleChange}) => (
    <input className='search' type='search' placeholder={placeholder1}
    onChange={handleChange} />
)


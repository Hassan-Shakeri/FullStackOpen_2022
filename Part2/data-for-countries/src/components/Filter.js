import React from 'react'

const Filter =({handleSearchChange}) => {
  return (
    <div>      
        find countries :
        <input onChange={handleSearchChange} />
    </div>
  )
}

export default Filter
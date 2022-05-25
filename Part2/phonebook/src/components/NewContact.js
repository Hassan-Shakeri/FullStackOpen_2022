import React from 'react'

const NewContact = ({addPerson,newName,newNumber,handleNameChange,handleNumberChange}) => {
    const addbtn = {
        backgroundColor: 'lightgreen'
    }

  return (
    <form onSubmit={addPerson}>
        <h2>Add new contact</h2>
        <div>
            Name:
            <input type="text" placeholder='name...' value={newName} onChange={handleNameChange} />
        </div>
        <div>
            Number:
            <input type="text" placeholder='xxx-xxx-xxxx' value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
            <button style={addbtn} type="submit">Add</button>
        </div>
  </form>  )
}

export default NewContact
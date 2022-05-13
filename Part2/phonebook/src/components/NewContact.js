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
            <input type="text" value={newName} onChange={handleNameChange} />
        </div>
        <div>
            Number:
            <input type="text" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
            <button style={addbtn} type="submit">add</button>
        </div>
  </form>  )
}

export default NewContact
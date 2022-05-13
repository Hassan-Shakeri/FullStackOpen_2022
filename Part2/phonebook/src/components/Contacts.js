import React from 'react'


const Contacts = ({person,handleDelete}) => {
const delbtn = {
    backgroundColor: 'orange'
}
  return (
      <div>
            <h5>
            Name : {person.name} <br/>
            Mobile: {person.number}<br/>
            <button style={delbtn} onClick={handleDelete}>Delete Contact</button>
        </h5>
      </div>)
}

export default Contacts
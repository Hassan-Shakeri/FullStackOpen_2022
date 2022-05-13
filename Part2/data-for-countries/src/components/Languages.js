import React from 'react'

const Languages =({languages}) => {
 const result = Object.values(languages).map((lan)=> <li key={lan}>{lan}</li>)



  return (
    <ul>
        {result}
    </ul>
  )
}

export default Languages
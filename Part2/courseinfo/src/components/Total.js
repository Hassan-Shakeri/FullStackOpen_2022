import React from 'react-dom';


const Total = ({data}) => {

    return(
      <div>
        <h4>Total number of exercises {data.reduce((sum, part)=> {
            return sum + part.exercises
        },0)}</h4>
      </div>
      )
  }
  

export default Total;

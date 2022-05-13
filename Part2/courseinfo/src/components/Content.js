import React from 'react-dom';
import Part from './Part'

const Content = ({data}) => {
    console.log('from content',data)
    return(
      <div>
        {data.map(part => {
                return(
                    <Part key={part.id} value={part}/>
                )
        })}
      </div>
    )
  }
  
  export default Content;
 
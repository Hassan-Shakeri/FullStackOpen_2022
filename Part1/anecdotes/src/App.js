import { useState } from 'react'


const Button = (props) => {
  return(
    <button onClick={props.handler}>{props.text}</button>
  )
}

const Favorite =(props) => {
  if(props.stats[0] === 0){
    return(
    <h2>Please Leave a Vote!</h2>
    )}
    return(
      <div>
          <h1>Anecdote with most votes :</h1>
          <p>{props.stats[1]}</p>
          <p>It Has {props.stats[0]} votes!</p>
      </div>
  )}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState(Array(anecdotes.length).fill(0))
  
  const maxPoint = Math.max(...points)
  const indexOfMaxPoint = points.indexOf(maxPoint)
  const contentOfIndex = anecdotes[indexOfMaxPoint]

  const clickHandler =()=>{
    const randomInt = Math.floor(Math.random()*(anecdotes.length))
    setSelected(randomInt)
    console.log('its randint',randomInt)
  }

  const voteHandler =() => {
    const copy = [...points]
    copy[selected] +=1
    setPoints(copy)
    console.log('its copy',copy)
  }



  return (
    <div>
      <h1>Anecdote of the day:</h1>
      {anecdotes[selected]}
      <br/>
      <Button handler={voteHandler} text='Vote'/>
      <Button handler={clickHandler} text='Next Anecdote'/>
      <Favorite stats={[maxPoint,contentOfIndex]}/>
    </div>
  )
}

export default App
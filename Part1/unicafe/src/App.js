import React,{ useState } from 'react'


const Header =() => { return(<h1>Give FeedBack</h1>)}

const Button = (props) => { 
  return(<button onClick={props.clickHandler}>{props.text}</button>)}

const StatLine = (props) => {
  return(
    <div>
      <table>
        <tbody>
          <tr>
            <th>{props.text}</th>
            <td>{props.value}</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

const Feedback =({stats,reset}) => {
  if(stats[3] !== 0){
    return(
      <div>
        <h2>Statistics</h2>
        <StatLine text='Good' value={stats[0]}/>
        <StatLine text='Neutral' value={stats[1]}/>
        <StatLine text='Bad' value={stats[2]}/>
        <StatLine text='All' value={stats[3]}/>
        <StatLine text='Average' value={stats[4]}/>
        <StatLine text='Positive' value={stats[5]}/>
        <br/>
        <Button clickHandler={reset} text='Reset'/>
      </div>
    )
  } else {
    return (<h3>Please Leave a Feedback!</h3>)
  }
}




const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const goodHandler = ()=> {
    setGood(good+1)
    setAll(all +1)
  }
  const neutralHandler = ()=> {
    setNeutral(neutral +1)
    setAll(all +1)
  }
  const badHandler = ()=> {
    setBad(bad +1)
    setAll(all +1)
  }

  const resetHandler = () =>{
    setGood(0)
    setNeutral(0)
    setBad(0)
    setAll(0)
  }

  const average = (all === 1 ? 1 : all/3).toFixed(2)
  const positive = ((good/all * 100).toFixed(2) + '%')
  const statsArray = [good,neutral,bad,all,average,positive]

  return (
    <div>
      <Header/>
      <Button clickHandler={goodHandler} text='good'/>
      <Button clickHandler={neutralHandler} text='neutral'/>
      <Button clickHandler={badHandler} text='bad'/>
      <Feedback stats={statsArray} reset={resetHandler}/>
    </div>
  )
}

export default App
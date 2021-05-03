import React, {useEffect, useState} from 'react'
import ListRobot from './components/ListRobot'

const App = ()=>
{
  const [isLoaded, setIsLoaded] = useState(false)
  const [robots, setRobot] = useState([])
  const [searchRobot, setSearchRobot] = useState([robots])

  useEffect(()=>
  {
      fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(robotsData =>
      {
          const temporaryRobotData = robotsData.map(robotData =>(
          {
              id:robotData.id,
              name:robotData.name,
              email: robotData.email
          }
          ))
          setRobot(temporaryRobotData)
          setSearchRobot(temporaryRobotData)
          setIsLoaded(true)
      })

  },[])

  const inputOnChange = (event)=>
  {
    let inputValue = event.currentTarget.value
    const searchResult = robots.filter(robot =>robot.name.toLowerCase().includes(inputValue.toLowerCase()))
    setSearchRobot(searchResult)
  }
  console.log(robots)
  if(!isLoaded)
  {
    return <div className='loader'>En chargement...</div>
  }
  else
  {
    return(
      <div className ='container'>
        <h1 className='title'>MES AMIS ROBOT</h1>
        <input onChange={inputOnChange} type='texte' placeholder='Tapez le nom à rechercher'/>
        <ListRobot robots={searchRobot}/>
      </div>
      )
  }
}

export default App;

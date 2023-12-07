import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './mockData.js' 
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [defaultData, setDefaultData] = useState(data);

  useEffect(() => {console.log(defaultData)}, [defaultData])

  function chekIsOk(isReady){
    if (isReady == true) {checked}
  }

  return ( 
    <>
      <button className='bluetext default'>Начать новый список</button><br/>

      <input type = "text" placeholder='Что нужно делать'></input> <button className='bluetext default'> Enter </button>
      <div>
        {defaultData.map((task, index) => {
        return (
        <div className='oneline'><button className='buttonX'><img src = {'imgs/x.png'} className='edge'/></button>
        <input type = "checkbox" className='checkbox' checked={task.isReady}/>
        <div className='oneline' key={index}><div className='oneline'>{1+index}.&nbsp;</div>
        <div className='oneline'> {task.name}</div>      
        </div>
        </div>)
        })}
      </div>

      <button className='bluetext default'>Удалить выполненные</button>

    </>
)}

export default App

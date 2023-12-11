import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './mockData.js' 
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [defaultData, setDefaultData] = useState(data);
  const [text,setText] = useState('')


  useEffect(() => {console.log(defaultData)}, [defaultData])
  const emptyListPhase = "  Список пуст... ";
  let deleteData;

  function setNewList(){
  setDefaultData([]);
  console.log('Список очищен...');}

  function emptyList(){
  if(defaultData.length <1) {return emptyListPhase}
  }

  function addNewTask(){
      setDefaultData([
        ...defaultData,
        {name:text, isReady:false}]);
  }

  function deleteTask(id){
  return(setDefaultData([...defaultData.filter((elem, index) => index !== id)]))
  };
  
  return ( 
    <>
      <button className='bluetext default' onClick={()=>{setNewList()}}>Начать новый список</button><br/>

      <input type = "text" placeholder='Что нужно делать' id='taskInput' value={text} onChange={(event)=>{
        setText(event.target.value);}}></input> 

      <button className='bluetext default' onClick={()=>{addNewTask()}}> Enter </button>

      <div className='bluetext'>{emptyList()}</div>
      <div>
        {defaultData.map((task, index) => {
        return (
        <div className='oneline'><button className='buttonX' onClick={()=>{deleteTask(index)}}><img src = {'imgs/x.png'} className='edge'/></button>
        <input type = "checkbox" className='checkbox' defaultChecked={task.isReady}/>
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

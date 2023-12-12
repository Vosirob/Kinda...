import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './mockData.js' 
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [defaultData, setDefaultData] = useState(data)
  const [text,setText] = useState('')
  const [doneTask, setDonetask] = useState([])
  const [taskInProgress, setTaskInProgress] = useState([])

  useEffect(() => {taskDone(); initTaskInProgress()}, [defaultData])
  const emptyListPhase = "  Список пуст... ";

  function setNewList(){
  setDefaultData([]);}

  function emptyList(){
  if((taskDone.length < 1)&&(taskInProgress < 1)) 
    {return emptyListPhase}
  }

  function addNewTask(){
    setDefaultData([
      ...defaultData,
      {name:text, isReady:false, id:defaultData.length}]);
  }

  function deleteTask(id){
    return(setDefaultData([
    ...defaultData.filter((elem) => 
    elem.id !== id)])
    )
  };


  function taskDone(){
    setDonetask([
      ...defaultData.filter((elem) => 
        elem.isReady === true)
    ])
  }

  function initTaskInProgress(){
    setTaskInProgress([
      ...defaultData.filter((elem) => 
        elem.isReady === false)
    ])
  }

  function clearDoneTask(){
    setDonetask([]);
    console.log('Выполненные задания удалены');}

  function replaceElem(id){
      setDefaultData([
        ...defaultData.map((elem) => {
            if (elem.id === id) {
                return { ...elem, isReady: !elem.isReady };
            }

            return elem;
        }),
    ])
    }   
  
  return ( 
    <>
      <button className='bluetext default' onClick={()=>{setNewList()}}>Начать новый список</button><br/>

      <input type = "text" placeholder='Что нужно делать' id='taskInput' value={text} onChange={(event)=>{
        setText(event.target.value);}}></input> 

      <button className='bluetext default' onClick={()=>{addNewTask()}}> Enter </button>

      <div className='bluetext'>{emptyList()}</div>
      <div>
        {taskInProgress.map((task, index) => {
        return (
        <div className='oneline'><button className='buttonX' onClick={()=>{deleteTask(task.id)}}><img src = {'imgs/x.png'} className='edge'/></button>
        <input type = "checkbox" className='checkbox' checked={task.isReady} onChange={()=>{replaceElem(task.id);}}/>
        <div className='oneline' key={index}><div className='oneline'>{1+index}.&nbsp;</div>
        <div className='oneline'> {task.name}</div>      
        </div>
        </div>)})}
        </div>

        <div>
        {doneTask.map((task, index) => {
        return (
        <div className='oneline'><button className='buttonX' onClick={()=>{deleteTask(task.id)}}><img src = {'imgs/x.png'} className='edge'/></button>
        <input type = "checkbox" className='checkbox' checked={task.isReady} onChange={()=>{
        replaceElem(task.id);}}/>
        <div className='oneline' key={index}>
        <div className='oneline'> {task.name}</div>      
        </div>
        </div>)})}
        </div>

      <button className='bluetext default' onClick={() =>{clearDoneTask()}}>Удалить выполненные</button>
      <button className='bluetext default' onClick={() =>{console.log(doneTask), console.log(taskInProgress)}}>Вывести списки в лог</button>
    </>
)}

export default App

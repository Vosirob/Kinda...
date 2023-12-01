import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './mockData' 
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [defaultData, setDefaultData] = useState(data);

  useEffect(() => {console.log(defaultData)}, [defaultData])


  return ( 
    <>
      
      <button className='bluetext'>Начать новый список</button>
<input type = "text" placeholder='Что нужно делать'></input> <button className='bluetext'> Enter </button> <br/>
<img src = {'imgs/x.png'} className='edge'/><input type = "checkbox" className='checkbox margin-top'></input>1. 1<br/>
<img src = {'imgs/x.png'} className='edge'/><input type = "checkbox" className='checkbox'></input>2. 2<br/>
<img src = {'imgs/x.png'} className='edge'/><input type = "checkbox" className='checkbox'></input>3. 3<br/>
<img src = {'imgs/x.png'} className='edge'/><input type = "checkbox" className='checkbox'></input>4. 4<br/>
<img src = {'imgs/x.png'} className='edge'/><input type = "checkbox" className='checkbox'></input>5. 5<br/>
<img src = {'imgs/x.png'} className='edge'/><input type = "checkbox" className='checkbox'></input>6. 6<br/>
<img src = {'imgs/x.png'} className='edge'/><input type = "checkbox" className='checkbox'></input>7. 7<br/>
<img src = {'imgs/x.png'} className='edge'/><input type = "checkbox" className='checkbox'></input>8. 8<br/>
<img src = {'imgs/x.png'} className='edge'/><input type = "checkbox" className='checkbox'></input>9. Дело 1<br/>
<img src = {'imgs/x.png'} className='edge'/><input type = "checkbox" className='checkbox'></input>10. Дело 2<br/>
<img src = {'imgs/x.png'} className='edge'/><input type = "checkbox" className='checkbox'></input>11. Дело 3<br/>
<img src = {'imgs/x.png'} className='edge'/><input type = "checkbox" className='checkbox'></input>12. Дело 4<br/>
<button className='bluetext'>Удалить выполненные</button>

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <p className='bluetext'>Начать новый список</p>
<input type = "text" placeholder='Что нужно делать'></input> <span className='bluetext'> Enter </span> <br/>
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
<p className='bluetext'>Удалить выполненные</p>

    </>
  )
}

export default App

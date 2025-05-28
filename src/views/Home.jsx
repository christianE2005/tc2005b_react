import { useState } from 'react'
import Boton from '../components/Boton'

function App() {
const [count, setCount] = useState(0)

const suma = () => {
  setCount(count + 1);
};
const resta = () => {
  setCount(count - 1);
};
   return (
    <>
      <h1>Mi app en React {count}</h1> 
      <Boton onclick={suma} texto="suma"/>
      <Boton onclick={resta }texto="resta"/>
      <Boton texto="mensaje"/>
      <Boton texto="guardar"/>
    </>
  )
}

export default App
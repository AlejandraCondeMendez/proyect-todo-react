import { useState } from 'preact/hooks'
import './app.css'
import { getData, postData } from './metodosJS/fetch'
import ListaTarea from './components/ListaTarea'
import { useEffect } from 'preact/hooks'
import { useRef } from 'preact/hooks'

export function App() {
  const [tareas, setTareas] = useState([]) //estado de las tareas

  const [input, setInput] = useState ('') //estado del imput
  const [valor, setValor] = useState(0) //contador
  const [valor2, setValor2] = useState(0) //contador
  
  useEffect(()=>{
    const mostrarTareas = async ()=>{
      const data = await getData()
      const tareasHeachas = data.filter(tarea=>tarea.estado === true).length //devuelve un array según la condción que le digamos
      const tareasNoHechas = data.filter(tarea=>tarea.estado === false).length
      setTareas(data) //datos de la API
      setValor(tareasHeachas)
      setValor2(tareasNoHechas)
    }
    mostrarTareas()
  }, [tareas])

  
  const agregarTarea = async()=>{ //función que se agrega como evento al botón
    const tareaObj ={
      titulo: input,
      estado: false
    }
    await postData (tareaObj)
  }

  return (
    <>
  <h1>Lista de tareas</h1>
  <p>tareas completadas {valor}</p>
  <p>Tareas por hacer {valor2}</p>
  <input  type='text' placeholder='Agregar tarea'   onChange={(e)=>setInput(e.target.value)}/> {/*obtenemos el valor del input (titulo de la tarea)*/}
  <button type='button' onClick={agregarTarea}>Agregar tarea</button>
  <ListaTarea tareasGet={tareas}/>
    </>
  )
}

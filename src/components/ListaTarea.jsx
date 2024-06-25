import Tarea from "./Tarea"
import { deleteData, putData } from "../metodosJS/fetch"
const ListaTarea = ({tareasGet})=>{ //tareas que traemos de la API

    const btnEliminar = async (id)=>{ //función que se agregará al evento del botón
        await deleteData(id)
    }

    const actulizarTarea = async (tarea)=>{ //función que se agrega al evento del check
        await putData(tarea)
    }
    return(
        <>  
        {tareasGet.map((iterarTarea)=>(
            <Tarea
            key={iterarTarea.id}
            tituloTarea={iterarTarea.titulo}
            btnEvento={()=>btnEliminar(iterarTarea.id)}
            estado={iterarTarea.estado}
            evento={()=>actulizarTarea( {
                id:iterarTarea.id,
                estado:!iterarTarea.estado })}  
            />
        ))} 
        </>
    )
}
export default ListaTarea
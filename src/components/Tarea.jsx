const Tarea = ({tituloTarea, evento, estado, btnEvento})=>{

    return (
        <>
        <p>{tituloTarea}</p>
        <input type="checkbox" checked={estado} onChange={evento}/>
        <button type="button" onClick={btnEvento}>Eliminar</button>
        </>
    )
}
export default Tarea
const Tarea = ({ tituloTarea, evento, estado, btnEvento }) => {
  return (
    <div className="task-container">
      <div className="task-content">
        <p>{tituloTarea}</p>
        <div className="task-controls">
          <input type="checkbox" checked={estado} onChange={evento} />
          <button type="button" onClick={btnEvento}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default Tarea;

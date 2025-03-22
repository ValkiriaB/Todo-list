// filterTasks.js
export default function filterTasks(value, tareas, setTaskFilter) {
  const tareasFiltradas =
    value === "todas"
      ? { filtro: false, tareas: [] }
      : {
          filtro: true,
          tareas: tareas.filter((tarea) =>
            value === "completas" ? tarea.check : !tarea.check
          ),
        };

  setTaskFilter(tareasFiltradas);
  localStorage.setItem("taskFilter", JSON.stringify(tareasFiltradas));
}

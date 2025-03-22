import { useState } from "react";
import { Box, Button, Icon, SimpleGrid, Center } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import AddTask from "./AddTask";
import filterTasks from "./FilterTasks";
import TaskList from "./FunctionTask";
import DuplicateAlert from "./DuplicateAlert";

export default function functionTodo() {
  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("tareas")) || []);
  const [taskFilter, setTaskFilter] = useState({ filtro: false, tareas: [] });
  const [tarea, setTarea] = useState("");
  const [alerta, setAlerta] = useState(false);

  function handleChange(e) {
    setTarea(e.target.value);
  }

  function agregarTarea() {
    if (!tarea.trim()) return;

    const tareaDuplicada = tareas.some((tareaExistente) => tareaExistente.descripcion.toLowerCase() === tarea.toLowerCase());

    if (tareaDuplicada) {
      setAlerta(true);
      return;
    }

    const nuevaTarea = { descripcion: tarea, id: crypto.randomUUID(), check: false };
    const nuevasTareas = [...tareas, nuevaTarea];

    setTareas(nuevasTareas);
    localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
    setTarea("");
  }

  function filtrarTareas(value) {
    filterTasks(value, tareas, setTaskFilter);
  }

  return (
    <>
      <Center h="160px">
        <SimpleGrid columns={2} spacingX="140px" spacingY="140px">
          <AddTask tarea={tarea} handleChange={handleChange} filtrarTareas={filtrarTareas} />
        </SimpleGrid>
      </Center>

      <DuplicateAlert alerta={alerta} setAlerta={setAlerta} />

      <Button colorScheme="pink" width="30vh" onClick={agregarTarea} ml="50vh">
          Agregar <Icon as={ArrowForwardIcon} />
        </Button>

          <Box align="left" justify="left" h="2px" >
       
        <TaskList tareas={tareas} setTareas={setTareas} taskFilter={taskFilter} setTaskFilter={setTaskFilter} />
      </Box>
    </>
  );
}

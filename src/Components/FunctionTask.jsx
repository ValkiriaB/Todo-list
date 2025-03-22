import { useState } from "react";
import { Icon, Text, Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import DeleteTask from "./DeleteTask"; // Importamos el componente DeleteTask

export default function FunctionTask({ tareas, setTareas, taskFilter, setTaskFilter }) {
  // Estado para manejar la visibilidad del modal y la tarea seleccionada para eliminar
  const [isOpen, setIsOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null); // Almacenamos la tarea que se desea eliminar

  // Función para abrir el modal de eliminación y pasar la tarea seleccionada
  const onOpen = (id) => {
    setTaskToDelete(tareas.find((tarea) => tarea.id === id)); // Busca la tarea por su id
    setIsOpen(true); // Abre el modal de confirmación
  };

  // Función para marcar una tarea como completada (toggle de check)
  const completeTask = (id) => {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, check: !tarea.check } : tarea
    );
    setTareas(nuevasTareas); // Actualiza el estado de las tareas
    localStorage.setItem("tareas", JSON.stringify(nuevasTareas)); // Actualiza el almacenamiento local
  };

  // Filtra las tareas según el filtro activo, si no está activo, muestra todas
  const tareasMostradas = taskFilter.filtro ? taskFilter.tareas : tareas;

  return (
    <>
      {/* Contenedor de las tareas, que se muestra de manera flexible */}
      <Flex wrap="wrap" justify="center" mt="20px">
        {tareasMostradas.map((tarea) => (
          <Box
            key={tarea.id}
            bg="yellow.200"
            p="20px"
            m="10px"
            borderRadius="10px"
            boxShadow="md"
            width="200px"
            height="150px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            textAlign="center"
            position="relative"
            transform="rotate(-3deg)"
            _hover={{ transform: "rotate(0deg)", transition: "0.2s" }}
          >
            {/* Descripción de la tarea, con efecto de tachado si está completada */}
            <Text
              fontFamily="cursive"
              fontSize="18px"
              textAlign="center"
              fontWeight="normal"
              color={tarea.check ? "gray.600" : "black"} // Cambia color si la tarea está completada
              textDecoration={tarea.check ? "line-through" : "none"} // Aplica tachado si está completada
              textDecorationThickness="3px"
              textDecorationColor="gray.700"
              opacity={tarea.check ? 0.6 : 1} // Opcional, hace la tarea más tenue si está completada
            >
              {tarea.descripcion}
            </Text>

            {/* Grupo de botones para completar o eliminar la tarea */}
            <ButtonGroup size="sm" mt="10px" justifyContent="center">
              {/* Botón para marcar la tarea como completada */}
              <Button colorScheme="green" onClick={() => completeTask(tarea.id)}>
                <Icon as={CheckIcon} />
              </Button>
              {/* Botón para abrir el modal de eliminación */}
              <Button colorScheme="red" onClick={() => onOpen(tarea.id)}>
                <Icon as={DeleteIcon} />
              </Button>
            </ButtonGroup>
          </Box>
        ))}
      </Flex>

      {/* Componente DeleteTask, que maneja la lógica de eliminación */}
      <DeleteTask
        isOpen={isOpen} // Controla si el modal está abierto o cerrado
        onClose={() => setIsOpen(false)} // Cierra el modal
        tareaAEliminar={taskToDelete} // Pasa la tarea seleccionada para eliminar
        eliminarTarea={(id) => {
          // Función para eliminar una tarea
          const nuevasTareas = tareas.filter((tarea) => tarea.id !== id); // Filtra las tareas, eliminando la seleccionada
          setTareas(nuevasTareas); // Actualiza el estado con las tareas restantes
          localStorage.setItem("tareas", JSON.stringify(nuevasTareas)); // Actualiza el almacenamiento local

          // Si hay un filtro activo, actualiza también las tareas filtradas
          if (taskFilter.filtro) {
            setTaskFilter({
              filtro: true,
              tareas: taskFilter.tareas.filter((tarea) => tarea.id !== id),
            });
          }
        }}
      />
    </>
  );
}

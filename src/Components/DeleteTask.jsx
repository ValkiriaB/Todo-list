import {
    Button,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Icon,
  } from "@chakra-ui/react";
  import { DeleteIcon } from "@chakra-ui/icons";
  
  export default function DeleteTask({
    isOpen,
    onClose,
    tareaAEliminar,
    eliminarTarea,
  }) {
    const deleteTask = () => {
      if (tareaAEliminar) {
        eliminarTarea(tareaAEliminar.id); // Elimina la tarea usando la función pasada como prop
      }
      onClose(); // Cierra el modal
    };
  
    return (
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirmar eliminación
            </AlertDialogHeader>
  
            <AlertDialogBody>
              ¿Estás seguro de que deseas eliminar esta tarea?
              <br />
              <strong>{tareaAEliminar?.descripcion}</strong>
              <br />
              Esta acción no se puede deshacer.
            </AlertDialogBody>
  
            <AlertDialogFooter>
              <Button colorScheme="gray" onClick={onClose}>
                Cancelar
              </Button>
              <Button
                colorScheme="red"
                onClick={deleteTask} // Aquí se maneja la eliminación
                ml={3}
              >
                <Icon as={DeleteIcon} mr={2} /> Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }
  
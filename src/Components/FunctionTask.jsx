import { Icon } from '@chakra-ui/react'
import { DeleteIcon,CheckIcon } from '@chakra-ui/icons'
import {Box,Button,ButtonGroup,Container,Flex,Heading,Spacer,} from "@chakra-ui/react";

export default function FunctionTask({ tareas, setTareas, Taskfilter, setTaskfilter}) {
  
    const Delete = (id) => {

        setTareas(tareas.filter((tarea) => tarea.id != id))
        localStorage.setItem('tareas', JSON.stringify(tareas.filter((tarea) => tarea.id != id)))
        let Filtrado
        if (Taskfilter.filtro === true){
            Filtrado = {filtro:true , tareas:Taskfilter.tareas.filter((tarea) => tarea.id != id)}
        }
        else {
            Filtrado = {filtro:false , tareas:Taskfilter.tareas.filter((tarea) => tarea.id != id)}
        }
        setTaskfilter(Filtrado)
    }

    const completeTask = (id) => {
        const tarea = tareas.find(element => element.id === id)
        const index = tareas.findIndex(element => element.id === id)

        const tareasTodo = [...tareas]
        tarea.check = !(tarea.check)
        tareasTodo[index] = tarea
        setTareas (tareasTodo)
        localStorage.setItem('tareas', JSON.stringify(tareasTodo))
    }



const Items = (Taskfilter.tareas.length === 0 && Taskfilter.filtro === false)
?
tareas.map((tarea) => (
    <Flex key={tarea.id} w={[ 400, 600]} p='10px'  border="2px" borderColor="purple.300" borderRadius={15}>
      <Box>
        <Heading as={tarea.check ? 's' : '' } color='black' size="md">{tarea.descripcion}</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme='green'  height='40px' width='50px' onClick={() => completeTask(tarea.id)}><Icon as={CheckIcon}/></Button>
        <Button colorScheme='red' height='40px' width='50px' onClick={() => Delete(tarea.id)}><Icon as={DeleteIcon}/></Button>
      </ButtonGroup>
    </Flex>
  ))
:
Taskfilter.tareas.map((tarea) => (
    <Flex  key={tarea.id} w={[ 400, 600]} p='10px'  border="2px" borderColor=" purple.300" borderRadius={15}>
      <Box >
        <Heading as={tarea.check ? 's' : ''} color='black'>{tarea.descripcion}</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme='green' height='40px' width='50px' onClick={() => completeTask(tarea.id)}><Icon as={CheckIcon}/></Button>
        <Button colorScheme='red' height='40px' width='50px' onClick={() => Delete(tarea.id)}><Icon as={DeleteIcon}/></Button>
      </ButtonGroup>
    </Flex>
  ));

  return <Container maxWidth='max-content' mt='50px'>{Items}</Container>;
  
}
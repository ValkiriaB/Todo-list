import{ useState }from 'react';
import {Box,Input,Select,SimpleGrid,Center,Button} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/react";
import {FormLabel,FormControl} from "@chakra-ui/react"
import {ArrowForwardIcon} from '@chakra-ui/icons'
import  FunctionTask from "./FunctionTask";

export  default function FunctionTodo() {

  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem('tareas')) || []);
  const [Taskfilter,setTaskfilter] = useState ({filtro:false,tareas: []})
  const [tarea, setTarea] = useState("");

   function handleChange(e) {
    setTarea(e.target.value);
  }

  function agregarTarea() {
    let Todo = [...tareas];
    let tareaIngresada = {
      descripcion: [...tarea],
      id: self.crypto.randomUUID(),
      check: false,
    };
    Todo.push(tareaIngresada);
    setTareas(Todo);
    localStorage.setItem('tareas', JSON.stringify(Todo))
    setTarea("");
  }


  function filtrarTareas(value) {
    let tareasTodo = [...tareas]
    if (value === 'todas') {
        let  Filtrado= {filtro:false,tareas:[]}
       setTaskfilter( Filtrado)
        localStorage.setItem('Taskfilter', JSON.stringify( Filtrado))
    }

    if (value === 'completas') {
        let  Filtrado= {filtro:true, tareas:tareasTodo.filter(tarea => tarea.check === true)}
       setTaskfilter( Filtrado)
        localStorage.setItem('Taskfilter', JSON.stringify( Filtrado))
    }

    if (value === 'incompletas') {
        let  Filtrado={filtro:true, tareas:tareasTodo.filter(tarea => tarea.check === false)}
       setTaskfilter( Filtrado)
        localStorage.setItem('Taskfilter', JSON.stringify( Filtrado)) 
    }


  }

  
  return (
  <> 
<Center h='160px' >
   
<SimpleGrid columns={2} spacingX='160px' spacingY='160px'>

<FormControl width="60vh">
  
<FormLabel >Tarea</FormLabel>
 <Input type='text' placeholder="Ingresa una tarea" border="2px" borderColor="pink.500" value={tarea}onChange={handleChange}/>
 </FormControl>

 <FormControl>

 <FormLabel >Seleccionar</FormLabel>

  <Select border="2px" borderColor="pink.500"placeholder="Seleccionar" onChange={(e)=> filtrarTareas(e.target.value)} >
  <option value="todas" >Todas</option>
  <option value="completas">Completas</option>
  <option value="incompletas">Incompletas</option>
  </Select>
 
  </FormControl>
  </SimpleGrid>
</Center>
  
  <Box align="center" justify="center" h='2px' >
   <Button colorScheme='pink' width="40vh" onClick={agregarTarea}>Agregar <Icon as={ArrowForwardIcon}/></Button>
    <FunctionTask tareas={tareas} setTareas={setTareas} Taskfilter={Taskfilter} setTaskfilter={setTaskfilter}/>
    </Box>
    </> 
  );
}
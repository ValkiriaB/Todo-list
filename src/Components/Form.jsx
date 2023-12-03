import { FormControl, FormLabel,Input,Select, SimpleGrid,Center} from '@chakra-ui/react'

export default function Form(){
  return <>

  <Center h='160px' >
  
  <SimpleGrid columns={2} spacingX='160px' spacingY='160px'>

  <FormControl width="60vh">

  <FormLabel >Tarea</FormLabel>
  <Input type='text' placeholder="Ingresa una tarea" borderColor='black' />

  </FormControl>

  <FormControl>

  <FormLabel >Seleccionar</FormLabel>

  <Select  borderColor='black'>
  <option value="todas">Todas</option>
  <option value="completas">Completas</option>
  <option value="incompletas">Incompletas</option>

  </Select>
  </FormControl>
  </SimpleGrid>
  </Center>

  </>
} 
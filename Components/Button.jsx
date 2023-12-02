import {Button, Icon,Flex} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'

export default function Boton(){
return<>
<Flex align="center" justify="center" h='2px' >
 <Button colorScheme='pink' width="40vh">Agregar <Icon as={ArrowForwardIcon}/></Button>
 </Flex>


</>



}
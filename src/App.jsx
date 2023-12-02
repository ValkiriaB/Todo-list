import {Box} from "@chakra-ui/react";
import { useState } from 'react'
import  Header from "./Components/Header.jsx"
import  Form from "./Components/Form.jsx"
import Button from "./Components/Button.jsx"

function App(){

return(
  
<Box bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"  w="100vw" h="100vh">
<Header/>
<Form/>
<Button/>
</Box>
)



}



export default App;

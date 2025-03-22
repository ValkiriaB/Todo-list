import React  from 'react';
import Header from './Components/Header';
import {Box} from "@chakra-ui/react";
import  TaskManager from "./Components/TaskManager";


function App() {
  return (
    <Box>
        <Header/>
        <TaskManager/>
 </Box> 
 );
}

export default App;

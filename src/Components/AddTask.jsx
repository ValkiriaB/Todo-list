// addTask.js
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

export default function addTask({ tarea, handleChange, filtrarTareas }) {
  return (
    <>
      <FormControl width="60vh">
        <FormLabel>Tarea</FormLabel>
        <Input
          type="text"
          placeholder="Ingresa una Tarea"
          border="2px"
          borderColor="pink.500"
          value={tarea}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Seleccionar</FormLabel>
        <Select
          border="2px"
          borderColor="pink.500"
          placeholder="Seleccionar"
          onChange={(e) => filtrarTareas(e.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="completas">Completas</option>
          <option value="incompletas">Incompletas</option>
        </Select>
      </FormControl>
    </>
  );
}

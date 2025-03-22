// duplicateAlert.jsx
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";

export default function duplicateAlert({ alerta, setAlerta }) {
  return (
    alerta && (
      <Alert
        status="error"
        borderRadius="md"
        position="fixed"
        top="30%"
        left="44%"
        width="auto"
        maxWidth="280px"
        boxShadow="lg"
        zIndex="9999"
      >
        <AlertIcon />
        <AlertTitle size="sm">¡Error!</AlertTitle>
        Ya existe una tarea con ese nombre.
        <CloseButton
          position="absolute"
          right="5px"
          top="8px"
          onClick={() => setAlerta(false)}
        />
      </Alert>
    )
  );
}

import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import TaskTable from "./components/TaskTable";

function App() {
  return (
    <>
      <Box maxW={1000} mx="auto" p={6} pt={24} fontSize="sm">
        <Heading mb={10}>TanStack Table</Heading>
        <TaskTable />
      </Box>
    </>
  );
}

export default App;

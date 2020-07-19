import React from 'react';
import Form from "./Form/index";
import Tasks from "./Tasks/index";
import Buttons from "./Buttons/index";
import Section from "./Section/index";
import Header from "./Header/index";
import Container from "./Container/index";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;


function App() {
  return (
    <Container>
     <Header title="Lista zadań" />
      <Section 
      title="Dodaj nowe zadanie" 
      body={<Form />} 
      />

      <Section
      title="Lista zadań"
      body={ <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />

    </Container>
  );
}

export default App;

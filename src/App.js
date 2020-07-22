import React, { useState } from 'react';
import Form from "./Form/index";
import Tasks from "./Tasks/index";
import Buttons from "./Buttons/index";
import Section from "./Section/index";
import Header from "./Header/index";
import Container from "./Container/index";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "rzucić wszystko i wyjechać w bieszczady", done: false },
];


function App() {
const [hideDone, setHideDone] = useState(false);

const toggleHideDone = () => {
  setHideDone(hideDone => !hideDone);
};

  return (
    <Container>
     <Header title="Lista zadań" />
      <Section 
      title="Dodaj nowe zadanie" 
      body={<Form />} 
      />

      <Section
      title="Lista zadań"
      body={ 
      <Tasks tasks={tasks} hideDone={hideDone} />
      }
      extraHeaderContent={
      <Buttons 
        tasks={tasks} 
        hideDone={hideDone} 
        toggleHideDone={toggleHideDone}
        />
      }
      />

    </Container>
  );
}

export default App;

import React, { useState } from "react";
import { Filter } from "./Filter.js";
import { PersonForm } from "./PersonForm";
import { Persons } from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "654 236 984" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleOnChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleOnChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleOnChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setPersons([...persons, { name: newName, phone: newNumber }]);
    alert(`${newName} is already added to phonebook`);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filtro={filter} cambiarFiltro={handleOnChangeFilter} />
      <h3>Add new</h3>
      <PersonForm
        handleOnChangeName={handleOnChangeName}
        newName={newName}
        handleOnSubmit={handleOnSubmit}
        newNumber={newNumber}
        handleOnChangeNumber={handleOnChangeNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;

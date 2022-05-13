import { useState, useEffect } from "react";
import Search from "./components/Search";
import NewContact from "./components/NewContact";
import Contacts from "./components/Contacts";
import Notification from "./components/Notification";
import contactsService from "./services/contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [notification, setNotification] = useState("");

  // rendering data from server
  useEffect(() => {
    contactsService.getAll().then((initialList) => {
      setPersons(initialList);
    });
  }, []);

  // creating a filter for the search bar
  const filteredName = !nameFilter
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().match(nameFilter.toLocaleLowerCase())
      );

  // adding a new person
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    // asking for edit if its existing and if not adding it to database

    if (persons.map((person) => person.name).includes(newName)) {
      if (
        window.confirm(
          `'${newName}' is already added to the phonebook, replace the old number with the new one?`
        )
      ) {
        const personData = persons.find((person) => person.name === newName);
        const editedPerson = { ...personData, number: newNumber };
        const id = editedPerson.id;
        contactsService
          .update(id, editedPerson)
          .then((response) => {
            setPersons(
              persons.map((person) => (person.id !== id ? person : response))
            );
            setNewName("");
            setNewNumber("");
            setNotification({
              text: `successfully edited '${editedPerson.name}'`,
              status: "success",
            });
            setTimeout(() => {
              setNotification({
                text: "",
                status: "null",
              });
            }, 4000);
          })
          .catch((error) => {
            setNotification({
              text: `failed to edit '${editedPerson.name}'. it has already been removed from server!`,
              status: "error",
            });
            setTimeout(() => {
              setNotification({
                text: "",
                status: "null",
              });
              setNewName("");
              setNewNumber("");
            }, 4000);
          });
      }
    } else {
      contactsService.create(personObject).then((returnedList) => {
        setPersons(persons.concat(returnedList));
        setNotification({
          text: `successfully added '${returnedList.name}'`,
          status: "success",
        });
        setTimeout(() => {
          setNotification({
            text: "",
            status: "null",
          });
        }, 4000);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  // event handlers
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const handleFilterName = (event) => {
    console.log(event.target.value);
    setNameFilter(event.target.value);
  };
  const handleDelete = (person) => {
    if (window.confirm(`are you sure you want to delete '${person.name}'`))
      contactsService.remove(person.id).then((res) => {
        setPersons(persons.filter((p) => p.id !== person.id));
        setNotification({
          text: `seccessfully deleted '${person.name}'`,
          status: "success",
        });
        setTimeout(() => {
          setNotification({
            text: ``,
            status: "null",
          });
        }, 4000);
      });
  };

  return (
    <div>
      <Search namefilter={nameFilter} handleFilterName={handleFilterName} />
      <Notification message={notification} />
      <NewContact
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Contacts</h2>
      {filteredName.map((person) => (
        <Contacts
          key={person.id}
          person={person}
          handleDelete={() => handleDelete(person)}
        />
      ))}
    </div>
  );
};

export default App;

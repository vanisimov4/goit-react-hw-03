import { useState } from 'react';

import ContactForm from '../contactForm/ContactForm';
import SearchBox from '../searchBox/SearchBox';
import ContactList from '../contactList/ContactList';
import './App.css';

function App() {
  const [contList, setContList] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearch = event => {
    setSearchValue(event.target.value);
  };

  const filteredContacts = contList.filter(contact =>
    contact.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchValue} onChange={handleChangeSearch} />
      <ContactList contList={filteredContacts} />
    </div>
  );
}

export default App;

{
  /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React is amazing</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}

import React, { useState, useEffect } from 'react';
import Employee from './components/Employee/Employee';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';
import Employees from './employees.json';

function App() {
  const [employees, setEmployees] = useState(Employees);

  return (
    <div>
      <Header />
      <Search />
      <Sort />
      <Employee 
        employees={employees}
      />
    </div>
  );
};

export default App;

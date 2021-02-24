// DEPENDENCIES
import React, { useState, useEffect } from 'react';
import Employee from './components/Employee/Employee';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';
import Employees from './utils/employees.json';

function App() {
  // STATE
  const [employees, setEmployees] = useState(Employees);
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")

  // EFFECTS
  // Search for employees by name & watch for changes to search.
  useEffect(() => {
    if (search === "") {
      return;
    } 
    let employeeSearch = [];
    for (let i = 0; i < Employees.length; i++) {
      if (Employees[i].name.includes(search)) {
        employeeSearch.push(Employees[i]);
      };
    };
    setEmployees(employeeSearch);
  }, [search]);

  // Sort employees by name & watch for changes to sort.
  useEffect(() => {
    if (sort === "") {
      return;
    }
    setEmployees(sort);
  }, [sort])

  // Log employees & watch for changes to employees.
  useEffect(() => {
    console.log(employees)
  }, [employees])

  // FUNCTIONS
  // Get search term from input & update search.
  const searchEmployees = event => {
    setSearch(event.target.value);
  };

  // Change sort order upon click.
  const sortName = event => {
    event.preventDefault();
    const sortAsc = Employees.name.sort();
    const sortDesc = sortAsc.reverse();
    setSort((sort === "" || sortDesc) ? sortAsc : sortDesc);
  }

  // COMPONENTS
  return (
    <div>
      <Header />
      <Search 
        searchEmployees={searchEmployees}
      />
      <Sort 
        sortName={sortName}
      />
      <Employee 
        employees={employees}
      />
    </div>
  );
};

export default App;

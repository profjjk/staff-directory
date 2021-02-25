// DEPENDENCIES
import React, { useState, useEffect } from 'react';
import Employee from './components/Employee';
import Header from './components/Header';
import Search from './components/Search';
import Sort from './components/Sort';
import Employees from './utils/employees.json';


function App() {
  // STATE
  const [employees, setEmployees] = useState(Employees);
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")
  const [carrot, setCarrot] = useState("")

  // EFFECTS
  // Search for employees by name & watch for changes to search.
  useEffect(() => {
    if (search === "") {
      setEmployees(Employees)
      return;
    }
    let employeeSearch = [];
    for (let i = 0; i < Employees.length; i++) {
      if (Employees[i].name.toLowerCase().includes(search.toLowerCase())) {
        employeeSearch.push(Employees[i]);
      };
    };
    setEmployees(employeeSearch);
  }, [search]);

  // Watch for changes to sort.
  useEffect(() => {
    if (sort === "") {
      setCarrot('\u25BA')
    }
    if (sort === "asc") {
      employees.sort((name1, name2) => {
        let emp1 = name1.name.toLowerCase();
        let emp2 = name2.name.toLowerCase();
        if (emp1 < emp2) {
          setCarrot('\u25BC')
          return -1;
        }
        return 0;
      })
    }
    if (sort === "desc") {
      employees.sort((name1, name2) => {
        let emp1 = name1.name.toLowerCase();
        let emp2 = name2.name.toLowerCase();
        if (emp1 > emp2) {
          setCarrot('\u25B2')
          return -1;
        }
        return 0;
      })
    }
  }, [sort, employees])

  // Get & update search.
  const searchEmployees = event => {
    setSearch(event.target.value);
  };

  // COMPONENTS
  return (
    <div>
      <Header />
      <Search 
        searchEmployees={searchEmployees}
      />
      <Sort
        carrot={carrot}
        sort={sort}
        setSort={setSort}
      />
      <Employee 
        employees={employees}
      />
    </div>
  );
};

export default App;

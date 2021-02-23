import React from 'react';
import Employee from './components/Employee/Employee';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Sort />
      <Employee />
    </div>
  );
};

export default App;

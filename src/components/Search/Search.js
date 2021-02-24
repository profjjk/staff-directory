import React from 'react';

function Search(props) {
  return (
    <div className="row justify-content-center mb-5">
      <div className="col-12 input-group w-25 p-3">
        <input 
          className="form-control mx-auto text-center" 
          type="text" 
          placeholder="Search by name"
          value={props.search} 
          onChange={(e) => props.searchEmployees(e)}
        />
      </div>
    </div>
  )
}

export default Search;
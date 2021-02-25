import React from 'react';
import './index.css';

function Sort(props) {
  
  const handleClickSort = event => {
    event.preventDefault();
    if (props.sort === "" || "desc") {
      props.setSort("asc");
    }
    if (props.sort === "asc") {
      props.setSort("desc")
    }
  }

  return (
    <div className="row pt-2 mt-5 border">
      <div className="col-2">
        <h6 className="text-center">Image</h6>
      </div>
      <div className="col-3">
        <h6 className="text-center sort"
          onClick={e => handleClickSort(e)}
        >Name <span>{props.carrot}</span></h6>
      </div>
      <div className="col-2">
        <h6 className="text-center">Phone</h6>
      </div>
      <div className="col-3">
        <h6 className="text-center">Email</h6>
      </div>
      <div className="col-2">
        <h6 className="text-center">DOB</h6>
      </div>
    </div>
  )
}

export default Sort;
import React from 'react';

function Sort(props) {
  return (
    <div className="row pt-2 mt-5 border">
      <div className="col-2">
        <h6 className="text-center">Image</h6>
      </div>
      <div className="col-3">
        <h6 className="text-center"
          // onClick={event => }
        >Name</h6>
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